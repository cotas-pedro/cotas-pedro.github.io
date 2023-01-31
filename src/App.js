import './App.css';
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Projects } from './components/Skills'
import { Preferencs } from './components/Preferencs'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'




import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
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
