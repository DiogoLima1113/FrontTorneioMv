import React, { Component, Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import BotaoPrincipal from './Shared/BotaoPrincipal';
import BotaoLimpar from './Shared/BtnLimpar';

const OpcoesSelectTime = props => {

    const itens = props.times.map((time) => {
        return (<option key={time.id} value={time.id}>{time.nome}</option>);
    });

    return (
        <Fragment>
            <option value="0" ></option>
            {itens}
        </Fragment>
    );
}

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
        const { timeCasa, pontosCasa, timeVisitante, pontosVisitante } = this.state;
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTimeCasa">
                        <Form.Label>Time Casa</Form.Label>
                        <Form.Control
                            as="select"
                            name="timeCasa"
                            value={timeCasa}
                            onChange={this.escutadorDeInput}
                            placeholder="Entre o time da casa" >
                            <OpcoesSelectTime times={this.props.listaTimes} />
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPontosCasa">
                        <Form.Label>Pontos da Casa</Form.Label>
                        <Form.Control
                            type="number"
                            name="pontosCasa"
                            value={pontosCasa}
                            onChange={this.escutadorDeInput}
                            placeholder="Entre a pontuação do time da casa" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTimeVisitante">
                        <Form.Label>Time Visitante</Form.Label>
                        <Form.Control
                            as="select"
                            name="timeVisitante"
                            value={timeVisitante}
                            onChange={this.escutadorDeInput}
                            placeholder="Entre o time visitante" >
                            <OpcoesSelectTime times={this.props.listaTimes} />
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPontosVisitante">
                        <Form.Label>Pontos Visitante</Form.Label>
                        <Form.Control
                            type="number"
                            name="pontosVisitante"
                            value={pontosVisitante}
                            onChange={this.escutadorDeInput}
                            placeholder="Entre a pontuação do time visitante" />
                    </Form.Group>
                </Form.Row>

                <BotaoPrincipal
                    tipo='jogo'
                    onClickAdicionar={this.submitFormulario}
                    onClickAtualizar={this.salvaEdicao}
                    itemId={this.state.id}/>

                <BotaoLimpar onClick={this.limparFormulario} />
            </Form>
        );
    }
}
export default FormularioJogos