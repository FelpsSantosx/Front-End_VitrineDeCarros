import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { getCars } from "../api";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCars = async () => {
    const { cars: carList, totalPages: totalPagesFromApi } = await getCars(
      page,
      limit
    );
    console.log("Carros recebidos:", carList, "Total de páginas:", totalPages);

    setCars(carList);
    setTotalPages(totalPagesFromApi);
  };


  useEffect(() => {
    fetchCars();
  }, [page, limit]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Navegar para a página anterior
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      {/* Grid de carros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Cards key={car._id} car={car} />
        ))}
      </div>

      {/* Controles de paginação */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>
          Página {page} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default CarList;