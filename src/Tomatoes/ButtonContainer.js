
function ButtonContainer (props) {
    return (
        <div onClick={props.onClick} className="button tomatoes">{props.symbol}</div>
    )
}
export default ButtonContainer;