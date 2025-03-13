# Instruções para Build Local

**OBS:** Este projeto está em desenvolvimento, e as instruções a seguir irão guiá-lo na configuração inicial do ambiente e no processo de build, que será atualizado conforme o código for sendo desenvolvido.

## Ferramentas Necessárias
Para configurar e desenvolver o projeto, será necessário:
- **Node.js** (versão 18+)
- **NPM**


## Configuração Inicial
### 1. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
```

### 2. Instalar Dependências

Após clonar o repositório, você precisará instalar as dependências necessárias para o **backend** e o **frontend**:

- **Backend**: Navegue até a pasta `backend/` e instale as dependências com o seguinte comando:

```bash
cd backend
npm install
```
- **Frontend**: Navegue até a pasta frontend/ e instale as dependências com o seguinte comando:

```bash
cd frontend
npm install
```

### 3. Configuração de Variáveis de Ambiente
Este projeto pode exigir variáveis de ambiente para funcionar corretamente, como chaves de API ou configurações do banco de dados. Verifique o arquivo .env.example e crie um arquivo .env na raiz do projeto com as configurações adequadas.

```bash
cp .env.example .env
```

Edite o arquivo .env conforme necessário para o seu ambiente.

### 4. Executar o Projeto
Por enquanto, o projeto não está totalmente implementado, diante disso, o comando para execução do ambiente de desenvolvimento é:

Para o Backend:
```bash
npm run dev
```
Para o Frontend:

```bash
npm run dev
```

## Status do Projeto
Este projeto já avançou além da fase inicial de desenvolvimento. O código está estruturado e as funcionalidades principais foram implementadas. As instruções de build estão atualizadas conforme o progresso do desenvolvimento.

## Planejamento Futuro
As seguintes funcionalidades e etapas estão previstas:
- Testes automatizados.
- Documentação detalhada.
