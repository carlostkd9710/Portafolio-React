import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PostData } from '../helpers/PostData';
import { DivContainerContacto, DivCountainerForm } from '../styles/Contacto/Contacto';

const Contacto = () => {
    const [informacion, setInformacion] = useState({
        nombre:"",
        correo:"",
        mensaje:""
    });
    const{nombre,correo,mensaje}=informacion;

    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    const handelInputChange = ({target})=>{
        setInformacion({
            ...informacion,
            [target.name]:target.value,
        })
    }
    console.log(informacion);
  return (
    <DivContainerContacto>
        <DivCountainerForm>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Control onChange={handelInputChange} name='nombre' type="text" placeholder="Nombre completo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handelInputChange} name='correo' type="email" placeholder="Correo electrónico" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMensaje">
                    <Form.Control onChange={handelInputChange} name='mensaje' type="text" placeholder="Mensaje" />
                </Form.Group>
                <Button onClick={()=>PostData(informacion)} variant="warning" type="submit">
                    Enviar mensaje
                </Button>
            </Form>
        </DivCountainerForm>
    </DivContainerContacto>
  )
};

export default Contacto;
