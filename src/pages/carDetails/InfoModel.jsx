import React, { useState, useEffect } from "react";
import axios from "axios";
import SuperDesconto from "../../assets/super-oferta.png";
import Logo from "../../assets/TopCarOnline_Logo.png";
import SuperOferta from "../../assets/oferta.png";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const InfoModel = ({ details }) => {
  const {
    modelo,
    descricao,
    ano,
    cambio,
    combustivel,
    cor,
    quilometragem,
    cidade,
    preco,
    fipe,
  } = details;

  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [whatsAppLink, setWhatsAppLink] = useState("");
  const [loading, setLoading] = useState(false);

  const carro = {
    modelo,
    preco,
    ano,
    cambio,
    combustivel,
    cor,
    quilometragem,
  };

  useEffect(() => {
    if (whatsAppLink) {
      window.open(whatsAppLink, "_blank");
    }
  }, [whatsAppLink]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setWhatsAppLink("");
    try {
      const response = await axios.post(
        // "https://back-end-topcaronline.onrender.com/messages/message" ,
        "http://localhost:3000/messages/message",
        {
          nome,
          mensagem,
          carro,
        }
      );
      if (response.status === 201) {
        setWhatsAppLink(response.data.whatsAppLink);
        toast.success("Mensagem enviada com sucesso! ✅");
      } else {
        alert("Erro: " + response.data.error);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Ocorreu um erro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

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
              <h2 className="text-h4">R${preco}</h2>
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
            <h2 className="text-h3">R${preco}</h2>
            <h5 className="text-h4 text-sm">Envie uma mensagem ao vendedor</h5>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-6 pt-5"
          >
            <input
              className="w-72 md:w-11/12 rounded-md py-1 pl-2 text-h5"
              id="name"
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <textarea
              className="w-72 md:w-11/12 rounded-md py-1 pl-2 text-h5"
              name="Message"
              id="Message"
              placeholder="Mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
            <Button
              className="w-full px-4 rounded-lg"
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
        </div>
      </div>
      {/* Inclua o ToastContainer para que as notificações apareçam */}
      <ToastContainer />
      {/* Testando novo modelo de estilização */}
    </section>
  );
};
export default InfoModel;
