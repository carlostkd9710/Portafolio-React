import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '../Container/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AppRoutes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
