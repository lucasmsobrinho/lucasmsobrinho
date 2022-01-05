import './App.css';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

// ReactIcons  // https://react-icons.github.io/react-icons/icons?name=md

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
