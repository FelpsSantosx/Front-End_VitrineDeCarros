import React from "react"
import logo from '../assets/logo.png'

const Footer = () => {

    return (

        <footer>
            {/* Alterar a tag a para link */}
            <div className='bg-fifth text-primary font-montserrat text-h5 text-center py-3'>Nossos canais de atendimentos são 100% digitais. Precisa de ajuda? <a href="/" className='text-third'>CLIQUE AQUI</a></div> 
            <div className='flex items-center justify-center gap-4 p-3 bg-second'>
                <img src={logo} alt="Logo" />
                <p className='text-primary font-montserrat text-h5 text-center'>© {new Date().getFullYear()} TopCar Online. Todos os direitos reservados.<br />
                Todos os direitos reservados</p>
            </div>
        </footer>
    )

}

export default Footer