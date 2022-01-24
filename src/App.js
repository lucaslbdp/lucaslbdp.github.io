import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Inicio from "./container/Inicio";
import AppClima from './components/Clima/AppClima';
import AppTareas from './components/Tareas/Tareas';
import Cv from "./cv/index/Cv";

const App = () => {

  return (
    <div>
      <Header />
      <Inicio />
      <h2 className='text-center my-5'>Algunas aplicaciones</h2>
      <div className='apps-container'>
        <AppClima />
        <AppTareas />
      </div>
      <Cv />
      <Footer />

      <Router>
        <Routes>
          <Route path="/cv" element={<Cv />}>
          </Route>
        </Routes>
      </Router >
    </div>
  );
}

export default App;
