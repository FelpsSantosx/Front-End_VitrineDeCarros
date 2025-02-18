import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getCars = async (page = 1, limit = 9) => {

    const cacheKey = `cars-${page}-${limit}`
    const cachedCars = localStorage.getItem(cacheKey)

    if (cachedCars) {
        console.log("Carros em cache:", JSON.parse(cachedCars))
        return JSON.parse(cachedCars)
    }

    try {
        const response = await api.get("/cars", {
            params: { page, limit },
        })

        const carsData = { cars: response.data.cars, totalPages: response.data.totalPages }
        localStorage.setItem(cacheKey, JSON.stringify(carsData)) // Salva no cache
        
        return carsData

    } catch (error) {
        console.error("Erro ao buscar os carros:", error)
        return { cars: [], totalPages: 0 }
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

export const searchCars = async (filters) => {
    try {
        const queryParams = new URLSearchParams(
            Object.fromEntries(
                Object.entries(filters).filter(([_, value]) => value) // Remove filtros vazios
            )
        ).toString()
        const response = await api.get(`/search?${queryParams}`)
        return await response.data
    } catch (error) {
        console.error("Erro na api de buscar os carros:", error)
        return []
    }
}

export default api
