import React, { forwardRef, useState } from "react"
import CarouselMarca from "../../components/CarouselMarca"
import Button from "../../components/Button"
import Filtro from "../../assets/FiltroImg.png"
import CarList from "../../components/CarList"
import FilterModal from "../../components/FilterModal"
import { searchCars } from "../../api"


const CarShowcase = forwardRef((props, ref) => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, totalPages: 0 });

    const handleOpenFilterModal = () => setIsFilterModalOpen(true);
    const handleCloseFilterModal = () => setIsFilterModalOpen(false);

    const handleApplyFilters = (appliedFilters) => {
        setFilters(appliedFilters);
        setPagination((prev) => ({ ...prev, page: 1 })); // Reinicia para a primeira página
        fetchCars({ ...appliedFilters, page: 1 }); // Atualiza com filtros
        handleCloseFilterModal();
    };

    const fetchCars = async (params = {}) => {
        try {
            const { cars, totalPages } = await searchCars(params);
            setSearchResults(cars);
            setPagination((prev) => ({ ...prev, totalPages, page: params.page || 1 }));
        } catch (error) {
            console.error("Erro ao buscar carros:", error);
        }
    };

    const handleSearch = () => {
        fetchCars({ ...filters, modelo: searchQuery, page: 1 });
    };

    const handlePageChange = (newPage) => {
        fetchCars({ ...filters, modelo: searchQuery, page: newPage });
    };

    return (
        <section ref={ref} className="bg-black flex flex-col items-center justify-center font-montserrat">
            <div className="flex flex-col md:flex-row items-center justify-center bg-second rounded-3xl px-10 md:px-16 py-4 md:py-6 my-10 gap-4 md:gap-16">
                <span className="flex flex-row gap-1 md:gap-4 bg-gray-500 rounded-2xl pr-2 md:pr-4">
                    <input
                        type="search"
                        name="searchBar"
                        id="searchBar"
                        placeholder="Pesquisar"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-2xl bg-white text-h5 md:text-h3 py-2 md:py-4 pl-4 md:pl-8"
                    />
                    <button onClick={handleOpenFilterModal}>
                        <img src={Filtro} alt="Filtro" />
                    </button>
                </span>
                <Button
                    className="text-h5 md:text-h3 px-8"
                    color="bg-primary text-second hover:text-primary"
                    onClick={handleSearch}
                >
                    Veja Ofertas
                </Button>
            </div>

            <div>
                <h1 className="text-h3 md:text-h1 text-primary">CARROS EM OFERTAS</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 py-4 md:p-8 my-8 md:m-12 rounded-md md:rounded-2xl bg-white">
                <CarList filters={filters} searchResults={searchResults} />
            </div>

            {/* Paginação */}
            <div className="flex justify-center gap-4">
                {pagination.page > 1 && (
                    <button
                        className="px-4 py-2 bg-primary text-white rounded-md"
                        onClick={() => handlePageChange(pagination.page - 1)}
                    >
                        Anterior
                    </button>
                )}
                {pagination.page < pagination.totalPages && (
                    <button
                        className="px-4 py-2 bg-primary text-white rounded-md"
                        onClick={() => handlePageChange(pagination.page + 1)}
                    >
                        Próxima
                    </button>
                )}
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-h3 md:text-h1 text-primary">LOJAS ASSOCIADAS</h1>
                <div className="flex flex-row justify-center my-4">
                    <CarouselMarca />
                </div>
            </div>

            {isFilterModalOpen && (
                <FilterModal onApplyFilters={handleApplyFilters} onClose={handleCloseFilterModal} />
            )}
        </section>
    );
});

export default CarShowcase

