import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000', 
})

export const getCars = async () => {
    try {
        const response = await api.get('/cars')
        return response.data
    } catch (error) {
        console.error("Erro ao buscar os carros:", error)
        return []
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
