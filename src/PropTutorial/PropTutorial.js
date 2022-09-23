import './PropTutorial.css';
import {useEffect, useState} from 'react';

  //local TRADITIONAL module functions
  function UtilFunc (props) {
    return `Hello ${props.name}`
  }

  function MyTitle (props) {
    return (
      <h2>{props.title}</h2>
    )
  }

  function Button(props) {
    return (
      <button
        style={{backgroundColor: "blue", color: "white"}}
        onClick={props.onClick}
      >
        {props.buttonTitle}
      </button>
    )
  }

  function PropTutorial () {
    useEffect (
      ()=> {
        // console.log("PropTutorial Component MOUNTED");
        // return () => console.log('PropTutorial Component UNMOUNTED');
      }, 
      []
    );
    const [age, setAge] = useState(59);
    return (
      <div className='prop-tutorial'>
        <UtilFunc name="Juan"/>
        <MyTitle title={`This year, you are ${age}`}/>
        <MyTitle title={`Next year, you will be ${age + 1}. Yikes!`}/>
        <Button 
          onClick={() => setAge(age+1)}
          buttonTitle="Advance Year"
        />
      </div>
    )
  }

export default PropTutorial;