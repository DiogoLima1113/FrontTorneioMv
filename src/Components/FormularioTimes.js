import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import BotaoPrincipal from './Shared/BotaoPrincipal';
import BotaoLimpar from './Shared/BtnLimpar';

class FormularioJogos extends Component {
    
    constructor(props) {
        super(props);
        this.state = props.stateInicial;
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    limparFormulario = () => {
        this.props.limpaForm();
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    salvaEdicao = () => {
        this.props.salvaEdicao(this.state);
    }



    render() {
        const { nome } = this.state;
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                            placeholder="Entre o nome do Time" />
                    </Form.Group>
                </Form.Row>

                <BotaoPrincipal
                    tipo='time'
                    onClickAdicionar={this.submitFormulario}
                    onClickAtualizar={this.salvaEdicao}
                    itemId={this.state.id}/>

                <BotaoLimpar onClick={this.limparFormulario} />
            </Form>
        );
    }
}
export default FormularioJogos