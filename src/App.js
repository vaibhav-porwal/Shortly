import React from 'react'
import {Button} from "./component/Button.style"
import {Appcontainer} from './component/Container.style'
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Globalstyle from './Globalstyle';
import InfoSection from './component/Infosection/infosection';
import Url from './component/URL/URL';
import Advance from './component/Advance/Advance';
import Cards from './component/Cards/Cards';
import Footer from './component/Footer/Footer';
import Boost from './component/Boost/Boost';
function App() {
  return (
    <Router>
      <Globalstyle/>
      <Navbar/>
<InfoSection/>
<Url/>
<Advance/>
<Cards/>
<Boost/>
<Footer/>
    </Router>

  );
}

export default App;
