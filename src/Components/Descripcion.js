import React, { Component } from 'react';
import { DivContainer,DivDisplay,DivUno,DivDos,Ptext1,Ptext2,Ptext3} from '../styles/StyleDescrip/Descripcion';

export default class Descripcion extends Component {
  render() {
    return (
        <DivContainer>
            <DivDisplay>
                <DivUno>
                        <Ptext1>Parece magia, funciona</Ptext1>
                        <Ptext2>con código</Ptext2>
                </DivUno>
                <DivDos>
                    <Ptext3>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increibles</Ptext3>
                </DivDos>
            </DivDisplay>
        </DivContainer>
    )
  }
}
