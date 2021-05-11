import './App.css';
import Nav from '../../components/Nav/Nav'
import Me from '../../components/Me/Me'
import About from '../../components/About/About'

function App() {
  return (
    <div className="App">
      <div className="main">
        <Nav  className="navMain"/>
        <Me className="meMain"/>
      </div>
        <About className="aboutMain"/>
    </div>
  );
}

export default App;
