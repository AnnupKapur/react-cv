import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;