import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Componentes.css'

function BotaoLimpar(props){
    return(
        <Button onClick={props.onClick} className="botaoPrincipal" variant="secondary">Limpar Campos</Button>
    )
}
export default BotaoLimpar;