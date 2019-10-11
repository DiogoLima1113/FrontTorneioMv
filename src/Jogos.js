import React, { Component, Fragment } from 'react';
import './App.css';
import TabelaJogos from './Components/TabelaJogos';
import FormularioJogos from './Components/FormularioJogos';
import './Components/Componentes.css';
import Title from './Components/Shared/Title';
import ApiServiceJogos from './Service/Api/Jogos';
import ApiServiceTimes from './Service/Api/Times';

class Jogos extends Component {
    state = {
        jogosSimples: {
            id: 0,
            timeCasa: 0,
            pontosCasa: 0,
            timeVisitante: 0,
            pontosVisitante: 0
        },
        jogos: [],
        times: []
    }

    componentDidMount() {
        ApiServiceJogos.ListaJogos()
            .then(res => {
                this.setState({ jogos: [...this.state.jogos, ...res] })
            }, err => console.log(err));
        ApiServiceTimes.ListaTimes()
            .then(res => {
                this.setState({ times: [...this.state.times, ...res] })
            }, err => console.log(err));
    };

    removeJogo = id => {
        ApiServiceJogos.DeletarJogo(id)
            .then(this.setState({
                jogos: this.state.jogos.filter((jogo, posAtual) => {
                    return this.state.jogos[posAtual].id !== id;
                }),
            }), err => console.log(err));
    };

    inicaEdicao = jogo => {
        this.state.jogosSimples.id = jogo.id;
        this.state.jogosSimples.timeCasa = jogo.timeCasa.id;
        this.state.jogosSimples.pontosCasa = jogo.pontuacaoTimeCasa;
        this.state.jogosSimples.timeVisitante = jogo.timeVisitante.id;
        this.state.jogosSimples.pontosVisitante =  jogo.pontuacaoTimeVisitante;

        this.forceUpdate();
    };

    resetaJogoSimples = () => {
        this.state.jogosSimples.id = 0;
        this.state.jogosSimples.timeCasa = 0;
        this.state.jogosSimples.pontosCasa = 0;
        this.state.jogosSimples.timeVisitante = 0;
        this.state.jogosSimples.pontosVisitante = 0;

        this.forceUpdate();
    };

    salvaEdicao = jogo => {
        console.log(jogo);

        this.resetaJogoSimples();
    };

    escutadorDeSubmit = jogoSimples => {
        this.setState({ jogosSimples: [...this.state.jogosSimples, jogoSimples] });
    };

    render() {
        return (
            <Fragment>
                <div className="view">
                    <Title>Jogos</Title>
                    <FormularioJogos
                        escutadorDeSubmit={this.escutadorDeSubmit}
                        listaTimes={this.state.times}
                        stateInicial={this.state.jogosSimples}
                        salvaEdicao={this.salvaEdicao}
                        limpaForm={this.resetaJogoSimples} />
                    <TabelaJogos
                        jogos={this.state.jogos}
                        removeJogo={this.removeJogo}
                        editaJogo={this.inicaEdicao} />

                </div>
            </Fragment>
        );
    }
}

export default Jogos;