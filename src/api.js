import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Substitua pelo endereço da sua API em produção
});

export const getCars = async () => {
    try {
        const response = await api.get('/cars');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar os carros:", error);
        return [];
    }
};

export default api;
