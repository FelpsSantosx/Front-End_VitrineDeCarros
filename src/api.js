import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export const getCars = async (page = 1, limit = 9) => {
    try {
        const response = await api.get("/cars", {
            params: { page, limit },
        });

        return { cars: response.data.cars, totalPages: response.data.totalPages };

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
