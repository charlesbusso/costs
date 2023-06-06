
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';

import Container from './components/Layout/Container';
 


function App() {
  return (
    
    <Router>
      <div>
        <ul>
          <Link to = "/">Home</Link>
          <Link to = "/contact">Contato</Link>
          <Link to = "/company">Empresa</Link>
          <Link to = "/newProject">Novo Projeto</Link>
        </ul>
      </div>
      <Container customClass = "min-height">
        <Routes>
          <Route exact path= "/" element= {<Home/>}/>
          <Route exact path='/company' element= {<Company/>}/>
          
          <Route exact path='/contact' element = {<Contact/>}/>
          
          <Route exact path='/newproject' element= {<NewProject/>}/>
          
         </Routes>
      </Container>
      <footer>Rodapé</footer>
      </Router>
    
  );
}

export default App;
