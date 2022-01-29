import React, { Component } from 'react';
import { DivContainer,DivDisplay,DivProj1,DivContImg } from '../styles/Proyects/Proyectos';

export default class Proyectos extends Component {
  render() {
    return (
        <DivContainer id='projects'>
            <DivDisplay>
                <DivProj1>
                    <DivContImg imgUrl="https://res.cloudinary.com/dvh5dsa7s/image/upload/v1642795432/img-portafolio/bg-1_rsay7g.png" className='proyecto1'>
                    <h1 className='project-tile'>Soy proyecto 1</h1>
                    </DivContImg>
                </DivProj1>
            </DivDisplay>
                <DivProj1 className='proyecto2'>
                    <h1 className='project-tile'>Soy proyecto 2</h1>
                </DivProj1>
        </DivContainer>
    )
  }
}
