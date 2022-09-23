import "./jobBoard.css"
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect} from 'react';

export default function JobBoard({jobList, categoryList, currentCategory, setCurrentCategory}) {
  //console.log("currentCategory:", currentCategory);

  let {category} = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  let jobListFiltered = [];

  useEffect(() => {
    if(location.state === null) {
      navigate('/upwork/login');
    } else if (location.state.loggedIn === 'No') {
      navigate('/upwork/login', {state: {loggedIn: 'No'}})
    }
  })
  if(category !== undefined) {
    jobListFiltered = jobList.filter((job) => {
      return job.category === category;
    })
  } else {
    jobListFiltered = jobList;
  }
  return (
    <div className="upwork-container">
      <div className="nav-container-upwork">
        <div className="nav-search-container-upwork">
          <input type="text" className='nav-search-field-upwork' placeholder='Search'/>
          <h4>Find a Job</h4>
          <h4>Login</h4>
        </div>
      </div>
      <div className="body-container-upwork">
        <div className="body-search-container-upwork">
          <div className="category-list-upwork">
            <h4>Find Work</h4>
            <h4>Categories</h4>
            
            <Link to={"/upwork/jobs/"} state={{loggedIn: 'Yes', category: 'All Jobs'}}
                onClick={()=>{
                  setCurrentCategory('All Jobs');
                }}
            >{currentCategory === 'All Jobs' ? <h5 style={{color: 'green'}}>All Jobs</h5> : <h5>All Jobs</h5>}</Link>

            {categoryList.map((category, index)=>(
              <Link to={`/upwork/jobs/${category}`} state={{loggedIn: 'Yes', category: `${category}`}}
                  onClick={()=>{
                    setCurrentCategory(`${category}`);
                  }}
              >{currentCategory === `${category}` ? <h5 key={index} style={{color: 'green'}}>{category}</h5> : <h5 key={index}>{category}</h5>}</Link>
            ))}

          </div>          
          <div className="joblist-container">
            <img className="searchIcon" src="https://assets.codepen.io/6060109/search-icon-white.png" alt="search icon"/>
            <input type="text" className='nav-search-field-upwork' placeholder='Search'/>
            { 
              jobListFiltered.map((job, index) => 
                
                (<div key={index} className="job-card-upwork">
                  <Link to={`/upwork/job/${job.id}`} state={{loggedIn: 'Yes'}}><div>{job.title}</div></Link>
                  
                  <div>Hourly: ${job.hourlyUSD.toFixed(2)}</div>
                  <div>Posted {job.postedTime}</div>
                  <div><img className="location-img" src="https://assets.codepen.io/6060109/location-icon.png" alt="location icon"/>{job.remote===true ? 'Remote,':''} {job.location}</div>
                  <div>{job.description}</div>
                </div>)
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}