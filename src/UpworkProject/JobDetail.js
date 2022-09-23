import "./jobDetail.css"
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { PrimaryButton, PrimaryButtonOutlined } from "./StyledComponents";
import TextField from '@mui/material/TextField';
import {useEffect} from 'react';

export default function JobDetail({jobList}) {
  const location = useLocation();
  
  let {id} = useParams();

  let jobDetail = {};
  for(let i=0; i < jobList.length; i++) {

    if(jobList[i].id === Number(id)) {
      jobDetail = jobList[i];
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    if(location.state === null) {
      navigate('/upwork/login');
    } else if (location.state.loggedIn === 'No') {
      navigate('/upwork/login', {state: {loggedIn: 'No'}})
    }
  })
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
        <div className="details-container-upwork">
          <div className="body-details-container">
              <div className="job-card-upwork">
                <h3>{jobDetail.title}</h3>
                <div>{jobDetail.category}</div>
                <div>Posted {jobDetail.postedTime}</div>
                <div><img className="location-img" src="https://assets.codepen.io/6060109/location-icon.png" alt="location icon"/>{jobDetail.remote===true ? 'Remote,':''} {jobDetail.location}</div>
                <div>{jobDetail.description}</div>
              </div>
          </div>
          <div className="sidebar-details-container">
            <PrimaryButton 
            fullWidth
            variant="contained"
            color="success"
            >
              Submit a Proposal
          </PrimaryButton>
          <PrimaryButtonOutlined 
            fullWidth
            variant="outlined"
            color="success"
            >
              <img className="location-img" src="https://assets.codepen.io/6060109/heart-icon.png" alt="location icon"/>Save Job
          </PrimaryButtonOutlined>
            <h4>About the client</h4>
            {jobDetail.paymentVerified && <h4><img className="location-img" src="https://assets.codepen.io/6060109/check-icon.png" alt="location icon"/>Payment Verified</h4>}
            <h4><img className="location-img" src="https://assets.codepen.io/6060109/location-icon.png" alt="location icon"/>{jobDetail.remote===true ? 'Remote, ':''} {jobDetail.location}</h4>
            <h4>Job Link</h4>
            <TextField
              margin="normal"
              fullWidth
              autoComplete="current-password"
              sx={{
                backgroundColor: "#F1F3F3"
              }}
            />
            <h4>Copy Link</h4>
          </div>          
        </div>
      </div>
    </div>
  )
}