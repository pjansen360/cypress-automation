# cypress-automation

Cypress Automation Framework

Projeto de automação de testes end-to-end (E2E) utilizando Cypress, com foco em boas práticas e organização.

📌 Objetivo

Este projeto foi desenvolvido com o objetivo de demonstrar:

Criação de um framework de automação com Cypress
Aplicação de boas práticas (Page Object Model, comandos customizados)
Simulação de cenários reais de usuário

🧰 Tecnologias utilizadas
JavaScript (ES6+)
Cypress
Node.js
Mochawesome

📁 Estrutura do projeto
cypress/
├── e2e/            # Casos de teste
├── fixtures/       # Dados mockados
├── support/        # Commands e configurações globais
├── pages/          # Page Objects (se aplicável)

⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js

▶️ Como executar o projeto
1. Clonar o repositório
git clone https://github.com/pjansen360/cypress-automation.git
cd cypress-automation
2. Instalar dependências
npm install

3. Executar os testes

Modo interativo:
npx cypress open

Modo headless:
npx cypress run

🧠 Boas práticas aplicadas
Uso de Page Object Model (POM)
Separação de responsabilidades
Reutilização de código com custom commands
Evita uso de waits fixos (cy.wait)
Uso de seletores mais estáveis

📸 Evidências

O Cypress gera automaticamente:

Screenshots em caso de falha
Vídeos das execuções

Backlock:
Implementar Page Object Model (POM)
Integração com API (cy.request)
Pipeline CI/CD completo
Testes cross-browser
Testes de performance básicos

📌 Observações

Este projeto tem caráter demonstrativo, mas segue práticas utilizadas em ambientes profissionais.