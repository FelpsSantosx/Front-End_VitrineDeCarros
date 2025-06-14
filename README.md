# Vitrine de carros

Este projeto é uma loja virtual de carros, construída com as seguintes tecnologias:

- [React](https://pt-br.reactjs.org/) como framework frontend
- [Vite](https://vitejs.dev/) como ferramenta de build e desenvolvimento
- [TypeScript](https://www.typescriptlang.org/) como linguagem de programação
- [Tailwind CSS](https://tailwindcss.com/) como framework CSS
- [Material Tailwind](https://www.material-tailwind.com/) como tema para o projeto
- [React Router](https://reactrouter.com/) como roteador
- [React Query](https://react-query.tanstack.com/) como gerenciador de estado global
- [Axios](https://axios-http.com/) como cliente HTTP

## Como usar o código

1. Clone o repositório
2. Execute o comando `npm install` para instalar as dependências
3. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento
4. Abra o navegador e acesse o endereço `http://localhost:3000`

## Funcionalidades

- Listagem de carros
- Detalhes de cada carro
- Filtros de busca por marca, modelo e ano
- Paginação
- Galeria de imagens para cada carro

## Arquitetura

A estrutura de pastas do projeto é a seguinte:

- `public/`: pasta contendo arquivos estáticos como imagens e icones
- `src/`: pasta contendo o código fonte do projeto

Dentro da pasta `src/` temos as seguintes subpastas:

- `api/`: pasta contendo as funções de API que fazem requisições HTTP
- `app.jsx`: arquivo que renderiza o componente principal do projeto
- `app.jsx`: arquivo que renderiza o componente principal do projeto
- `components/`: pasta contendo os componentes reutilizáveis do projeto
- `pages/`: pasta contendo os componentes de página do projeto
- `styles/`: pasta contendo os arquivos de estilo do projeto, incluindo o arquivo `tailwind.config.js` de configuração do Tailwind CSS

Dentro da pasta `components/` temos as seguintes subpastas:

- `Cards/`: pasta contendo os componentes de cartões que exibem as informações dos carros
- `Carousel/`: pasta contendo os componentes de carrossel que exibem as imagens dos carros
- `FilterModal/`: pasta contendo o componente de modal que abre quando o usuário clica no botão de filtro
- `Pagination/`: pasta contendo o componente de paginação que exibe as páginas de carros

Dentro da pasta `pages/` temos as seguintes subpastas:

- `about/`: pasta contendo as páginas de informações sobre a empresa
- `carDetails/`: pasta contendo as páginas de detalhes de cada carro
- `home/`: pasta contendo a página principal do projeto que lista os carros

## Requisitos para rodar o projeto

- Node.js 16.0.0 ou superior
- NPM 7.10.0 ou superior
- Yarn 1.22.0 ou superior (opcional)
- React 17.0.2 ou superior
- Vite 2.9.13 ou superior
