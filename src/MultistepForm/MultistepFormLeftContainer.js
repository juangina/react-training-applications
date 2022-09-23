
import MultistepFormTextInput from "./MultistepFormTextInput";

function MultistepFormLeftContainer ({currentStage, setCurrentStage, Multistep_Form_Data, formData, setFormData}) {
  //console.log(currentStage);
    return (
        <div className="left-container multistep-form">
          <MultistepFormTextInput Multistep_Form_Data={Multistep_Form_Data} currentStage={currentStage} setCurrentStage={setCurrentStage} formData={formData} setFormData={setFormData}/>
        </div>
    )
}
export default MultistepFormLeftContainer;