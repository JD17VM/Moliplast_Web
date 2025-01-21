import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Navegador from './widgets/Navegador'
import Footer from './widgets/Footer'


import Inicio from './Inicio'
import Contacto from './Contacto'
import Productos from './Productos' 
import Servicios from './Servicios'
import Catalogos from './Catalogos'
import Nosotros from './Nosotros'

import dataPaginas from './data/data_paginas'

const data = dataPaginas.data


function App() {

  return (
    <BrowserRouter>
      <Navegador data={data}/>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:servicio" element={<Servicios />} />

        <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:subproductos" element={<Productos />} />
          <Route path="/productos/:subproductos/:subsubproductos" element={<Productos />} />
        
        <Route path="/catalogos" element={<Catalogos/>} />
        {/*
        <Route path="/productos" element={<Productos />} />
        */}
      </Routes>

      <Footer data={data}/>
    </BrowserRouter>
  )
}

export default App
