import React, { Component, Fragment } from 'react';
import './App.css';
import TabelaJogadores from './Components/TabelaJogadores';
import FormularioJogadores from './Components/FormularioJogadores';
import './Components/Componentes.css';
import Title from './Components/Shared/Title';
import ApiServiceJogadores from './Service/Api/Jogadores';

class Jogadores extends Component {
    state = {
        jogadorSimples: {
            id: 0,
            nome: ''
        },
        jogadores: [],
    }

    componentDidMount() {
        ApiServiceJogadores.ListaJogadores()
            .then(res => {
                this.setState({ jogadores: [...this.state.jogadores, ...res] })
            }, err => console.log(err));
    };

    removeJogador = id => {
        ApiServiceJogadores.DeletarJogador(id)
            .then(res => console.log(res), err => console.log(err))
            .then(() => {
                ApiServiceJogadores.ListaJogadores().then(res => {
                    this.setState({ jogadores: res })
                }, err => console.log(err));})

        this.resetaJogadorSimples();
    }

    inicaEdicao = jogador => {
        this.state.jogadorSimples.id = jogador.id;
        this.state.jogadorSimples.nome = jogador.nome;

        this.forceUpdate();
    }

    resetaJogadorSimples = () => {
        this.state.jogadorSimples.id = 0;
        this.state.jogadorSimples.nome = '';

        this.forceUpdate();

        console.log(this.state.jogadorSimples);
    };

    salvaEdicao = jogador => {
        ApiServiceJogadores.EditarJogador(this.state.jogadorSimples.id, jogador)
            .then(this.setState({
                jogos: this.state.jogos.filter((jogador, posAtual) => {
                    if( this.state.jogadores[posAtual].id === jogador.id) 
                        {
                            this.state.jogadores[posAtual] = jogador
                        }
                }),
            }), err => console.log(err));

        this.state.jogadorSimples.id = 0;
        this.state.jogadorSimples.nome = '';

        this.forceUpdate(); 
    };

    escutadorDeSubmit = jogadoresSimples => {
        var corpo = JSON.stringify(jogadoresSimples)
        ApiServiceJogadores.AdicionarJogador(corpo)
            .then(res => console.log(res), err => console.log(err))
            .then(() => {
                ApiServiceJogadores.ListaJogadores().then(res => {
                    this.setState({ jogadores: res })
                }, err => console.log(err));})

        this.resetaJogadorSimples();
    }

    render() {
        return (
            <Fragment>
                <div className="view">
                    <Title>Jogadores</Title>
                    <FormularioJogadores
                        escutadorDeSubmit={this.escutadorDeSubmit}
                        stateInicial={this.state.jogadorSimples} 
                        salvaEdicao={this.salvaEdicao}
                        limpaForm={this.resetaJogadorSimples}/>
                    <TabelaJogadores
                        jogadores={this.state.jogadores}
                        removeJogador={this.removeJogador}
                        editaJogador={this.inicaEdicao} />

                </div>
            </Fragment>
        );
    }
}

export default Jogadores;