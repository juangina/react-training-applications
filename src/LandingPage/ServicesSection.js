import ServiceCard from './ServiceCard';

const SERVICES_ARRAY = [
    {
        imageURL: "https://assets.codepen.io/6060109/agency-service-1.png",
        imageURLAlt: "lady on computer",
        title: "Web Design"
    },
    {
        imageURL: "https://assets.codepen.io/6060109/agency-service-2.png",
        imageURLAlt: "pressing virtual keyboard",
        title: "ECommerce"
    },
    {
        imageURL: "https://assets.codepen.io/6060109/agency-service-3.png",
        imageURLAlt: "typing on computer keyboard",
        title: "Automation"
    }
]
// const SERVICE_CARDS = SERVICES_ARRAY.map(serviceCard => 
//     <ServiceCard title={serviceCard.title} imageURL={serviceCard.imageURL} imageURLAlt={serviceCard.imageURLAlt}  />    
// );

function ServicesSection() {
    return (
      <div className="services-section">
          <h3>Our Services</h3>
          {/* You can also pass the entire object as a prop to the ServiceCard Component */}
          <div className="services-cards-container">
            {
                SERVICES_ARRAY.map(serviceCard => {
                    return (
                        <ServiceCard key={serviceCard.title}  title={serviceCard.title} imageURL={serviceCard.imageURL} imageURLAlt={serviceCard.imageURLAlt}  />
                    )
                })
            }
          </div>
      </div>
    );
  }

  
  
  export default ServicesSection;