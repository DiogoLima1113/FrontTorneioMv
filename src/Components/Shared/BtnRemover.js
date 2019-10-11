import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Componentes.css'

function BotaoRemover(props){
    return(
        <Button onClick={props.onClick} variant="primary">Remover</Button>
    )
}
export default BotaoRemover;