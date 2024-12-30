import { useState } from "react"
import { Link } from 'react-router-dom'
import React from "react"
import Button from "../../components/Button"

const LoginLogout = () => {

    const [isResgisterOpen, setIsRegisterOpen] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center h-screen font-montserrat bg-[url('./assets/bgfundo.png')] bg-cover bg-center bg-no-repeat">

            {!isResgisterOpen && (
                <form action="" className="flex flex-col gap-10 bg-primary rounded-xl p-10 px-20">
                    <h1 className="text-h3 md:text-h1">Entrar</h1>
                    <h3 className="text-h4 md:text-h3">Digite seu e-mail e senha</h3>
                    <input type="email" placeholder="e-mail" className="px-5 text-h4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="senha" className="px-5 text-h4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div className="flex flex-col md:flex-row gap-4 md:justify-around">
                        <Link className="text-h4 text-sm md:text-h5 text-second">Esqueci minha senha</Link>
                        <h5 className="text-h4 text-sm md:text-h5">Não tem uma conta?<Button onClick={() => setIsRegisterOpen(true)} className="text-h5 text-sm py-0 px-1" color="bg-primary text-second">Crie agora!</Button></h5>
                    </div>
                    <Button className="text-h5 rounded-3xl md:w-28">Entrar</Button>

                </form>

            )}

            {isResgisterOpen && (
                <form action="" className="flex flex-col justify-center gap-10 rounded-xl bg-primary p-10 px-20">
                    <h1 className="text-h3 md:text-h1">Cadastre-se</h1>
                    <h3 className="text-h4 md:text-h3">Digite seus dados</h3>
                    <input type="text" placeholder="Nome" className="px-5 text-h4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="E-mail" className="px-5 text-h4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="tel" placeholder="Telefone" className="px-5 text-h4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Senha" className="px-5 text-h4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Repita a senha" className="px-5 text-h4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <Button onClick={() => setIsRegisterOpen(false)} className="text-h5 rounded-3xl md:mx-28">Crie sua conta</Button>
                </form>
            )}

        </div>
    )
}

export default LoginLogout