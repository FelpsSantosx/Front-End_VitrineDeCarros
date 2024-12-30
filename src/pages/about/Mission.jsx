import React from "react"
import Personagem from "../../assets/Personagem.png"

const Mission = () => {
    return (

        <div className="flex items-center font-montserrat bg-second rounded-l-3xl my-10 md:my-20 ml-5 md:ml-28 pl-5 md:pl-32 py-5 md:py-10 gap-5 md:gap-10">
            <h2 className="text-h5 md:text-h2 text-primary text-left">
                Nossa missão é <strong className="text-third"> revolucionar </strong>  a forma como as pessoas
                <strong className="text-third"> compram carros</strong> , oferecendo uma plataforma
                conveniente, confiável e inovadora que atenda às necessidades dos clientes.</h2>
            <img src={Personagem} alt="Personagem" className="w-36 h-40 md:w-auto md:h-auto"/>
        </div>

    )
}

export default Mission