class Api {
    async fetchAll( ressource){
        const response = await fetch ('https://monapi.fr' + ressource);
        return response.json();
    }
}

export const api = new Api();