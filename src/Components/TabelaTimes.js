import React, { Component } from 'react';
import BotaoRemover from './Shared/BtnRemover';
import Table from 'react-bootstrap/Table';
import BotaoEditar from './Shared/BtnEditar';
import Button from 'react-bootstrap/Button';


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Adicionar Jogador</th>
                <th>Remover Jogador</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.times.map((linha) => {
        return (
            <tr key={linha.id}>
                <td>{linha.nome}</td>
                <td><Button onClick={() => props.adicionaJogador(linha)} variant="primary">Adicionar Jogador</Button></td>
                <td><Button onClick={() => props.removeJogador(linha)} variant="primary">Remover Jogador</Button></td>
                <td><BotaoEditar onClick={() => props.editaTime(linha)}/></td>
                <td><BotaoRemover onClick={() => props.removeTime(linha.id)} /></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}


class TabelaTimes extends Component {


    render() {
        return (
            <Table hover striped responsive>
                <TableHead />
                <TableBody
                    times={this.props.times}
                    editaTime={this.props.editaTime}
                    removeTime={this.props.removeTime} />
            </Table>
        );
    }

}

export default TabelaTimes;