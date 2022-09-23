import './AsyncTutorial.css';
import {useEffect, useState} from 'react';


// Main Component 
function AsyncTutorial () {
  const [jsonData, setJsonData] = useState({});
  const [locationData, setLocationData] = useState({});


  useEffect (
    ()=> {
      //console.log("AsyncTutorial Component MOUNTED");
      getLocation(setLocationData)
      //return () => console.log('AysncTutorial Component UNMOUNTED');
    }, 
    []
  );

  //Async Functions
  async function getLocation(callback) {
    const res = await fetch(`https://api.ipbase.com/v2/info?apikey=${process.env.APIKEY_IPBASE}&ip=1.1.1.1`);
    const data = await res.json();
    callback(data);
  }

  function getData () {
    fetch(`https://api.ipbase.com/v2/info?apikey=${process.env.APIKEY_IPBASE}&ip=1.1.1.1`)
    .then(function(resData) {
      return resData.json();
    })
    .then(function(jsonData) {
      //console.log(jsonData);
      setJsonData({...jsonData, ['timezone']: `${jsonData.data.timezone.id}`});
    })
    .catch (function (err) {
      console.log(err);
    })
  }

  //Component Functions
  function GetData ({jsonData}) {
    return (
      <div>{jsonData.timezone}</div>
    )
  }
  function Button({getData}) {
    return (
      <button onClick={getData}
        style={{backgroundColor: "blue", color: "white", cursor: "pointer"}}
      >
        Get Data
      </button>
    )
  }

  //console.log(locationData);

  return (
    <div className='AsyncTutorial'>
      <Button getData={()=>getData()}/>
      <GetData jsonData={jsonData}/>
    </div>

  )
}

export default AsyncTutorial;