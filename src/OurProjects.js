import './OurProjects.css';
import "./UpworkProject/UpworkProject.css";
import {JOBS, CATEGORIES} from './UpworkProject/jobs';
import { Routes, Route} from "react-router-dom";
import ProjectsList from './ProjectsList';
import PropTutorial from './PropTutorial/PropTutorial';
import MuiTutorial from './MuiTutorial/MuiTutorial';
import AsyncTutorial from './AysncTutorial/AsyncTutorial';
import Tomatoes from './Tomatoes/Tomatoes';
import TomatoesFM from './TomatoesFM/TomatoesFM';
import MultistepForm from './MultistepForm/MultistepForm';
import CryptoApi from './CryptoApi/CryptoApi';
import UpworkProject from './UpworkProject/UpworkProject';
import Login from "./UpworkProject/Login";
import JobBoard from "./UpworkProject/JobBoard";
import JobDetail from "./UpworkProject/JobDetail";
import {useState} from 'react';

function OurProjects({menuPage, setMenuPage}) {
    const [projectPage, setProjectPage] = useState('propstutorial');
    const [jobList, setJobList] = useState(JOBS);
    const [categoryList, setCategoryList] = useState(CATEGORIES);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('All Jobs');

    function projectSelector(projectPage){
      if (projectPage.toLowerCase() === 'propstutorial') {
        return (
          <div className="projects-section propstutorial">
              <ProjectsList projectPage={projectPage} setProjectPage={setProjectPage}/>
              <PropTutorial setProjectPage={setProjectPage}/>
          </div>
        );
      }

      else if (projectPage.toLowerCase() === 'asynctutorial') {
        return (
          <div className="projects-section asynctutorial">
              <ProjectsList projectPage={projectPage} setProjectPage={setProjectPage}/>
              <AsyncTutorial setProjectPage={setProjectPage}/>
          </div>
        );
      }

      else if (projectPage.toLowerCase() === 'muitutorial') {
        return (
          <div className="projects-section muitutorial">
              <ProjectsList projectPage={projectPage} setProjectPage={setProjectPage}/>
              <MuiTutorial setProjectPage={setProjectPage}/>
          </div>
        );
      }

      else if (projectPage.toLowerCase() === 'tomatoes') {
        return (
          <div className="projects-section tomatoes">
              <ProjectsList projectPage={projectPage} setProjectPage={setProjectPage}/>
              <Tomatoes setProjectPage={setProjectPage}/>
          </div>
        );
      } 

      else if (projectPage.toLowerCase() === 'tomatoesfm') {
        return (
          <div className="projects-section tomatoesfm">
              <ProjectsList projectPage={projectPage} setProjectPage={setProjectPage}/>
              <TomatoesFM setProjectPage={setProjectPage}/>
          </div>
        );
      }

      else if (projectPage.toLowerCase() === 'multistepform') {
        return (
          <div className="projects-section multistepform">
              <ProjectsList projectPage={projectPage} setProjectPage={setProjectPage}/>
              <MultistepForm setProjectPage={setProjectPage}/>
          </div>
        );
      }

      else if (projectPage.toLowerCase() === 'cryptoapi') {
        return (
          <div className="projects-section cryptoapi">
              <ProjectsList projectPage={projectPage} setProjectPage={setProjectPage}/>
              <CryptoApi setProjectPage={setProjectPage}/>
          </div>
        );
      }     
      
      else if (projectPage.toLowerCase() === 'upworkproject') {
        return (
          <div className="projects-section upworkproject">
              <ProjectsList 
                projectPage={projectPage} 
                setProjectPage={setProjectPage}
              />
              <Routes>
                <Route path="/" element={<UpworkProject loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
                  
                  <Route path="/upwork/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                  
                  <Route path="/upwork/jobs" element={<JobBoard loggedIn={loggedIn} jobList={jobList} categoryList={categoryList} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>} />
                  
                  <Route path="upwork/jobs/:category" element={<JobBoard loggedIn={loggedIn} jobList={jobList} categoryList={categoryList} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>} />
                  
                  <Route path="upwork/job/:id" element={<JobDetail loggedIn={loggedIn} jobList={jobList} />} />
                </Route>
              </Routes>  
                
          </div>
        );
      }

      else {
        return (
          <div className="projects-section propstutorial">
              <ProjectsList projectPage={projectPage} setProjectPage={setProjectPage}/>
              <PropTutorial setProjectPage={setProjectPage}/>
          </div>
        );
      }
    }

    return (
        <div>
          {projectSelector(projectPage)}
        </div>

    );
}

export default OurProjects;
