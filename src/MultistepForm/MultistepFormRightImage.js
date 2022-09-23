const IMAGE_URLS = [
  "https://assets.codepen.io/6060109/form-stage-1.png",
  "https://assets.codepen.io/6060109/form-stage-2.png",
  "https://assets.codepen.io/6060109/form-stage-3.png",
  "https://assets.codepen.io/6060109/form-stage-4.png",
]

//You can also create other constant arrays in sync with the stage order
//and use them like a database.

function MultistepFormRightImage ({currentStage}) {
  //console.log(currentStage);
    return (
        <div className="right-image multistep-form mobile">
          <img src={IMAGE_URLS[currentStage]} alt='people at work'/>
        </div>
    )
}
export default MultistepFormRightImage;

/* {currentStage === 0 && 
  <img src="https://assets.codepen.io/6060109/form-stage-1.png" alt='people at work'/>
}
{currentStage === 1 && 
  <img src="https://assets.codepen.io/6060109/form-stage-2.png alt='people at work'"/>
}
{currentStage === 2 && 
  <img src="https://assets.codepen.io/6060109/form-stage-3.png alt='people at work'"/>
}
{currentStage === 3 && 
  <img src="https://assets.codepen.io/6060109/form-stage-4.png alt='people at work'"/>
} */