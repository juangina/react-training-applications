
function TomatoBoxFM (props) {
    return (
        <div className='tomato-icon-container tomatoes'>
          {props.tomatoString.length <= 0 ? 'No Tomatoes in the Basket' : props.tomatoString}
        </div>
    )
}

export default TomatoBoxFM;