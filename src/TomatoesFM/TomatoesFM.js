import './TomatoesFM.css';
import ButtonContainerFM from './ButtonContainerFM';
import React from 'react';
const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];
const dayBoxesArray = [0,0,0,0,0,0,0];

// const dayBoxesArray = [1,2,3];
// const dayBoxesObject = {x:"1", y:"2", z:"3"};
// console.log(dayBoxesArray[0]);
// console.log(dayBoxesObject['x']);

// {...Array, [index]: `${oldData} concat with newData`}
// let copy_dayBoxesArray = {...dayBoxesArray, [0]: 5};
// {...ObjectArray, [key]: `${oldData} concat with newData`}
// let copy_dayBoxesObject = {...dayBoxesObject, ['x']: 5};
// console.log(copy_dayBoxesArray[0]);
// console.log(copy_dayBoxesObject['x']);

function TomatoesFM() {
  // const [tomatoCounter, setTomatoCounter] = React.useState(0);
  const [dayBoxes, setDayBoxes] = React.useState(dayBoxesArray);
  const [currentDay, setCurrentDay] = React.useState('M');
  // REMEMBER, this Component function is event driven.  It runs on certain events.
  // Once such event is when the useState changes.
  function updateCurrentTomatoBox (currentDay, direction) {
    //console.log(currentDay, direction);
    switch(currentDay) {
      case 'M':
        setDayBoxes(({...dayBoxes}) => {
          dayBoxes[0]=dayBoxes[0]+direction;
          //console.log("dayBoxes[0]:", dayBoxes[0]);
          return dayBoxes;
        });
        break;
      case 'T':
        setDayBoxes(({...dayBoxes}) => {
          dayBoxes[1]=dayBoxes[1]+direction;
          //console.log("dayBoxes[1]:", dayBoxes[1]);
          return dayBoxes;
        });
        break;
      case 'W':
        setDayBoxes(({...dayBoxes}) => {
          dayBoxes[2]=dayBoxes[2]+direction
          //console.log("dayBoxes[2]:", dayBoxes[2]);
          return dayBoxes;
        });
        break;
      case 'TH':
        setDayBoxes(({...dayBoxes}) => {
          dayBoxes[3]=dayBoxes[3]+direction;
          //console.log("dayBoxes[3]:", dayBoxes[3]);
          return dayBoxes;
        });
        break;
      case 'F':
        setDayBoxes(({...dayBoxes}) => {
          dayBoxes[4]=dayBoxes[4]+direction;
          //console.log("dayBoxes[4]:", dayBoxes[4]);
          return dayBoxes;
        });
        break;
      case 'SA':
        setDayBoxes(({...dayBoxes}) => {
          dayBoxes[5]=dayBoxes[5]+direction;
          //console.log("dayBoxes[5]:", dayBoxes[5]);
          return dayBoxes;
        });
        break;
      case 'SU':
        setDayBoxes(({...dayBoxes}) => {
          dayBoxes[6]=dayBoxes[6]+direction;
          //console.log("dayBoxes[6]:", dayBoxes[6]);
          return dayBoxes;
        });
        break;
      default:
        // code block
    }
  }
  //console.log(dayBoxes);
  function basketOfTomatoes (length) {
    let newTomatoString = "";
    if(length <= 0) {
      newTomatoString = 'No Tomatoes in the Basket'
      return newTomatoString;
    } else {
      const tomatoArray = [];
      for(let i=0; i<length; i++) {
          tomatoArray.push('🍅');
      }
      let tomatoString = tomatoArray.join('');
        newTomatoString = tomatoString;
        return newTomatoString;
    }
  }
  // Freemote Solution State and Functions
  const [allTomatoes, setAllTomatoes] = React.useState({});
  function addTomato() {
    const newAllTomatoes = {...allTomatoes};
    const currentDayTomatoes = newAllTomatoes[currentDay.toLowerCase()];
    if(currentDayTomatoes) {
      newAllTomatoes[currentDay.toLowerCase()] = currentDayTomatoes + '🍅';
    } else {
      newAllTomatoes[currentDay.toLowerCase()] = '🍅';
    }
    //console.log("allTomatoes:", allTomatoes, "newAllTomatoes:", newAllTomatoes, "currentDayTomatoes:", currentDayTomatoes);
    setAllTomatoes(newAllTomatoes);
  }
  function removeTomato() {
    const newAllTomatoes = {...allTomatoes};
    const currentDayTomatoes = newAllTomatoes[currentDay.toLowerCase()];
    if(currentDayTomatoes) {
      newAllTomatoes[currentDay.toLowerCase()] = currentDayTomatoes.slice(0,-2);
    }
    //console.log("allTomatoes:", allTomatoes, "newAllTomatoes:", newAllTomatoes, "currentDayTomatoes:", currentDayTomatoes);
    setAllTomatoes(newAllTomatoes);
  }
  function testButtonEventHandler(e) {
    console.log("currentDay:", currentDay, "allTomatoes:", allTomatoes);
    addTomato();
  }
  // Freemote solution functions
  return (
    <div className="App tomatoes">
      {/* My Solution Markup */}
      <div className="window tomatoes">
      <button className='test-button' onClick={testButtonEventHandler} style={{display:"none"}}>Test Button</button>
        <h2>Pomodoro Counter</h2>
        {days.map((day, index) => (
          <div key={day} className="tomato-box">
            <h3 className="weekday" onClick={(e)=>{
              setCurrentDay(e.target.innerText);}} 
              style={day.toLowerCase() === currentDay.toLowerCase() ? {fontWeight: '900', color: 'black'}: {fontWeight: '300', color: '#929498'}}>
              {day}
            </h3>
            <div className="tomato-day-box">
              {basketOfTomatoes(dayBoxes[index])}
            </div>
          </div>
        ))}
        <ButtonContainerFM 
          updateCurrentTomatoBox={updateCurrentTomatoBox}
          currentDay={currentDay}
        />
      </div>
      {/* Freemote Solution Markup */}
      <div className="window tomatoes">
      <button className='test-button' onClick={testButtonEventHandler} style={{display:"none"}}>Test Button</button>
        <h2>Pomodoro Counter</h2>
        {days.map((day, index) => (
          <div key={day} className="tomato-box">
            <h3 className="weekday" onClick={(e)=>{
              setCurrentDay(e.target.innerText);}} 
              style={day.toLowerCase() === currentDay.toLowerCase() ? {fontWeight: '900', color: 'black'}: {fontWeight: '300', color: '#929498'}}>
              {day}
            </h3>
            <div className="tomato-day-box">
              {allTomatoes[day.toLowerCase()]}
            </div>
          </div>
        ))}
        <div className="buttons-container tomatoes">
          <div onClick={removeTomato} className="button tomatoes">-</div>
          <div onClick={addTomato} className="button tomatoes">+</div>
        </div>
      </div>
    </div>
  );
}

export default TomatoesFM;

// onClick = {
//   () => {
    // setAlltomatoes (
    //   {
    //     ...allTomatoes, [currentDay]: `${allTomatoes[currentDay]}🍅`
    //   }
//     )
//   }
// }
