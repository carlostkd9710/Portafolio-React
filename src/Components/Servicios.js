import { Button } from 'react-bootstrap';
import React from 'react';
import { DivContItems, DivCountainerSer, Divh1, H1StyleServ, Ulstyle } from '../styles/Servicios/Servicios';

const Servicios = () => {
  return (
    <DivCountainerSer>
        <Divh1>
            <H1StyleServ>Servicios</H1StyleServ>
        </Divh1>
        <DivContItems>
            <div>
                <h3>Diseño</h3>
                <Ulstyle>
                    <li>Experiencia de usuario</li>
                    <li>Interfaz de usuario</li>
                    <li>Aplicaciones web</li>
                    <li>Prueba de concepto</li>
                </Ulstyle>
                <Button variant="dark">Ver servicios de diseño</Button>{' '}
            </div>
            <div>
                <h3>Desarrrolo</h3>
                <Ulstyle>
                    <li>Aplicaciones móviles</li>
                    <li>Sitios web</li>
                    <li>Aplicaciones web progresivas</li>
                </Ulstyle>
                <Button variant="dark">Ver servicios de desarrollo</Button>{' '}
            </div>
            <div>
                <h3>Marca</h3>
                <Ulstyle>
                    <li>Identidad de la marca</li>
                    <li>Estrategia de la marca</li>
                </Ulstyle>
                <Button variant="dark">Ver servicios de marca</Button>
            </div>
        </DivContItems>
    </DivCountainerSer>
  )
};

export default Servicios;
