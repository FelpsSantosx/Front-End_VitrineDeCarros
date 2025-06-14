import React from "react";

const HistoryAndvalor = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-48 font-montserrat">
      <div className="bg-white text-center p-5 w-auto md:w-[27.5rem] h-auto md:h-[44rem] flex flex-col justify-around gap-10 md:gap-0">
        <h2 className="text-h3 md:text-h2 inline-block border-b-2 border-third mx-16 md:mx-10 pb-5 md:pb-10">
          Nossa história
        </h2>
        <p className="text-h4 px-10 md:px-16 text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          asperiores animi illo, hic accusantium esse repellat repellendus
          debitis possimus labore, nemo consectetur eveniet adipisci et omnis
          porro aliquid aliquam illum!.
        </p>
      </div>

      <div className="bg-white text-center p-5 w-auto md:w-[27.5rem] h-auto md:h-[44rem] flex flex-col justify-around gap-10 md:gap-0">
        <h2 className="text-h3 md:text-h2 inline-block border-b-2 border-third mx-16 md:mx-10 pb-5 md:pb-10">
          Nossos Valores
        </h2>
        <p className="text-h4 px-12 md:px-16 text-left">
          <strong className="text-third"> Confiança </strong> : Construímos
          relacionamentos duradouros com nossos clientes.
          <strong className="text-third"> Inovação </strong> : Estamos sempre
          buscando melhorar nossa plataforma e serviços.
          <strong className="text-third"> Transparência </strong> : Fornecemos
          informações precisas e claras sobre nossos veículos.
          <strong className="text-third"> Excelência </strong> : Strivemos por
          excelência em tudo o que fazemos.
        </p>
      </div>
    </section>
  );
};

export default HistoryAndvalor;
