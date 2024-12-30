import React from "react"
import logo from '../assets/TopCarOnline_Logo.png'

const Footer = () => {

    return (

        <footer>
            <div className='bg-fifth text-primary font-montserrat text-h5 text-center py-3'>Nossos canais de atendimentos são 100% digitais. Precisa de ajuda? <a href="/" className='text-third'>CLIQUE AQUI</a></div>
            <div className='flex items-center justify-center gap-4 p-3 bg-second'>
                <img src={logo} alt="Logo" />
                <p className='text-primary font-montserrat text-h5 text-center'>Site desenvolvido por Felipe Souza <br />
                Todos os direitos reservados</p>
            </div>
        </footer>
    )

}

export default Footer