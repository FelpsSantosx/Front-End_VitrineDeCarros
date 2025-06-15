# Vitrine de Carros

O projeto Vitrine de Carros é uma loja virtual moderna e responsiva destinada a exibir, filtrar e detalhar carros disponíveis para venda. Ele oferece aos usuários a capacidade de encontrar veículos de acordo com suas preferências, visualizar informações detalhadas e entrar em contato diretamente com o vendedor.

## Tecnologias Utilizadas

- **[React](https://pt-br.reactjs.org/):** Framework para construção da interface.
- **[Vite](https://vitejs.dev/):** Ferramenta de build e desenvolvimento rápido.
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utilitário.
- **[Material Tailwind](https://www.material-tailwind.com/):** Tema visual.
- **[React Router](https://reactrouter.com/):** Gerenciamento de rotas.
- **[React Query](https://react-query.tanstack.com/):** Gerenciamento de estado global.
- **[Axios](https://axios-http.com/):** Cliente HTTP.

## Instalação e Configuração

1. **Clone o repositório:**

2. **Instale as dependências:**

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto e defina a variável `VITE_API_URL` com a URL da sua API backend.

4. **Inicie o servidor de desenvolvimento:**

5. **Acesse no navegador:**
   - Abra [http://localhost:3000](http://localhost:3000)

## Funcionalidades Principais

- **Listagem de Carros:** Exibe uma lista de carros disponíveis com informações como modelo, preço, ano e quilometragem.
- **Detalhes do Carro:** Oferece uma página detalhada com informações completas, galeria de imagens e comparação de preço com a tabela FIPE.
- **Filtros de Busca:** Possibilita filtrar carros por diversos critérios como modelo, preço, ano, câmbio, combustível e cor.
- **Paginação:** Navegação entre páginas de resultados para uma melhor visualização.
- **Galeria de Imagens:** Cada carro possui uma galeria navegável de imagens.
- **Contato com o Vendedor:** Integração com WhatsApp para envio de mensagens.
- **Lojas Associadas:** Carrossel de marcas parceiras.
- **Página Sobre:** Informações institucionais sobre a empresa, incluindo missão e valores.

## Estrutura do Projeto

- `public/`: Arquivos estáticos como imagens e ícones.
- `src/`: Código fonte do projeto.

### Dentro de `src/`:

- `api/`: Funções de API para requisições HTTP.
- `app.jsx`: Renderiza o componente principal do projeto.
- `components/`: Componentes reutilizáveis.
- `pages/`: Componentes de página.
- `styles/`: Arquivos de estilo, incluindo `tailwind.config.js`.

### Dentro de `components/`:

- `Cards/`: Componentes de cartões para informações dos carros.
- `Carousel/`: Componentes de carrossel para imagens.
- `FilterModal/`: Modal para filtros avançados.
- `Pagination/`: Componente de paginação.

### Dentro de `pages/`:

- `about/`: Páginas de informações da empresa.
- `carDetails/`: Páginas de detalhes dos carros.
- `home/`: Página principal listando os carros.

## Requisitos para Rodar o Projeto

- **Node.js:** 16.0.0 ou superior
- **NPM:** 7.10.0 ou superior
- **Yarn:** 1.22.0 ou superior (opcional)
- **React:** 17.0.2 ou superior
- **Vite:** 2.9.13 ou superior

