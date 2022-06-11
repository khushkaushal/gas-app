import './app.module.css'
import './mystyles.scss'

const Calculator = (props: any) => {
  return (
    <div className="container is-fullhd">
      <form>
      <div className="columns">
        <div className="column">
          <label className="label">One-Way Distance to pump(KM)</label>
          <input className="input is-primary" type="text" name="distance" onChange={props.handleChange}/>
          <label className="label mt-3">Exchange Rate(USD to CAD)</label>
          <input className="input is-primary" type="text" name="exRate" onChange={props.handleChange} placeholder={props.formData.exRate}/>
        </div>
        <div className="column">
          <label className="label">Local Gas Price($CAD/L)</label>
          <input className="input is-primary" type="text" name="cadPrice" onChange={props.handleChange} placeholder={props.formData.cadPrice}/>
          <label className="label mt-3">Gas Mileage(L/100KM)</label>
          <input className="input is-primary" type="text" name="mileage" onChange={props.handleChange}/>
          <button className="button mt-5 p-3 is-success" onClick={props.calculate}>Calculate Savings</button>
        </div>
        <div className="column">
          <label className="label">US Gas Price($USD/Gal)</label>
          <input className="input is-primary" type="text" name="usdPrice" onChange={props.handleChange} placeholder={props.formData.usdPrice}/>
          <label className="label mt-3">Quantity of Gas(L)</label>
          <input className="input is-primary" type="text" name="quantity" onChange={props.handleChange}/>
          <button className="button mt-5 p-3 is-warning" onClick={props.reset}>Reset</button>
        </div>
      </div>
      </form>
      <section className="hero is-small is-primary mt-4 p-3">
        <div className="hero-subtitle is-flex">
          <p className="title is-align-content-center">
            You will save CAD${Math.round(props.formData.savings)}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Calculator