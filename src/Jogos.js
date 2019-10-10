import React, { Component, Fragment } from 'react';
import Title from './Components/Shared/Title';
import BotaoAdicionar from './Components/Shared/BtnAdicionar';
import Table from 'react-bootstrap/Table';
import './Components/Componentes.css';
import ApiServiceJogos from './Service/Api/Jogos';
import BotaoRemover from './Components/Shared/BtnRemover';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import BotaoAtualizar from './Components/Shared/BtnAtualizar';

function BotaoPrimario(props){
    if (props.id == 0) {
        return <BotaoAdicionar tipo='jogo' onClick={ Jogos.adicinarJogo }/>
    } else {
        return <BotaoAtualizar tipo='jogo' onClick={ Jogos.atualizarJogo }/>
    }
}

class Jogos extends Component {

    constructor() {
        super();
        this.state = {
            jogos: [],
            formJogo: {
                id : 0,
                idTimeCasa : 0,
                idTimeVisitante : 0,
                pontuacaoTimeCasa : 0,
                pontuacaoTimeVisitante : 0,
                timeCasa : {
                    id : 0,
                    nome : ''
                },
                timeVisitante : {
                    id : 0,
                    nome : ''
                }
            }

        };
    };

    componentDidMount() {
        ApiServiceJogos.ListaJogos()
            .then(res => {
                this.setState({ jogos: [...this.state.jogos, ...res] })
            }, err => console.log(err));
    };

    resetForm(){
        this.state.formJogo.id = 0;
        this.state.formJogo.timeCasa.nome = '';
        document.getElementById('formGridTimeCasa').value = '';
        this.state.formJogo.timeVisitante.nome = '';
        document.getElementById('formGridTimeVisitante').value = '';
        this.state.formJogo.pontuacaoTimeCasa = 0;
        document.getElementById('formGridPontosCasa').value =0;
        this.state.formJogo.pontuacaoTimeVisitante = 0;
        document.getElementById('formGridPontosVisitante').value =0;
    }

    adicinarJogo() {
        this.state.formJogo.timeCasa.nome = document.getElementById('formGridTimeCasa').value;
        this.state.formJogo.timeVisitante.nome = document.getElementById('formGridTimeVisitante').value;
        this.state.formJogo.pontuacaoTimeCasa = document.getElementById('formGridPontosCasa').value;
        this.state.formJogo.pontuacaoTimeVisitante = document.getElementById('formGridPontosVisitante').value;

        ApiServiceJogos.AdiciarJogo(this.state.formJogo)
            .then( this.resetForm, err => console.log(err));
    };

    atualizarJogo() {
        this.state.formJogo.timeCasa.nome = document.getElementById('formGridTimeCasa').value;
        this.state.formJogo.timeVisitante.nome = document.getElementById('formGridTimeVisitante').value;
        this.state.formJogo.pontuacaoTimeCasa = document.getElementById('formGridPontosCasa').value;
        this.state.formJogo.pontuacaoTimeVisitante = document.getElementById('formGridPontosVisitante').value;

        ApiServiceJogos.AtualizaJogo(this.state.formJogo.id, this.state.formJogo)
            .then( this.resetForm, err => console.log(err));
    };

    removerTime(id){
        ApiServiceJogos.DeletarJogo(id)
            .then( this.forceUpdate, err => console.log(err));
    };

    render() {
        return (
            <Fragment>
                <div className='view'>
                    <Title>Jogos</Title>

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTimeCasa">
                            <Form.Label>TimeCasa</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Entre o time da casa"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPontosCasa">
                            <Form.Label>PontosCasa</Form.Label>
                            <Form.Control
                                type="number" 
                                placeholder="Entre a pontuação do time da casa"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTimeVisitante">
                            <Form.Label>TimeVisitante</Form.Label>
                            <Form.Control
                                type="text" 
                                placeholder="Entre o time visitante"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPontosVisitante">
                            <Form.Label>PontosVisitante</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Entre a pontuação do time visitante"/>
                            </Form.Group>
                        </Form.Row>

                        <BotaoPrimario id={this.state.formJogo.id}/>
                    </Form>
                    
                    

                    <div >
                        <Table hover striped responsive>
                            <thead>
                                <tr>
                                    <th>Time da Casa</th>
                                    <th>Placar da Casa</th>
                                    <th>Placar do Visitante</th>
                                    <th>Time Visitante</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jogos.map(function (jogo) {
                                        return (
                                            <tr key={jogo.id}>
                                                <td>{jogo.timeCasa.nome}</td>
                                                <td>{jogo.pontuacaoTimeCasa}</td>
                                                <td>{jogo.pontuacaoTimeVisitante}</td>
                                                <td>{jogo.timeVisitante.nome}</td>
                                                <td><BotaoRemover onClick={ this.removerJogo(this.key) }/></td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Jogos;
