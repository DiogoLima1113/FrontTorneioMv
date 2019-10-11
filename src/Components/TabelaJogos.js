import React, { Component } from 'react';
import BotaoRemover from './Shared/BtnRemover';
import Table from 'react-bootstrap/Table';
import BotaoEditar from './Shared/BtnEditar'


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Time da Casa</th>
                <th>Placar da Casa</th>
                <th>Placar do Visitante</th>
                <th>Time Visitante</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.jogos.map((linha) => {
        return (
            <tr key={linha.id}>
                <td>{linha.timeCasa.nome}</td>
                <td>{linha.pontuacaoTimeCasa}</td>
                <td>{linha.timeVisitante.nome}</td>
                <td>{linha.pontuacaoTimeVisitante}</td>
                <td><BotaoEditar onClick={() => props.editaJogo(linha)}/></td>
                <td><BotaoRemover onClick={() => props.removeJogo(linha.id)} /></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}


class TabelaJogos extends Component {


    render() {
        return (
            <Table hover striped responsive>
                <TableHead />
                <TableBody
                    jogos={this.props.jogos}
                    editaJogo={this.props.editaJogo}
                    removeJogo={this.props.removeJogo} />
            </Table>
        );
    }

}

export default TabelaJogos;