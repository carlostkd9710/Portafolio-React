import React, { Component } from 'react';
import { DivContainer,ImgContainer,Imgg, DivTexto, TextoP,DivDisplay } from '../styles/StyleBienvenido/Bienvenido';

export default class Bienvenido extends Component {
  render() {
    return (
        <DivContainer>
            <DivDisplay id='welcome-section'>
                <DivTexto>
                    <h1>¡Hola a todos!</h1>
                    <h1>Soy Antonio Pereira</h1>
                    <TextoP>Developer que le encanta implementar diseños que</TextoP>
                    <TextoP> inspiran y atraen a las personas</TextoP>
                </DivTexto>
                <ImgContainer>
                    <Imgg alt='Foto De Antonio' src='https://res.cloudinary.com/dvh5dsa7s/image/upload/v1642725716/img-portafolio/img_m5y4mq.png'/>
                </ImgContainer>
            </DivDisplay>
        </DivContainer>
    )
  }
}
