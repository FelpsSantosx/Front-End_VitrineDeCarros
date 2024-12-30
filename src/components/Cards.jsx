import React from "react"
import { useNavigate, Link } from "react-router-dom"
import Button from './Button'
import carro1 from '../assets/image4.png'

const Cards = () => {

    const navigate = useNavigate()

    const clickCarDetails = () => {
        navigate("/carDetails")
    }

    return (

        <div className='flex flex-row md:flex-col w-auto md:w-[380px] bg-primary'>
            <div className='md:w-[380px]'>
                <img src={carro1} alt="modelos" />
            </div>
            <div className='flex flex-col px-3 w-full max-w-[300px] md:max-w-full overflow-hidden'>
                <Link to="/carDetails" className='block md:hidden'>
                    <h2 className='truncate text-h4 md:text-h2'>Maserati  grantius</h2>
                    <h3 className='truncate text-h5 md:text-h4 pb-7'>4.7 v8 Gasolina Sport mc</h3>
                    <h3 className='text-h3 md:text-h2 md:pb-2'>R$ 1.400.000</h3>
                    <Button className='hidden md:block'>Ver Oferta</Button>
                    <div className='flex flex-row justify-between py-2'>
                        <p className='text-h5'>2023/2024</p>
                        <p className='text-h5'>15.000 KM</p>
                    </div>
                </Link>
                <div className="hidden md:flex flex-col px-2 w-full">
                    <h2 className='truncate text-h4 md:text-h2'>Maserati  Grantius</h2>
                    <h3 className='truncate text-h5 md:text-h4 pb-7'>4.7 v8 Gasolina Sport mc</h3>
                    <h3 className='text-h3 md:text-h2 md:pb-2'>R$ 1.400.000</h3>
                    <Button onClick={clickCarDetails} className='hidden md:block'>Ver Oferta</Button>
                    <div className='flex flex-row justify-between py-2'>
                        <p className='text-h5'>2023/2024</p>
                        <p className='text-h5'>15.000 KM</p>
                    </div>
                </div>

            </div>

        </div >
    )


}

export default Cards