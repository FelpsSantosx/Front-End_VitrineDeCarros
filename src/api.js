import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000', 
})

export const getCars = async (page = 1, limit = 10) => {
    try {
        const response = await api.get('/cars', {
            params: {
                _page: page,
                _limit: limit,
            }     
        });
        
        // Usando totalPages da resposta diretamente
        const totalPages = response.data.totalPages;
        console.log("Total de páginas:", totalPages);
        
        // Retorna os dados dos carros e o total de páginas
        console.log("Dados dos carros:", response.data);
        return { cars: response.data.cars, totalPages };
    } catch (error) {
        console.error("Erro ao buscar os carros:", error);
        return { cars: [], totalPages: 0 };
    }
}


export const getCarById = async (id) => {
    try {
        const response = await api.get(`/cars/${id}`)
        return response.data
    } catch (error) {
        console.error(`Erro ao buscar o carro com ID ${id}:`, error)
        return null
    }
}

export default api
