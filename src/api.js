import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

const getCars = async (page = 1, limit = 9) => {
    const response = await api.get("/cars", { params: { page, limit } });
    return response.data;
  };
// Hook para buscar carros com cache automático
export const useCars = (page = 1, limit = 9) => 
    useQuery({
      queryKey: ["cars", page, limit],
      queryFn: () => getCars(page, limit),
      staleTime: 5 * 60 * 1000, // Mantém os dados frescos por 5 minutos
      cacheTime: 10 * 60 * 1000, // Mantém no cache por 10 minutos
      refetchOnWindowFocus: false, // Evita recarregar ao focar na aba
    })

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
                Object.entries(filters).filter(([_, value]) => value)
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
