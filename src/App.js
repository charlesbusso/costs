
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
      <Routes>
      <Container customClass = "min-height">
      
          <Route exact path= "/" element= {<Home/>}/>
          <Route path="/projects" element= {<Projects/>}/>
          <Route path="/company" element= {<Company/>}/>
          
          <Route path="/contact" element = {<Contact/>}/>
          
          <Route path="/newproject" element= {<NewProject/>}/>
          <Route path="/project/:id">
            <Project/>
          </Route>
         
          
      </Container>
      </Routes>
      
      
      <Footer/>
      </Router>
    
  );
}


export default App;
