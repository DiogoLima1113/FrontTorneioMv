import React, { Component, Fragment } from 'react';
import './App.css';
import TabelaTimes from './Components/TabelaTimes';
import FormularioTimes from './Components/FormularioTimes';
import './Components/Componentes.css';
import Title from './Components/Shared/Title';
import ApiServiceTimes from './Service/Api/Times';

class Times extends Component {
    state = {
        timesSimples: {
            id: 0,
            nome: ''
        },
        times: []
    }

    componentDidMount() {
        ApiServiceTimes.ListaTimes()
            .then(res => {
                this.setState({ times: [...this.state.times, ...res] })
            }, err => console.log(err));
    };

    removeTime = id => {
        ApiServiceTimes.DeletarTime(id)
            .then(this.setState({
                times: this.state.times.filter((time, posAtual) => {
                    return this.state.times[posAtual].id !== id;
                }),
            }), err => console.log(err));
    };

    inicaEdicao = time => {
        this.state.timesSimples.id = time.id;
        this.state.timesSimples.nome = time.nome;

        this.forceUpdate();
    };

    resetaTimeSimples = () => {
        this.state.timesSimples.id = 0;
        this.state.timesSimples.nome = '';

        this.forceUpdate();
    };

    salvaEdicao = time => {
        console.log(time);

        this.resetaTimeSimples();
    };

    escutadorDeSubmit = timeSimples => {
        this.setState({ timesSimples: [...this.state.timesSimples, timeSimples] });
    };

    render() {
        return (
            <Fragment>
                <div className="view">
                    <Title>Times</Title>
                    <FormularioTimes
                        escutadorDeSubmit={this.escutadorDeSubmit}
                        listaTimes={this.state.times}
                        stateInicial={this.state.timesSimples}
                        salvaEdicao={this.salvaEdicao}
                        limpaForm={this.resetaTimeSimples} />
                    <TabelaTimes
                        times={this.state.times}
                        removeTime={this.removeTime}
                        editaTime={this.inicaEdicao}
                        adicionaJogador={''}
                        removeJogador={''} />

                </div>
            </Fragment>
        );
    }
}

export default Times;