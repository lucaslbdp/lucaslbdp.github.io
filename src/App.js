import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Inicio from "./container/Inicio";
import AppClima from './components/AppClima';
import AppTareas from './components/AppTareas';

function App() {
  const mostrar = () => {
    document.getElementById("img-ocultar").style.display = "block"
  }
  const ocultar = () => {
    document.getElementById("img-ocultar").style.display = "none"
  }
  const mostrar2 = () => {
    document.getElementById("img-ocultar2").style.display = "block"
  }
  const ocultar2 = () => {
    document.getElementById("img-ocultar2").style.display = "none"
  }


  return (
    <Router>
      <Header />
      <Inicio />
      <h2 className='text-center my-5'>Algunas aplicaciones</h2>
      <div className='apps-container'>
        <AppClima mostrar={mostrar} ocultar={ocultar} />
        <AppTareas mostrar2={mostrar2} ocultar2={ocultar2} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
