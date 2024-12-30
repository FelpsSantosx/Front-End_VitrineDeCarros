import React from "react"
import LogoImage from "../../assets/TopCarImage.png"

const AboutUs = () => {
    return (

        <section>
            <img src={LogoImage} alt="LogoMarca" className="relative w-[199px] md:w-[504px] h-[131px] md:h-[343px] top-20 md:top-52 md:left-5" />
            <div className="font-montserrat bg-black flex flex-wrap my-10 md:my-20 mr-5 md:mr-28 py-5 md:py-10 pl-36 md:pl-[34rem] pr-5 md:pr-32 rounded-r-3xl">
                <h2 className="text-h5 md:text-h2 text-primary text-left " >TopCar Online é uma empresa
                    <strong className="text-third"> líder em vendas </strong>
                    de carros online dedicada a fornecer uma experiência
                    de compra fácil segura e transparente para nossos clientes.
                </h2>
            </div>
        </section>
        
        
    )
}

export default AboutUs