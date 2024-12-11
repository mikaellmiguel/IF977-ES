# GeoMundo

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/mikaellmiguel/IF977-ES.svg)](https://github.com/mikaellmiguel/IF977-ES)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/mikaellmiguel/IF977-ES.svg)](https://github.com/mikaellmiguel/IF977-ES/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

## Descrição Geral
O **Geomundo** é uma aplicação web que oferece informações completas sobre países ao redor do mundo. Utilizando dados de APIs gratuitas como da [Wikipedia](https://www.mediawiki.org/wiki/MediaWiki), [Geonames](https://www.geonames.org/) e [REST Countries](https://restcountries.com/), a aplicação permite que o usuário visualize informações detalhadas de cada país, como sua localização no mapa, atráves do Open Street Maps, estados/províncias, e uma breve descrição retirada da Wikipedia. Além disso, a aplicação traz outras funcionalidades, como salvar países favoritos/relevantes, comparar países, comentar sobre eles e testar seus conhecimentos com quizes sobre os países, ajudando a engajar o usuário com a aplicação.

### Publico-alvo:
Este aplicativo é voltado para pessoas curiosas sobre geografia e cultura mundial, estudantes, viajantes e qualquer pessoa interessada em aprender mais sobre os países do mundo. Ele é ideal para quem gosta de explorar novas informações de forma interativa, além de testar seus conhecimentos com desafios de quiz.

## Objetivos Principais 🎯
- Proporcionar uma experiência interativa de exploração geográfica, permitindo aos usuários conhecerem informações sobre diferentes países de forma visual e dinâmica.
- Integrar fontes de dados confiáveis e abertos, como Wikipedia e Geonames, para fornecer descrições e dados completos sobre os países e suas divisões políticas/administrativas.
- Oferecer recursos que melhorem a interação do usuário, como favoritos, comparações de países e uma seção de comentários para publicação de curiosidades ou impressões.
- Estimular o aprendizado através de um quiz interativo sobre países e geografia mundial.

## Funcionalidades Esperadas
- **Lista de Países:** Os usuários podem navegar na lista de todos os países disponíveis.
- **Mapa para Visualização:** Exibe a localização do país no OpenStreetMap.
- **Informações do País:** Breve descrição obtida via API da Wikipedia.
- **Estados/Províncias:** Lista de estados ou províncias do país, obtida via API Geonames.
- **Favoritos:** Os usuários podem adicionar países à sua lista de favoritos.
- **Comparação de Países:** Compara dados importantes entre dois países.
- **Comentários:** Os usuários podem compartilhar suas impressões/curiosidades sobre um país.
- **Quiz de Conhecimentos:** Testa os conhecimentos do usuário sobre geografia e países.

## Início Rápido

Essas instruções fornecerão uma cópia do projeto instalada e funcionando na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

1. **Node.js e npm**

Node.js é necessário para executar o JavaScript no backend e gerenciar pacotes através do npm. O npm (Node Package Manager) vem integrado ao instalar o Node.js.

Como instalar: Acesse o site oficial do [Node.js](https://nodejs.org/) e baixe a versão LTS recomendada.
Após a instalação, verifique se o Node.js e o npm estão instalados com:

```bash
node -v
npm -v
```
2. **Editor de Código**

Um editor como o Visual Studio Code (VS Code) é recomendado para desenvolvimento.

Como instalar: Baixe o Visual Studio Code no site oficial: [VS Code](https://code.visualstudio.com/).

3. **Git (opcional, mas recomendado)**

Para gerenciar o versionamento de código.

Como instalar: Acesse o site oficial do [Git](https://git-scm.com/downloads) e siga as instruções para o seu sistema operacional.


### Instalação

Um passo a passo da série de exemplos que informam como fazer um ambiente de desenvolvimento em execução:

1. **Clonar o Repositório:**

Comece clonando o repositório para sua máquina local. No terminal, execute o seguinte comando:

```bash
git clone https://github.com/mikaellmiguel/IF977-ES
```

2. **Instalação das Dependências:**

Após clonar o repositório, navegue até as pastas do backend e frontend e instale as dependências necessárias:

**Para o backend e frontend:** Navegue até a pasta backend/ ou frontend/ e instale as dependências com o comando:

```bash
npm install
```

## Uso
Após a realização da instalação, para utilizar o software siga esse passo abaixo:

**Para o backend e frontend:** Navegue até a pasta backend/ ou frontend/ e inicie os servidores com o comando abaixo:

```bash
npm start
```



> OBS: Esses são os passos iniciais para configurar o projeto localmente. Para mais detalhes sobre o processo de build completo, consulte [BUILD.md](ttps://github.com/mikaellmiguel/IF977-ES/blob/main/BUILD.MD). É válido ressaltar que o projeto posso não estar pronto para execução nesses momento inicias.


## Estrutura do Código (Previsão)

O código a ser desenvolvido será organizado de acordo com a seguinte estrutura, com o objetivo de garantir uma arquitetura limpa, escalável e fácil de manter. Cada parte do sistema será distribuída entre as pastas e módulos apropriados, seguindo boas práticas de desenvolvimento.

```txt
IF977-ES/
│
├── README.md                # Documentação principal do projeto
├── CONTRIBUTING.md          # Diretrizes para contribuição
├── BUILD.md                 # Instruções para compilar e construir o projeto
│
├── Documentos               # Documentos criados ao longo do projeto
│
├── backend/                 # Código backend do projeto
│   ├── node_modules/        # Módulos do Node.js (gerados automaticamente)
│   ├── src/                 # Código fonte do projeto
│   │   ├── controllers/     # Funções responsáveis por manipular a lógica de cada rota
│   │   ├── routes/          # Definição das rotas da API
│   │   ├── services/        # Consumo de APIs externas
│   │   ├── utils/           # Funções utilitárias
│   │   ├── middlewares/     # Funções de middleware (ex: autenticação)
│   │   └── config/          # Arquivos de configuração (ex: DB)
│   ├── .env                 # Arquivo de variáveis de ambiente
│   ├── .gitignore           # Arquivos e pastas a serem ignorados pelo git
│   ├── package.json         # Dependências e scripts do projeto
│   ├── package-lock.json    # Versões fixas das dependências
│   └── server.js            # Ponto de entrada da aplicação
│
├── frontend/                # Código frontend do projeto
│   ├── public/              # Arquivos públicos acessíveis, como o index.html
│   │   ├── index.html       # Arquivo HTML principal
│   │   └── favicon.ico      # Ícone do site
│   ├── src/                 # Código-fonte do projeto
│   │   ├── assets/          # Arquivos estáticos, como imagens, fontes, etc.
│   │   ├── components/      # Componentes reutilizáveis da interface
│   │   ├── hooks/           # Hooks personalizados
│   │   ├── pages/           # Páginas (componentes principais)
│   │   ├── services/        # Funções para consumir APIs
│   │   ├── styles/          # Arquivos de estilo
│   │   ├── utils/           # Funções utilitárias
│   │   ├── App.js           # Componente principal da aplicação
│   │   └── index.js         # Ponto de entrada do React (renderiza o App)
│   ├── .gitignore           # Arquivos e pastas a serem ignorados pelo git
│   ├── package.json         # Dependências e scripts do projeto
│   ├── package-lock.json    # Versões fixas das dependências
│   └── README.md            # Documentação específicas do frontend
```

## Links Importantes ‼️
- [Workspace do Projeto - Github Projects](https://github.com/users/mikaellmiguel/projects/3)
- [Issues](https://github.com/mikaellmiguel/IF977-ES/issues)



## Como Contribuir 🤝
Contribuições são sempre bem-vindas! Se você está interessado em melhorar este projeto, fique à vontade para enviar suas sugestões ou mudanças. 


### Diretrizes 

Antes de começar a contribuir, orientamos consultar o arquivo [`CONTRIBUTING.md`](https://github.com/mikaellmiguel/IF977-ES/blob/main/CONTRIBUTING.MD), onde você encontrará diretrizes detalhadas sobre como contribuir, boas práticas de codificação, como criar branches, e como submeter pull requests.

Estamos abertos a todas as contribuições e ficaremos felizes em revisar e integrar melhorias feitas pela comunidade.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE) para detalhes.

## Créditos

- Mikael Miguel da Silva
- Pablo Henrique Ferreira da Silva
- Itallo Augusto Pereira de Azevedo Melo

## FAQ

**Pergunta 1:** Como faço para configurar o ambiente?

**Resposta:** Siga as instruções de instalação e qualquer etapa de configuração adicional indicada acima.

**Pergunta 2:** Como reportar um bug ou sugerir melhorias?

**Resposta:** Você pode abrir uma issue no repositório do GitHub descrevendo o problema ou sugestão. Ao abrir a issue:
1. Use um título claro e descritivo.
2. Explique os passos para reproduzir o problema (se aplicável).
3. Inclua sugestões ou ideias para melhorias.

## Estado do Projeto

Este projeto está em desenvolvimento ativo. Você pode esperar mudanças frequentes e atualizações.


<center><b>Agradecemos por verificar este projeto! Se você tiver dúvidas, sugestões ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request. Seu feedback é sempre bem-vindo.</b></center>