import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GaleyCar from "./GaleryCar"
import InfoModel from "./InfoModel"
import api from "../../api"

const CarDetails = () => {
    const { id } = useParams()
    const [carDetails, setCarDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

       

        const fetchCarDetails = async (id) => {
            try {
                const response = await api.get(`/cars/${id}`)
                setCarDetails(response.data)
            } catch (error) {
                console.error("Erro ao buscar detalhes do carro:", error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchCarDetails(id)
    }, [id])

    if (loading) {
        return <p>Carregando...</p>
    }

    if (error) {
        return <p>Ocorreu um erro ao carregar os detalhes do carro.</p>
    }

    if (!carDetails) {
        return <p>Carro não encontrado!</p>
    }

    return (
        <>
            <GaleyCar images={carDetails.images} />
            <InfoModel details={carDetails} />
        </>
    )
}

export default CarDetails
