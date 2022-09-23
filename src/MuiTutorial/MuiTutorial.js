import { GreenButton } from './StyledComponents';

import './MuiTutorial.css';
import {useEffect, useState} from 'react';

//local utility TRADITIONAL module functions
function MyUtilFunc ({name}) {
return `Hello ${name}`
}
//local utility COMPONENT module functions
function MyTitle ({title}) {
return (
    <h2>{title}</h2>
)
}
function MyButton({buttonTitle, onClick}) {
return (
    <button
    style={{backgroundColor: "blue", color: "white"}}
    onClick={onClick}
    >
    {buttonTitle}
    </button>
)
}

//main COMPONENT module function
function MuiTutorial () {
const [age, setAge] = useState(59);
useEffect (
    ()=> {
    // console.log("MuiTutorial Component MOUNTED");
    // return () => console.log('MuiTutorial Component UNMOUNTED');
    }, 
    []
);
return (
    <div className='mui-tutorial'>
    <h1>Material UI Library Tutorial</h1>
    <GreenButton variant="contained">Contained</GreenButton>
    <GreenButton variant="contained">Contained</GreenButton>
    </div>
)
}

export default MuiTutorial;