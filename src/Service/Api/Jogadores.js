var myHeader = new Headers();
myHeader.append("Content-Type", "application/json")

const ApiServicejogadores = {
    ListaJogadores: () => {
        return fetch('https://localhost:5001/api/v1/jogadores', { mode: "cors"})
            .then( res => res.json());
    },

    AdicionarJogador: (jogadador) => {
        return fetch('https://localhost:5001/api/v1/jogadores', { method: 'POST', headers : myHeader, body: jogadador, mode: "cors"})
            .then( res => res.json());
    },

    DeletarJogador: (id) => {
        return fetch('https://localhost:5001/api/v1/jogadores/' + id, { method: 'DELETE', mode: "cors"})
            .then( res => res.status === 204 ? [''] : res.json());
    },

    EditarJogador: (id, jogadador) => {
        return fetch('https://localhost:5001/api/v1/jogadores/' + id, { method: 'PUT', body: jogadador, mode: "cors"})
            .then( res => res.status === 204 ? [''] : res.json());
    }

}

export default ApiServicejogadores;