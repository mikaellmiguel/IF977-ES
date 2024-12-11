# Elicitação e Levantamento de Requisitos

> **Observação**: Este é um levantamento inicial dos requisitos do projeto. Os requisitos podem ser ajustados ou modificados conforme o desenvolvimento do projeto avança e novas necessidades ou ajustes forem identificados.

## Requisitos Funcionais

### História 1: Listar Países do Mundo

```txt
Como usuário, 
Eu Gostaria de ver uma lista completa de todos os países do mundo 
Para poder pesquisá-los facilmente.
```

**Critérios de Aceitação**:
 - Exibir uma lista com todos os países.
 - Permitir pesquisa e filtro por nome ou região.
 - Dados básicos como capital e população visíveis.

### História 2: Obter Informações de Países

```txt
Como usuário, 
Eu gostaria de acessar informações detalhadas sobre um país
Para aprender mais sobre ele.
```

**Critérios de Aceitação**:
 - Mostrar dados gerais (População, Área, Idioma, Moeda, Continente ...)
 - Mostrar Estados/Províncias
 - Exibir os comentários feitos acerca do pais

 
### História 3: Integração com Mapas
```txt
Como usuário, 
Eu quero visualizar a localização de um país no mapa 
Para entender onde ele se encontra no mundo.
```
**Critérios de Aceitação**:
 - Quando o usuário seleciona um país, o mapa deve centralizar automaticamente na localização do país.
 - O mapa deve oferecer botões para aumentar e diminuir o zoom, além de suporte ao uso do scroll do mouse ou gestos de pinça.
 


### História 4: Personalização e Login
```txt
Como usuário, 
Eu quero criar uma conta
Para salvar minhas preferências e interações.
```
**Critérios de Aceitação**:
 - O sistema deve validar os campos, indicando erros como e-mail inválido.
 - Mensagens de erro claras devem ser exibidas para cada tipo de falha no formulário.
 - O cadastro da conta pode ter no máximo 2 telas.
 - Informações que devem ser solicitadas Nome, Nome do usuário, email e senha.
 - Possibilitar login por um serviço ex: Google.

### História 5: Países Favoritos

```txt
Como usuário, 
Eu quero salvar países como favoritos
Para acessá-los facilmente no futuro.
```
**Critérios de Aceitação**:
 - Fácil acesso do botão de adicionar/remover país dos favoritos.
 - O usuário deve ser capaz de acessar facilmente a sua lista de países favoritos a partir de uma seção dedicada no perfil ou no menu principal.
 -  A lista de favoritos deve exibir o nome e a bandeira de cada país.
 - Os países favoritos devem ser mantidos entre sessões do usuário, ou seja, o usuário deve encontrar seus favoritos salvos quando fizer login novamente.

### História 6: Comparação entre Países
```txt
Como usuário, 
Eu quero comparar dois países 
Para entender suas diferenças e semelhanças.
```
**Critérios de Aceitação**:
 - Exibir os dados lado a lado 
 - Trazer dados importantes na comparação (População, Área Territorial, Idioma, Moeda, Continente ou Região geográfica)
 -  Em caso de falha ao obter informações (ex: país inválido ou erro na API), o sistema deve fornecer uma mensagem de erro clara.

### História 7: Comentarios e Curiosidades
```txt
Como usuário, 
Eu quero comentar sobre um país
Para compartilhar curiosidade ou impressões com outros usuários.
```
**Critérios de Aceitação**:
 - Sistema de comentários por país.
 - Deve permitir que os usuários insiram texto simples e utilizem formatação básica (como negrito, itálico, listas, etc.).
 - Os Comentários devem ser exibidos em ordem cronológica.
 - Comentários com mais de 500 caracteres devem ser truncados ou exibidos com uma opção de "mostrar mais".
 - Limite máximo de 3000 caracteres em 1 comentário.

## Requisitos não Funcionais

### Interface Intuitiva e Responsiva (Usuabilidade)
**Critérios de aceitação**:
- Design responsivo (deve se adaptar tanto a ambientes desktops quanto móveis).
- Navegação rápida entre abas e funcionalidades.
- Erros devem ser exibidos em linguagem clara, explicando o problema e sugerindo soluções.

### Segurança

**Critérios de aceitação**:
- Criptografia de senhas durante o processo de login e cadastro.
- Ocultar a senha na digitação
- Não permitir senhas menores que 8 caracteres.
- Autenticação segura com APIs de login social (Google/Facebook).
- Elementos mais importantes devem ter maior destaque visual (ex: botões principais em cores contrastantes).

### Compatibilidade
**Critérios de aceitação**:
- A aplicação deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge).
- O design responsivo deve garantir uma boa experiência tanto em dispositivos móveis quanto em desktops.

