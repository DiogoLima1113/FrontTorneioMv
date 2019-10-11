import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Componentes.css'

function BotaoPrincipal(props){
    if (props.itemId === 0) {
        return (<Button onClick={props.onClickAdicionar} className="botaoPrincipal" variant="primary">Adicionar {props.tipo}</Button>);
    }else{
        return (<Button onClick={props.onClickAtualizar} className="botaoPrincipal" variant="primary">Atualizar {props.tipo}</Button>)
    }
}
export default BotaoPrincipal;