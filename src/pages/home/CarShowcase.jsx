import React, { forwardRef, useState } from "react"
import CarouselMarca from "../../components/CarouselMarca"
import Button from "../../components/Button"
import Filtro from "../../assets/filtroImg.png"
import CarList from "../../components/CarList"
import FilterModal from "../../components/FilterModal"
import { searchCars } from "../../api"


const CarShowcase = forwardRef((props, ref) => {

    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
    const [filters, setFilters] = useState({})
    const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar o texto da barra de pesquisa
    const [searchResults, setSearchResults] = useState([]); // Resultado da busca


    const handleOpenFilterModal = () => {
        setIsFilterModalOpen(true)
    }

    const handleCloseFilterModal = () => {  
        setIsFilterModalOpen(false)
    }

    const handleApplyFilters = (appliedFilters) => {
        setFilters(appliedFilters)
        console.log("Filtros aplicados: ", appliedFilters)
    }

    const handleSearch = async () => {
        // Realiza a pesquisa usando o valor da barra de pesquisa
        try {
            const results = await searchCars({ modelo: searchQuery });
            setSearchResults(results); // Atualiza os resultados da busca
        } catch (error) {
            console.error("Erro ao buscar carros:", error);
        }
    };
    
    return (
        
        <section ref={ref} className="bg-black flex flex-col items-center justify-center font-montserrat">
            {/* SearchBar */}
            <div className="flex flex-col md:flex-row items-center justify-center bg-second rounded-3xl px-10 md:px-16 py-4 md:py-6 my-10 gap-4 md:gap-16">
                <span className="flex flex-row gap-1 md:gap-4 bg-gray-500 rounded-2xl pr-2 md:pr-4">
                    <input
                       type="search"
                       name="searchBar"
                       id="searchBar"
                       placeholder="Pesquisar"
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado da barra de pesquisa
                       className="rounded-2xl bg-white text-h5 md:text-h3 py-2 md:py-4 pl-4 md:pl-8"
                   />
                    <button onClick={handleOpenFilterModal}>
                        <img src={Filtro} alt="Filtro" />
                    </button>
                </span>
                

                <Button
                    className="text-h5 md:text-h3 px-8"
                    color="bg-primary text-second hover:text-primary"
                    onClick={handleSearch} // Chama a função de pesquisa ao clicar
                >
                    Veja Ofertas
                </Button>
            </div>

            <div>
                <h1 className="text-h3 md:text-h1 text-primary">CARROS EM OFERTAS</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 py-4 md:p-8 my-8 md:m-12 rounded-md md:rounded-2xl bg-white">
                {/* Passa os resultados da pesquisa para o CarList */}
                <CarList filters={filters} searchResults={searchResults} />
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
    )

})

export default CarShowcase

