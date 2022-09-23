
function ButtonContainerFM ({updateCurrentTomatoBox, currentDay}) {
    return (
        <div className="buttons-container tomatoes">
          <div onClick={() => {
                updateCurrentTomatoBox(currentDay, -1)
              }} className="button tomatoes">-</div>
          <div onClick={() => {
                updateCurrentTomatoBox(currentDay, 1)
              }} className="button tomatoes">+</div>
        </div>
    )
}
export default ButtonContainerFM;