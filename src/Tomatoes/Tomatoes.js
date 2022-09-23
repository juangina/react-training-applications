import './Tomatoes.css';
import TomatoBox from './TomatoBox';
import ButtonContainer from './ButtonContainer';
import React from 'react';

function Tomatoes(props) {
  const [tomatoCounter, setTomatoCounter] = React.useState(0);

  let tomatoArray = [];

  //local COMPONENT function

  function renderTomatoesDisplay () {
      if (tomatoCounter > 0) {
          for(let i=0; i<tomatoCounter; i++) {
              tomatoArray.push(<span>🍅</span>);
          }
          return (
              tomatoArray.map(tomato => <h4>{tomato}</h4>)
          )
      } else {
          return (
          <h4>No Tomatoes</h4>
          )
      }
  };

const tomatoDisplay = renderTomatoesDisplay();

  return (
    <div className="App tomatoes">
      <div className="window tomatoes">
        <h2>Pomodoro Counter</h2>
        <div className="tomato-box tomatoes">
          <h1>{tomatoCounter}</h1>
        </div>
        <div className='tomato-icon-container tomatoes'>
          <TomatoBox tomatoDisplay={tomatoDisplay}/>
        </div>
        <div className="buttons-container tomatoes">
          <ButtonContainer symbol="-" onClick={() => {setTomatoCounter(tomatoCounter-1)}} className="button tomatoes"/>
          <ButtonContainer symbol="+" onClick={() => {setTomatoCounter(tomatoCounter+1)}} className="button tomatoes"/>
        </div>
      </div>
    </div>
  );
}

export default Tomatoes;