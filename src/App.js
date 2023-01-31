import './App.css';
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Projects } from './components/Skills'
import { Preferencs } from './components/Preferencs'
import { Footer } from './components/Footer'





import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = "Portfólio - Pedro";
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Preferencs />
      <Footer />

    </div>
  );
}

export default App;
