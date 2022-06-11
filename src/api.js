import axios from 'axios';

async function getExRate() {
  try {
    const response = await axios.get('https://api.exchangerate.host/latest?base=USD');
    return(response.data.rates.CAD);
  } catch (error) {
    console.error(error);
  }
}

const headers = {
  "content-type": "application/json",
  "authorization": "apikey 4CbP3AZSGLSJ9awmp2GhWe:6Rco6hdJLo0SsQEDaRbPBE"
}

async function getUSGasPrice() {
  try {
    const response = await axios.get('https://api.collectapi.com/gasPrice/stateUsaPrice?state=WA', {
      headers: headers
    });
    return(response.data.result.state.gasoline);
  } catch (error) {
    console.error(error);
  }
}

async function getCAGasPrice(): Promise<any> {
  try {
    const response = await axios.get('https://api.collectapi.com/gasPrice/canada', {
      headers: headers
    });
    return(response.data.result[1].gasoline);
  } catch (error) {
    console.error(error);
  }
}

export {getExRate, getUSGasPrice, getCAGasPrice};