import React, { useRef } from "react"
import HeroSection from "./HeroSection"
import CarShowcase from "./CarShowcase"

const Home = () => {

    const carShowcaseRef = useRef(null)

    const scrollToCarShowcase = () => {
        carShowcaseRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <>
            <HeroSection scrollToCarShowcase={scrollToCarShowcase}/>
            <CarShowcase ref={carShowcaseRef} />
        </>
    )

}

export default Home