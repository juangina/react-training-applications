import { useState } from "react";

const FORM_TEXT = [
  "Apply to work with our agency",
  "What's your budget?",
  "Anything else we should know?",
  "Thank you!"
]
const SELECTED_BUTTON = {
    backgroundColor: 'white',
    color: '#745E5E'
}
const BUTTON_TEXT_ARRAY = [
  '$2k',
  '$5k',
  'No Limit'
]
let formAlertStatus = false;

function MultistepFormTextInput ({Multistep_Form_Data, currentStage,setCurrentStage, formData, setFormData}) {
  const [selectedButton, setSelectedButton] = useState(0);
  // const [alertStatus, setAlertStatus] = useState(false);

  if (currentStage === 3 && formAlertStatus === false) { 
    alert(
      `
        YOUR FORM SUBMITTED DATA\n
        Email: ${formData['email']}\n
        Budget: ${formData['budget']}\n
        Comment: ${formData['anything_else']}
      `
      )
      formAlertStatus=true;
    }

  function getData(e) {
    Multistep_Form_Data['email'] = formData['email']
    //console.log(formData);
  }
  function renderInputs () {
    //console.log("currentStage:", currentStage);
    //console.log('selectedButton:', selectedButton);
    if(currentStage === 0) {
      return (<
        input type="text" 
        className="email-input" 
        placeholder="What's your email?"
        onChange={(e)=>{
          setFormData (
            {...formData, ['email']: `${e.target.value}`}
          )
        }} 
      />)
    } 
    else if (currentStage === 1) {
      return (
        <div className="budget-buttons">
          {
            BUTTON_TEXT_ARRAY.map((buttonText, index) => {
              return (
                <button key={index} className="bg2" onClick={(e)=>{
                      setSelectedButton(index)
                      setFormData({...formData, ['budget']: `${e.target.innerText}`})
                    }
                  } style={
                    selectedButton === index 
                    ?  SELECTED_BUTTON  
                    : {}}>{buttonText}
                </button> 
              )
            })
          }
        </div>
      )
    }
    else if (currentStage === 2) {
      return (<
        input 
        type="text" 
        className="anything-else" 
        placeholder="" 
        onChange={(e)=>{
          setFormData (
            {
              ...formData, ['anything_else']: `${e.target.value}`
            }
          )
        }} 
      />)
    }
    else if (currentStage === 3) {
      return (
        <div className="thank you">
        </div>
      )
    }
  }
  let jsxRenderInputs = renderInputs();
    return (
        <div className="text-input multistep-form">
          <h4 className="form-title">{FORM_TEXT[currentStage]}</h4>
          {jsxRenderInputs}
          {currentStage !==3 
            ?  <button 
                onClick={(e)=> {
                  getData(e); 
                  currentStage <= 2 
                  ? setCurrentStage(currentStage+1) 
                  : setCurrentStage(currentStage);
                }}>
                Next
              </button> 
            : <div>
              </div>
          }
        </div>
    )
}
export default MultistepFormTextInput;