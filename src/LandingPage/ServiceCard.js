function ServiceCard(props) {
    return (
        <div className="service-card">
            <img src={props.imageURL} alt={props.imageURLAlt}></img>
            <h4 className="card-title">{props.title}</h4>
        </div>
    );
}

export default ServiceCard;