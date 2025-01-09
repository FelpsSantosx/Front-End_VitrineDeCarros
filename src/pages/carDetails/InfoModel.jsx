import React from "react"
import SuperDesconto from "../../assets/super-oferta.png"
import Logo from "../../assets/TopCarOnline_Logo.png"
import SuperOferta from "../../assets/oferta.png"
import Button from "../../components/Button"


const InfoModel = ({ details }) => {

    const { modelo, descricao, ano, cambio, combustivel, cor, quilometragem, cidade, preco, fipe } = details

    return (
        <section className="font-montserrat">

            <div className="grid grid-cols-11 md:grid-cols-12 grid-rows-4 md:grid-rows-2 gap-4 my-4">

                <div className="col-span-9 md:col-span-6 row-span-1 md:row-span-1 col-start-2 md:col-start-2 row-start-1 my-4">
                    <div className="bg-second grid grid-cols-2 p-2 rounded-t-2xl">
                        <div>
                            <h2 className="text-h3 text-primary">{modelo}</h2>
                            <h3 className="text-h4 text-primary">{descricao}</h3>
                        </div>
                        <div className="grid justify-end items-center">
                            <img src={SuperDesconto} alt="Desconto" className="h-10" />
                        </div>
                    </div>
                    <div className="bg-primary grid grid-cols-3 gap-5 text-left p-2">

                        <div>
                            <p className="text-h5 text-sm">ANO</p>
                            <p className="text-sm text-h4">{ano}</p>
                        </div>

                        <div>
                            <p className="text-h5 text-sm">CÂMBIO</p>
                            <p className="text-sm text-h4">{cambio}</p>
                        </div>

                        <div>
                            <p className="text-h5 text-sm">COMBUSTÍVEL</p>
                            <p className="text-sm text-h4">{combustivel}</p>
                        </div>
                        <div>
                            <p className="text-h5 text-sm">COR</p>
                            <p className="text-sm text-h4">{cor}</p>
                        </div>
                        <div>
                            <p className="text-h5 text-sm">KM</p>
                            <p className="text-sm text-h4">{quilometragem}</p>
                        </div>
                        <div>
                            <p className="text-h5 text-sm">CIDADE</p>
                            <p className="text-sm text-h4">{cidade}</p>
                        </div>

                    </div>
                </div>

                <div className="bg-black grid col-span-9 md:col-span-6 row-span-1 md:row-span-1 col-start-2 md:col-start-2 row-start-2 md:row-start-2 text-primary rounded-3xl">
                    <div className="grid grid-cols-4 px-4 rounded-t-2xl items-center">
                        <div className="col-span-3">
                            <h3 className="text-h4">COMPARE OS PREÇOS</h3>
                        </div>
                        <div className="grid justify-end items-center col-span-1 ">
                            <img src={SuperOferta} alt="Desconto" className="h-10" />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 items-center justify-items-center gap-3 px-2">
                        <div className="col-span-2">
                            <p className="text-h5 text-sm">Valor anuciado</p>
                            <h2 className="text-h4">R$ {preco}</h2>
                        </div>
                        <div>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="col-span-2">
                            <p className="text-h5 text-sm">Fipe</p>
                            <h2 className="text-h4">R$ {fipe}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-start-2 md:col-start-8 col-span-9 md:col-span-4 row-start-3 md:row-start-1 row-span-3 md:row-span-4 my-4 bg-primary">
                    <div className="bg-second text-primary rounded-t-2xl text-left p-4">
                        <h2 className="text-h3">R$ 280.000</h2>
                        <h5 className="text-h4 text-sm">Envie uma mensagem ao vendendor</h5>
                    </div>
                    <div className="flex flex-col items-center gap-6 pt-5">
                        <input className="w-72 md:w-11/12 rounded-md py-1 pl-2 text-h5" id="name" type="text" placeholder="Nome"/>
                        <input className="w-72 md:w-11/12 rounded-md py-1 pl-2 text-h5" id="email" type="text" placeholder="E-mail"/>
                        <input className="w-72 md:w-11/12 rounded-md py-1 pl-2 text-h5" id="fone" type="text" placeholder="Telefone"/>
                        <textarea className="w-72 md:w-11/12 rounded-md py-1 pl-2 text-h5" name="Message" id="Message" placeholder="Messagem" />
                    </div>
                    <div className="py-8 px-4">
                        <Button className="w-full px-4 rounded-lg">Enviar mensagem</Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default InfoModel