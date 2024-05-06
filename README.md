# PayMee

<a alt="Paymee logo" href="https://www.paymee.com.br" target="_blank" rel="noreferrer"><img src="https://www.paymee.com.br/wp-content/uploads/2022/03/Negativo-1-1.png" width="160" height="70"></a>

# Dashboard Frontend Paymee

Este é um projeto de dashboard frontend desenvolvido com as tecnologias:

- NX
- Material-UI
- Redux Toolkit
- React
- TypeScript

## Introdução

Este dashboard foi criado para fornecer uma interface de usuário intuitiva e atraente para visualização e interação com dados. Ele é construído utilizando o NX para gerenciamento de módulos, o Material-UI como framework de design, o Redux Toolkit para gerenciamento de estado previsível e o React como biblioteca principal para criação de interfaces de usuário.

## Pré-requisitos

É necessário ter o NodeJS 18+, NPM 8+ (incluso no NodeJs) e git instalado. Para verificar, use no terminal de sua preferência os comandos:

`node --version && npm --version && git --version`

## Instalação

1. Clone este repositório :
   `git@github.com:Matheus-Smoking/PayMee-dashboard.git`

2. Instale as dependências:
   `npm i`

## Como executar

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento local executando o seguinte comando:
`npm start`

Isso iniciará o aplicativo em modo de desenvolvimento. Você poderá acessá-lo em [http://localhost:3000](http://localhost:3000) no seu navegador.

### Login

Para efetuar o login utilize:

Email: admin@paymee.com
Senha: paymee

## Estrutura do Projeto

O projeto está estruturado utilizando o padrão NX. Aqui está a estrutura de diretórios principal:

/src/app/components — Todos os componentes com suas responsabilidades de UI/UX;
/src/app/config — contém os arquivos configuraveis;
/src/app/pages — Todas as páginas da aplicação com suas responsabilidades de UI/UX;
/src/app/store — Estrutura de estado da aplicação;
/src/features — Funcionalidades da aplicação, destacando suas interações e o estado correspondente das features propostas para o funcionamento do sistema.

### Features

As features são a logica de controle da aplicação e são dividas em:

- auth: Usuário e o seu acesso ao sistema;
- conversation: Painel de conversão do dashboard;
- dashboard: Demais informações do dashboard;
- operation: Tabela de operaçoes do dashboard;
- pendencies: Pendências do dashboard.

<!-- ## Testando a aplicação

Para testar a aplicação, iremos realizar um teste funcional que consiste em simular de ponta a ponta a interação de um cliente com o sistema. Para isso, utilizamos uma tecnologia chamada Cypress. -->

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
