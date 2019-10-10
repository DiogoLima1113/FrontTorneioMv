import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Componentes.css'

function BotaoAdicionar(props){
    return(
        <Button className="botaoAdicionar" variant="primary">Adicionar {props.tipo}</Button>
    )
}
export default BotaoAdicionar;