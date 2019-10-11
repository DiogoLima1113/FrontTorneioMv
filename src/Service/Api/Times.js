const ApiServiceTimes = {

    ListaTimes: () => {
        return fetch('https://localhost:5001/api/v1/times', { mode: "cors"})
            .then( res => res.json());
    },

    AdicionarTime: (time) => {
        return fetch('https://localhost:5001/api/v1/times', { method: 'POST', body: time, mode: "cors"})
            .then( res => res.json());
    },

    DeletarTime: (id) => {
        return fetch('https://localhost:5001/api/v1/times/' + id, { method: 'DELETE', mode: "cors"})
            .then( res => res.status === 204 ? [''] : res.json());
    },

    EditarTime: (id, time) => {
        return fetch('https://localhost:5001/api/v1/times/' + id, { method: 'PUT', body: time, mode: "cors"})
            .then( res => res.json());
    }

}

export default ApiServiceTimes;