import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/app';
import Signin from "./pages/Signin";
import Signup from "./pages/Signin/signup";
import Help from "./pages/Help/app"
import Sobre from "./pages/sobre/app"
import Ajuda from "./pages/suport/app"



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' exact element={<Signin />} />
          <Route path='/' exact element={<Home />} />
          <Route path='/help' exact element={<Help />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/registrar' exact element={<Signup />} />
          <Route path='/sobre' exact element={<Sobre />} />
          <Route path='/suport' exact element={<Ajuda />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
