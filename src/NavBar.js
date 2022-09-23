function NavBar({setMenuPage}) {
      return (
          <ul className="menu-list">
              <li key= '1' className="menu-item" onClick={()=>{
                setMenuPage('landingpage')}
                }>Home</li>
              <li key= '2' className="menu-item" onClick={()=>{
                setMenuPage('ourprojects')}
              }>Our Projects</li>
              <li key= '3' className="menu-item" onClick={()=>{
                setMenuPage('ourservices')}
              }>Our Services</li>
              <li key= '4' className="menu-item" onClick={()=>{
                setMenuPage('subscribe')}
              }>Subscribe</li>
          </ul>
      );
    }
    
    export default NavBar;