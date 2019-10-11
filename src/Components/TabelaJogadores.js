import React, { Component } from 'react';
import BotaoRemover from './Shared/BtnRemover';
import Table from 'react-bootstrap/Table';
import BotaoEditar from './Shared/BtnEditar'


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.jogadores.map((linha) => {
        return (
            <tr key={linha.id}>
                <td>{linha.nome}</td>
                <td><BotaoEditar onClick={() => props.editaJogador(linha)}/></td>
                <td><BotaoRemover onClick={() => props.removeJogador(linha.id)} /></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}


class TabelaJogadores extends Component {
    render() {
        return (
            <Table hover striped responsive>
                <TableHead />
                <TableBody
                    jogadores={this.props.jogadores}
                    editaJogador={this.props.editaJogador}
                    removeJogador={this.props.removeJogador} />
            </Table>
        );
    }

}

export default TabelaJogadores;