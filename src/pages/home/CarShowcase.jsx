import React, { forwardRef } from "react"
import CarouselMarca from "../../components/CarouselMarca"
import Button from "../../components/Button"
import Filtro from "../../assets/filtroImg.png"
import CarList from "../../components/CarList"


const CarShowcase = forwardRef((props, ref) => {

    return (
        <section ref={ref} className="bg-black flex flex-col items-center justify-center font-montserrat">

            <div className="flex flex-col md:flex-row items-center justify-center bg-second rounded-3xl px-10 md:px-16 py-4 md:py-6  my-10 gap-4 md:gap-16">

                <span className="flex flex-row gap-1 md:gap-4 bg-gray-500 rounded-2xl pr-2 md:pr-4 ">
                    <input type="search" name="searchBar" id="searchBar" placeholder="Pesquisar" className="rounded-2xl bg-white text-h5 md:text-h3 py-2 md:py-4 pl-4 md:pl-8" />
                    <button><img src={Filtro} alt="Filtro" /></button>
                </span>

                <Button className="text-h5 md:text-h3 px-8" color="bg-primary text-second hover:text-primary">
                    Veja Ofertas
                </Button>

            </div>

            <div>
                <h1 className="text-h3 md:text-h1 text-primary">CARROS EM OFERTAS</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 py-4 md:p-8 my-8 md:m-12 rounded-md md:rounded-2xl bg-white">

                <CarList />

                {/* <div> Criar Paginação no Back-end </div> */}

            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-h3 md:text-h1 text-primary">LOJAS ASSOCIADAS</h1>

                <div className="flex flex-row justify-center my-4">
                    <CarouselMarca />
                </div>
            </div>
            

        </section>
    )

})

export default CarShowcase

