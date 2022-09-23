import "./MultistepForm.css";
import {useState} from 'react';

import MultistepFormLeftContainer from "./MultistepFormLeftContainer";
import MultistepFormRightImage from "./MultistepFormRightImage";

let Multistep_Form_Data = {
  email: '',
  budget: '',
  anything_else: ''
};

function MultistepForm () {
  const [currentStage, setCurrentStage] = useState(0);
  const [formData, setFormData] = useState(Multistep_Form_Data);
  //console.log('Multistep_Form_Data:', Multistep_Form_Data);
  //console.log(formData);
    return (
        <div className='multistep-form-container'>
          <MultistepFormLeftContainer Multistep_Form_Data={Multistep_Form_Data} currentStage={currentStage} setCurrentStage={setCurrentStage} formData={formData} setFormData={setFormData} />
          <MultistepFormRightImage currentStage={currentStage} />
        </div>
    )
}
export default MultistepForm;