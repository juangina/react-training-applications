const OUR_PROJECTS = [
    'tomatoes', 'tomatoesfm', 'propstutorial', 'multistepform', 'asynctutorial', 'cryptoapi'
]

function ProjectsList({projectPage, setProjectPage}) {

    return (
    <div className="projects-section menu">
        <ul className="project-list">
            <li key= '1' className="project-item" style={projectPage === 'propstutorial' 
            ? {backgroundColor: 'white', color: 'black'} : {}} 
            onClick={()=>{
                setProjectPage('propstutorial')}
            }>Props Tutorial</li>

            <li key= '2' className="project-item" style={projectPage === 'asynctutorial' 
            ? {backgroundColor: 'white', color: 'black'} : {}}
            onClick={()=>{
                setProjectPage('asynctutorial')}
            }>Async(API) Tutorial</li>

            <li key= '3' className="project-item" style={projectPage === 'muitutorial' 
            ? {backgroundColor: 'white', color: 'black'} : {}}
            onClick={()=>{
                setProjectPage('muitutorial')}
            }>MUI(Library) Tutorial</li>

            <li key= '4' className="project-item" style={projectPage === 'tomatoes' 
            ? {backgroundColor: 'white', color: 'black'} : {}}
            onClick={()=>{
                setProjectPage('tomatoes')}
            }>Tomatoes</li>

            <li key= '5' className="project-item" style={projectPage === 'tomatoesfm' 
            ? {backgroundColor: 'white', color: 'black'} : {}}
            onClick={()=>{
                setProjectPage('tomatoesfm')}
            }>Tomatoes FM</li>

            <li key= '6' className="project-item" style={projectPage === 'multistepform' 
            ? {backgroundColor: 'white', color: 'black'} : {}}
            onClick={()=>{
                setProjectPage('multistepform')}
            }>Multistep Form</li>
            
            <li key= '7' className="project-item" style={projectPage === 'cryptoapi' 
            ? {backgroundColor: 'white', color: 'black'} : {}}
            onClick={()=>{
                setProjectPage('cryptoapi')}
            }>Crypto API</li>

            <li key= '8' className="project-item" style={projectPage === 'upworkproject' 
            ? {backgroundColor: 'white', color: 'black'} : {}}
            onClick={()=>{
                setProjectPage('upworkproject')}
            }>Upwork Project</li>

        </ul>
    </div>
    );
}

export default ProjectsList;