import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { getCars, searchCars } from "../api";
import Pagination from "./pagination";

const CarList = ({ filters, searchResults }) => {
  const [cars, setCars] = useState([]); // Lista de carros
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const [totalPages, setTotalPages] = useState(1); // Total de páginas
  const limit = 9; // Número de carros por páginat

  const fetchCars = async (page) => {
    const { cars: carList, totalPages: totalPagesFromApi } = await getCars(
      page,
      limit
    );
    console.log("Carros recebidos:", carList, "Total de páginas:", totalPages);

    setCars(carList);
    setTotalPages(totalPagesFromApi);
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      setCars(searchResults)
    } else {
      fetchCars(currentPage);
    }
  }, [searchResults, currentPage]);

  return (
    <div>
      {/* Grid de carros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Cards key={car._id} car={car} />
        ))}
      </div>

      {/* Controles de paginação */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CarList;