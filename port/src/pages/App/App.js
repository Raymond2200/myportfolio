import './App.css';
import Nav from '../../components/Nav/Nav';
import Me from '../../components/Me/Me';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import {useRef} from "react";
import useScrollPosition from '@react-hook/window-scroll';




function App() {
  let contRef = useRef()

  let position0 = () => goToPosition(0)

  return (
    <div className="App">
      <div className="main">
        <Nav className="navMain"/>
        <Me className="meMain"/>
      </div>
      <About className="aboutMain"></About>
      <div className="main2">
        <Projects />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
