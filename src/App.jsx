import './/App.css';
import Detail from "./components/Detail";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./style.css";


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

