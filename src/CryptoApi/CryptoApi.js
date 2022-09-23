import "./CryptoApi.css";
import {useEffect, useState} from 'react';

const CRYPTO_NAME = {
    BTCUSDT: "Bitcoin",
    ETHUSDT: "Ethereum",
    SOLUSDT: "Solana",
    ADAUSDT: "Cardano",
    DOGEUSDT: "DogeCoin"
}

function CrypoApi() {
  const [cryptoRawData, setCryptoRawData] = useState({});
  const [cryptoFilteredData, setCryptoFilteredData] = useState([])
  const [searchData, setSearchData] = useState('');

  useEffect (
    ()=> {

      getCryptoData(setCryptoRawData, setCryptoFilteredData);

    }, 
    []
  );
  //Async Functions
  async function getCryptoData(setCryptoRawData, setCryptoFilteredData) {
    const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
    const jsonData = await res.json();
    setCryptoRawData(jsonData);
    //console.log(jsonData);
    let filteredData = [];
    jsonData.forEach(element => {
      //console.log(element.symbol);
      if(element.symbol === 'BTCUSDT') {
          filteredData.push(element);
      }
      if(element.symbol === 'ETHUSDT') {
          filteredData.push(element);
      }
      if(element.symbol === 'SOLUSDT') {
          filteredData.push(element);
      }
      if(element.symbol === 'ADAUSDT') {
          filteredData.push(element);
      }
      if(element.symbol === 'DOGEUSDT') {
          filteredData.push(element);
      }
    });
    //console.log(filteredData);
    setCryptoFilteredData(filteredData);
  }
  function getData () {
    fetch('https://api2.binance.com/api/v3/ticker/24hr')
    .then(function(resData) {
      return resData.json();
    })
    .then(function(jsonData) {
        setCryptoRawData(jsonData);
      //console.log(jsonData);
      let filteredData = [];
      jsonData.forEach(element => {
        //console.log(element.symbol);
        if(element.symbol === 'BTCUSDT') {
            filteredData.push(element);
        }
        if(element.symbol === 'ETHUSDT') {
            filteredData.push(element);
        }
        if(element.symbol === 'SOLUSDT') {
            filteredData.push(element);
        }
        if(element.symbol === 'ADAUSDT') {
            filteredData.push(element);
        }
        if(element.symbol === 'DOGEUSDT') {
            filteredData.push(element);
        }
      });
      //console.log(filteredData);
      setCryptoFilteredData(filteredData);
    })
    .catch (function (err) {
      console.log(err);
    })
  }

  function searchList(searchData) {
    let searchResults = [];
    cryptoFilteredData.forEach(element => {
        if (element.symbol.toLowerCase() === searchData.toLowerCase() ) {
            searchResults.push(element);
        }
        setCryptoFilteredData(searchResults);
    })
    //console.log(searchData);
  }
  function Button({buttonText, getData, searchList, searchData, runFuncID}) {
    
    function runFunc (runFuncID) {
        if (runFuncID === 0) {
            getData();
        } else if (runFuncID === 1) {
            searchList(searchData)
        }
    }
    return (
      <button onClick={()=>runFunc(runFuncID)}
        style={{
            backgroundColor: "blue", 
            color: "white", 
            padding: '5px 15px', 
            cursor: "pointer"}}
      >
        {buttonText}
      </button>
    )
  }

  return (
    <div className="crypto-api">
      <nav>
        <img
          alt="logo"
          src="https://assets.codepen.io/6060109/crypto-logo-secondary.png"
        />
        <input 
            type="text" 
            placeholder="Search"
            onChange={(e)=>{
                setSearchData(e.target.value);
            }}
        />
        <Button buttonText={'Search'} searchData={searchData} searchList={searchList} runFuncID={1} />
      </nav>
      <div className="main-content">
        <h2>Today's cryptocurrency prices</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h %</th>
                </tr>
            </thead>
            <tbody>
          {cryptoFilteredData.map((crypto, index, array) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{CRYPTO_NAME[crypto.symbol]}</td>
                <td>${parseFloat(crypto.askPrice).toLocaleString()}</td>
                <td style={Number(crypto.priceChangePercent) > 0 ? { color: "green" } : {color: "red"}}>
                    {   
                        Number(crypto.priceChangePercent) > 0 
                        ? `▲${parseFloat(crypto.priceChangePercent).toFixed(2)}%`
                        
                        : `▼${parseFloat(crypto.priceChangePercent).toFixed(2)}%`
                    }
                </td>
            </tr>
            ))}
            </tbody>
        </table>
        <div className="bottom-logo-ctr">
          <img
            className="bottom-logo"
            alt="logo"
            src="https://assets.codepen.io/6060109/crypto-logo-primary.png"
          />
        </div>
        <Button buttonText={'Get Data'} getData={getData} runFuncID={0}/>
      </div>
    </div>
  );
}
export default CrypoApi

/*
const CRYTO_SYMBOL = [
    "BTCUSDT",
    "ETHUSDT",
    "SOLUSDT",
    "ADAUSDT",
    "DOGEUSDT"
]
const CRYTO_SYMBOL = Object.keys(CRYPTO_NAME);

const filteredData = jsonData.filter((ticker) => {
    if (CRYTO_SYMBOL.includes(ticker.symbol)) {
        return true;
    }
});
*/