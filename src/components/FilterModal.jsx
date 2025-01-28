import React, { useState } from "react";

const FilterModal = ({ onApplyFilters, onClose }) => {
    const [filters, setFilters] = useState({
        modelo: "",
        precoMin: "",
        precoMax: "",
        ano: "",
        cambio: "",
        combustivel: "",
        cor: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleApplyFilters = () => {
        onApplyFilters(filters);
        onClose(); // Fecha o modal após aplicar os filtros
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-96">
                <h2 className="text-xl font-bold mb-4">Filtros</h2>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="modelo"
                        placeholder="Modelo"
                        value={filters.modelo}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    />
                    <input
                        type="number"
                        name="precoMin"
                        placeholder="Preço Mínimo"
                        value={filters.precoMin}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    />
                    <input
                        type="number"
                        name="precoMax"
                        placeholder="Preço Máximo"
                        value={filters.precoMax}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    />
                    <input
                        type="number"
                        name="ano"
                        placeholder="Ano"
                        value={filters.ano}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    />
                    <select
                        name="cambio"
                        value={filters.cambio}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    >
                        <option value="">Câmbio</option>
                        <option value="manual">Manual</option>
                        <option value="automatico">Automático</option>
                    </select>
                    <select
                        name="combustivel"
                        value={filters.combustivel}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    >
                        <option value="">Combustível</option>
                        <option value="gasolina">Gasolina</option>
                        <option value="diesel">Diesel</option>
                        <option value="etanol">Etanol</option>
                    </select>
                    <input
                        type="text"
                        name="cor"
                        placeholder="Cor"
                        value={filters.cor}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    />
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-second text-white px-4 py-2 rounded hover:bg-primary-dark"
                        onClick={handleApplyFilters}
                    >
                        Aplicar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
