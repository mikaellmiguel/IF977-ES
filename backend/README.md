# Projeto IF977-ES Backend

Este é o backend do projeto Geomundo. Siga as instruções abaixo para configurar e executar o projeto.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- [Git](https://git-scm.com/)

## Instalação

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/seu-usuario/IF977-ES.git
    ```

2. Navegue até o diretório do backend:

    ```bash
    cd IF977-ES/backend
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do diretório do backend e defina as seguintes variáveis de ambiente, conforme definido no .env.example:
```
SERVER_PORT = 3000   # Port to run the server on
JWT_SECRET = "sua_chave_secreta"  # Secret key for JWT
```
## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

2. O servidor estará em execução em `http://localhost:{PORTA ESCOLHIDA}`.

## Scripts Disponíveis

- `npm start`: Inicia o servidor de produção.
- `npm run dev`: Inicia o servidor de desenvolvimento.

## Estrutura do Projeto

- `src/`: Contém o código-fonte do projeto.
- `package.json`: Arquivo de configuração do npm.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
