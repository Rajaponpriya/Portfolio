import './/App.css';
import Detail from "./components/Detail";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
//import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
//import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
//import Bot from "./components/Bot";


const App = () => {
  return (
    <div >
      
      <Navbar />
      <Detail />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
    
  );
};

export default App


//<Bot />
//<Hero />
//<About />
//<Skills />
//<Hireme />
//<Project />
//<Contact />
//<Footer />



/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
*/
