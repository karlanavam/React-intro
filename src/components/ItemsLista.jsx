import React from "react";

export default class ListaItems extends React.Component {
    render(){
        return(
            <li className="lista-style">{this.props.textoItem}</li>
        );
    }
}