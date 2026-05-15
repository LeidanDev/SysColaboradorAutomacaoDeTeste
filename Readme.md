## 📘 Projeto de Testes E2E (Cypress + Cucumber)

Este projeto contém testes automatizados End-to-End utilizando Cypress com suporte a BDD através do Cucumber.

## 🚀 Tecnologias

Cypress
Cucumber (BDD)
JavaScript
Node.js


## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js (>= 16)
npm ou yarn

## Verificar instalação:

node -v
npm -v

## 📥 Instalação do projeto

Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>

## Instale as dependências:

 npm install

## 🧪 Estrutura do projeto

cypress/
 ├── e2e/
 │    ├── features/        # arquivos .feature (Gherkin)
 │    ├── steps/           # step definitions
 │    └── pages/           # page objects
 │
 ├── fixtures/             # massas de dados
 ├── support/              # comandos e configs globais
cypress.config.js


## ▶️ Como rodar os testes

Abrir interface do Cypress

npx cypress open

Rodar testes em modo headless (CI)

npx cypress run

Rodar apenas uma feature específica

npx cypress run --spec "cypress/e2e/features/login.feature"

Rodar com interface e debug

npx cypress open