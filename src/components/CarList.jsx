import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { getCars } from '../api'; // Função para buscar os carros da API

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            const carList = await getCars();
            setCars(carList);
        };

        fetchCars();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars.map((car) => (
                <Cards key={car._id} car={car} /> // Passa os dados para o Cards
            ))}
        </div>
    );
};

export default CarList;
