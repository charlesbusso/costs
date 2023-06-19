
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';

import Container from './components/Layout/Container';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Container customClass = "min-height">
        <Routes>
          <Route exact path= "/" element= {<Home/>}/>
          <Route exact path='/projects' element= {<Projects/>}/>
          <Route exact path='/company' element= {<Company/>}/>
          
          <Route exact path='/contact' element = {<Contact/>}/>
          
          <Route exact path='/newproject' element= {<NewProject/>}/>
          <Route path='/project/:id'>
            <Project/>
          </Route>
          
         </Routes>
      </Container>
      
      <Footer/>
      </Router>
    
  );
}


export default App;
