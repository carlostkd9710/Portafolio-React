import React, { Component } from 'react';
import BarraNavega from '../Components/BarraNavega';
import Bienvenido from '../Components/Bienvenido';
import Contacto from '../Components/Contacto';
import Descripcion from '../Components/Descripcion';
import Proyectos from '../Components/Proyectos';
import Servicios from '../Components/Servicios';
import Testimonios from '../Components/Testimonios';

export default class Container extends Component {
  render() {
    return (
        <div>
            <BarraNavega/>
            <Bienvenido/>
            <Descripcion/>
            <Servicios/>
            <Testimonios/>
            <Contacto/>
        </div>
    )
  }
}
