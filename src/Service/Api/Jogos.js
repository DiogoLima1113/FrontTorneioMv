const ApiServiceJogos = {

    ListaJogos: () => {
        return fetch('https://localhost:5001/api/v1/jogos', { mode: "cors"})
            .then( res => res.json());
    },

    AdicionarJogo: (jogo) => {
        return fetch('https://localhost:5001/api/v1/jogos', { method: 'POST', body: jogo, mode: "cors"})
            .then( res => res.json());
    },

    DeletarJogo: (id) => {
        return fetch('https://localhost:5001/api/v1/jogos/' + id, { method: 'DELETE', mode: "cors"})
            .then( res => res.status === 204 ? [''] : res.json());
    },

    EditarJogo: (id, jogo) => {
        return fetch('https://localhost:5001/api/v1/jogos/' + id, { method: 'PUT', body: jogo, mode: "cors"})
            .then( res => res.json());
    }

}

export default ApiServiceJogos;