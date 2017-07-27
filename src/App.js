import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista.jsx';
import { Button, Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
    constructor(){
        super();
        this.state = {nuevoItemSuper: "",
                      arregloDeItemsSuper:[],
                     nuevoItemTareas: "",
                      arregloDeTareas:[],
                     nuevoItemCoches: "",
                      arregloDeCoches:[]},
        this.manejarCambiosSuper = this.manejarCambiosSuper.bind(this);
        this.agregarAListaSuper = this.agregarAListaSuper.bind(this);
        this.manejarCambiosTareas = this.manejarCambiosTareas.bind(this);
        this.agregarAListaTareas = this.agregarAListaTareas.bind(this);
        this.manejarCambiosCoches = this.manejarCambiosCoches.bind(this);
        this.agregarAListaCoches = this.agregarAListaCoches.bind(this);
    }
    
    manejarCambiosSuper(event){
        let inputValue = event.target.value;
        this.setState({nuevoItemSuper:inputValue})
    }
    
    agregarAListaSuper(){
       this.state.arregloDeItemsSuper.push(this.state.nuevoItemSuper);
       this.setState({nuevoItemSuper: ""});
    }
    
    manejarCambiosTareas(event){
        let inputValue = event.target.value;
        this.setState({nuevoItemTareas:inputValue})
    }
    
    agregarAListaTareas(){
       this.state.arregloDeTareas.push(this.state.nuevoItemTareas); //Agregar tarea -nuevoItemTareas- a arreglo -arregloDeTareas-.
       this.setState({nuevoItemTareas: ""}); //Para que se limpie el input después de agregar
    }
    
    manejarCambiosCoches(event){
        let inputValue = event.target.value;
        this.setState({nuevoItemCoches:inputValue})
    }
    
    agregarAListaCoches(){
       this.state.arregloDeCoches.push(this.state.nuevoItemCoches);
       this.setState({nuevoItemCoches: ""});
    }
    
  render() {
    return (   
        <Grid>
            <Row>
                <Col xs={4} md={4} xsOffset={4} mdOffset={4}>
                    <h1 className="h1">LISTA DE TAREAS</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4} pullRight>
                    <h5>Super</h5>
                    <input value={this.state.nuevoItemSuper} type="text" className="form-control" onChange={this.manejarCambiosSuper}/>
                    <button className="btn btn-default" onClick={this.agregarAListaSuper}>
                        Enviar
                    </button>
                </Col>
                <Col xs={6} md={4}>
                    <h5>Tareas</h5>
                    <input value={this.state.nuevoItemTareas} type="text" className="form-control" onChange={this.manejarCambiosTareas}/>
                    <button className="btn btn-default" onClick={this.agregarAListaTareas}>
                        Enviar
                    </button>
                </Col>
                <Col xs={6} md={4}>
                    <h5>Coches</h5>
                    <input value={this.state.nuevoItemCoches} type="text" className="form-control" onChange={this.manejarCambiosCoches}/>
                    <button className="btn btn-default" onClick={this.agregarAListaCoches}>
                        Enviar
                    </button>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                    <Lista textoTitulo="Super" elementosLista={this.state.arregloDeItemsSuper}/>
                </Col>
                <Col xs={6} md={4}>
                    <Lista textoTitulo="Tareas" elementosLista={this.state.arregloDeTareas}/>
                </Col>
                <Col xs={6} md={4}>
                    <Lista textoTitulo="Coches" elementosLista={this.state.arregloDeCoches}/>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default App;
