import './App.css';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ReactGA from 'react-ga';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(GA_TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
    
  );
}

export default App;
