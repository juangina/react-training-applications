import './App.css';
import NavBar from './NavBar';
import LandingPage from './LandingPage/LandingPage';
import OurProjects from './OurProjects';
import {useState} from 'react';
const MENU_PAGES = [
  "landingpage", 'ourprojects', 'ourservices', 'subscribe'
]

function App() {
  const [menuPage, setMenuPage] = useState('landingpage');
  function menuSelector(menuPage){
    if(menuPage.toLowerCase() === MENU_PAGES[0]) {
        return (
          <>
            <NavBar setMenuPage={setMenuPage}/>
            <LandingPage setMenuPage={setMenuPage}/>
          </>

        );
      } else if (menuPage.toLowerCase() === MENU_PAGES[1]) {
        return (
          <>
            <NavBar setMenuPage={setMenuPage}/>
            <OurProjects 
              menuPage={menuPage} 
              setMenuPage={setMenuPage}
              />
          </>
        );
      } else {
        return (
          <>
            <NavBar setMenuPage={setMenuPage}/>
            <LandingPage setMenuPage={setMenuPage}/>
          </>

        );
      }
  }

  return (
    <div className="App">
        {menuSelector(menuPage)}
    </div>
  );
}
export default App;
