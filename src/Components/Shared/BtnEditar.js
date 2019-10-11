import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Componentes.css'

function BotaoEditar(props){
    return(
        <Button onClick={props.onClick} variant="primary">Editar</Button>
    )
}
export default BotaoEditar;