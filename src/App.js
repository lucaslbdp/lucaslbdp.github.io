import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Inicio from "./container/Inicio";
import { Route, Routes } from 'react-router-dom';
import Cv from './cv/cv';

const App = () => {

  return (
    <>
      <Header />
      
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
