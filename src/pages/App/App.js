import './App.css';
import Background from '../../components/Background/Background'
import Nav from '../../components/Nav/Nav'
import Me from '../../components/Me/Me'
import About from '../../components/About/About'

function App() {
    return (
        <div className="app">
            <Background/>
            <div classnName="background">
                <Nav/>
                <Me/>
            </div>
            <div className="about">
                <About />
            </div>
        </div>
    );
}

export default App;
