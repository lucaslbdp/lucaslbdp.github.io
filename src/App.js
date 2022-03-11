import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Inicio from "./container/Inicio";
import Cv from "./cv/cv/index";
import { Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <>
      <Header />

        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/cv" element={<Cv />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
