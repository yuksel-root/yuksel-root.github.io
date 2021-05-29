import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
