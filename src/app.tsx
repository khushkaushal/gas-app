// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import 'bulma/css/bulma.min.css';
import Calculator from './calculator';
import Header from './header';
import { getExRate, getUSGasPrice, getCAGasPrice } from './api';

const App = () => {

  const initialState = {
    distance: "One-way Distance(KM)",
    exRate: "Loading...",
    cadPrice: "Loading...",
    mileage: "L/100KM",
    usdPrice: "Loading...",
    quantity: "Gas Quantity(L)",
    savings: 0
  }

  const [formData, setFormData] = useState(initialState)

  useEffect( () => {
    const fetchData = async () => {
      const exRate = await getExRate();
      const usdPrice = await getUSGasPrice();
      const cadPrice = await getCAGasPrice();
      setFormData({...formData,
                  exRate: exRate,
                  usdPrice: usdPrice,
                  cadPrice: cadPrice});
    }
    fetchData();
  }, [])

  const handleChange = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;
    event.preventDefault();
    setFormData({...formData, [key]:value });
  };

  const calcSavings = (formData: any) => {
    const {distance,
          exRate,
          cadPrice,
          mileage,
          usdPrice,
          quantity} = formData;
    const galToLt = 3.785411784;
    const USCostinCAD = usdPrice*exRate*quantity/galToLt;

    const savings = (cadPrice*quantity) - (USCostinCAD) - (distance*mileage*usdPrice*exRate/(100*galToLt))
    setFormData({...formData, savings: savings});
    console.log(savings)
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    calcSavings(formData);
  }

  const reset = () => {
    setFormData(initialState);
  }

  return (
    <div className="main"> 
    <Header />
    <Calculator formData={formData} handleChange={handleChange} calculate={handleClick} reset={reset}/>
    </div>
  )
}

export default App;

