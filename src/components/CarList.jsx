import React, { useState } from "react";
import Cards from "./Cards";
import Pagination from "./pagination";
import { useCars } from "../api";

const CarList = ({ searchResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;

  // Usa o hook do React Query
  const { data, isLoading, error } = useCars(currentPage, limit);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar os carros.</p>;

  const cars = searchResults.length > 0 ? searchResults : data?.cars || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Cards key={car._id} car={car} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CarList;
