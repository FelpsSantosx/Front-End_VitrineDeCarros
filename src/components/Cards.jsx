import React from "react"
import { useNavigate, Link } from "react-router-dom"
import Button from './Button'

const Cards = ({ car }) => {

    const navigate = useNavigate()

    const clickCarDetails = () => {
        navigate(`/carDetails/${car._id}`)
    }

    return (

        <div className='flex flex-row md:flex-col w-auto md:w-[380px] bg-primary'>
            <div className='md:w-[380px]'>
                <img src={car.imagemPrincipal} alt={car.modelo} />
            </div>
            <div className='flex flex-col px-3 w-full max-w-[300px] md:max-w-full overflow-hidden'>
                <Link to={`/carDetails/${car._id}`} className='block md:hidden'>
                    <h2 className='truncate text-h4 md:text-h2'>{car.modelo}</h2>
                    <h3 className='truncate text-h5 md:text-h4 pb-7'>{car.descricao}</h3>
                    <h3 className='text-h3 md:text-h2 md:pb-2'>R$ {car.preco || 'Não informado'}</h3>
                    <Button className='hidden md:block'>Ver Oferta</Button>
                    <div className='flex flex-row justify-between py-2'>
                        <p className='text-h5'>{car.ano}</p>
                        <p className='text-h5'>{car.quilometragem}</p>
                    </div>
                </Link>
                <div className="hidden md:flex flex-col px-2 w-full">
                    <h2 className='truncate text-h4 md:text-h2'>{car.modelo}</h2>
                    <h3 className='truncate text-h5 md:text-h4 pb-7'>{car.descricao}</h3>
                    <h3 className='text-h3 md:text-h2 md:pb-2'>R$ {car.preco || 'Não informado'}</h3>
                    <Button onClick={clickCarDetails} className='hidden md:block'>Ver Oferta</Button>
                    <div className='flex flex-row justify-between py-2'>
                        <p className='text-h5'>{car.ano}</p>
                        <p className='text-h5'>{car.quilometragem} KM</p>
                    </div>
                </div>

            </div>

        </div >
    )


}

export default Cards