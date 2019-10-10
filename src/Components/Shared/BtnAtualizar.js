import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Componentes.css'

function BotaoAtualizar(props){
    return(
        <Button className="botaoAdicionar" variant="primary">Atualizar {props.tipo}</Button>
    )
}
export default BotaoAtualizar;