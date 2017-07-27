import React from "react";
import ListaItems from "./ItemsLista.jsx";

export default class Lista extends React.Component {
    render(){
        var arregloDeLis = this.props.elementosLista.map(
            (textoElemento, indice) =>{
            return <ListaItems key={indice} textoItem={textoElemento} />
            })
        return(
            <div className="div-lista">
                <h1>{this.props.textoTitulo}</h1>
                <ul>
                    {arregloDeLis}
                </ul>
            </div>
        )
    }
};