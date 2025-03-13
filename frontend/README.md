# Projeto IF977-ES Frontend

Este é o frontend do projeto Geomundo. Siga as instruções abaixo para configurar e executar o projeto em sua máquina local.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório para sua máquina local:

    ```sh
    git clone https://github.com/mikaellmiguel/IF977-ES
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd IF977-ES/frontend
    ```

3. Instale as dependências do projeto:

    ```sh
    npm install
    ```

## Variáveis de Ambiente

Antes de executar o projeto, configure as variáveis de ambiente necessárias. Crie um arquivo `.env` na raiz do diretório do projeto e adicione as seguintes variáveis:

```
VITE_API_URL={URL_DA_SUA_API}
```

Certifique-se de substituir os valores conforme necessário para o seu ambiente.

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

    ```sh
    npm run dev
    ```

2. Abra seu navegador e acesse `http://localhost:5173` para visualizar o projeto em execução.

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção na pasta `build`.

## Estrutura de Pastas

- `src/`: Contém o código-fonte do projeto.
- `public/`: Contém os arquivos estáticos públicos.
- `build/`: Pasta gerada após a compilação para produção.

## Contribuição

Se você deseja contribuir com o projeto, por favor, siga as diretrizes de contribuição descritas no arquivo `CONTRIBUTING.md`.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
