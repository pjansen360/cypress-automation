# cypress-automation

Projeto de estudo e demonstração de automação de testes com Cypress, cobrindo UI (E2E), API e integração contínua.

## 📌 Objetivo

Demonstrar, em um projeto público e pequeno:

- Organização de testes com Page Object Model
- Comandos customizados reutilizáveis
- Testes de API diretos (`cy.request`)
- Separação de baterias de teste (smoke / regression) por tags, com `@cypress/grep`
- Pipeline de CI/CD rodando as baterias automaticamente a cada push/PR

Não é um sistema em produção — é um projeto de portfólio, construído sobre aplicações públicas de demonstração (SauceDemo e a API pública reqres.in).

## 🧰 Tecnologias utilizadas

- JavaScript (ES6+)
- Cypress
- Node.js
- cypress-mochawesome-reporter
- @cypress/grep
- GitHub Actions

## 📁 Estrutura do projeto

```
cypress/
├── e2e/
│   ├── ui/          # Testes de interface (login)
│   └── api/         # Testes de API via cy.request
├── fixtures/         # Dados mockados
├── pages/            # Page Objects
└── support/          # Comandos customizados e configuração global
.github/workflows/     # Pipeline de CI/CD
```

## ⚙️ Pré-requisitos

- Node.js

## ▶️ Como executar o projeto

1. Clonar o repositório
   ```
   git clone https://github.com/pjansen360/cypress-automation.git
   cd cypress-automation
   npm install
   ```

2. Executar os testes

   Modo interativo:
   ```
   npx cypress open
   ```

   Modo headless, bateria completa:
   ```
   npm test
   ```

   Só a bateria de smoke:
   ```
   npm run test:smoke
   ```

   Só a bateria de regressão:
   ```
   npm run test:regression
   ```

## 🏷️ Baterias de teste (smoke / regression)

Os testes são marcados com tags usando `@cypress/grep`, o que permite rodar subconjuntos específicos sem precisar separar os testes em pastas diferentes:

```js
it('logs in successfully with valid credentials', { tags: ['@smoke', '@regression'] }, () => {
  ...
});
```

Rodando manualmente com uma tag específica:
```
npx cypress run --env grepTags=@smoke
npx cypress run --env grepTags=@regression
```

No pipeline de CI, a bateria de **smoke** roda em todo push/PR; a bateria de **regression** roda em seguida, como um segundo job.

## 🧠 Boas práticas aplicadas

- Page Object Model (`cypress/pages/LoginPage.js`), separando seletores e ações da lógica de teste
- Comandos customizados (`cy.login`, `cy.apiGetUser`) para reduzir duplicação
- Casos de sucesso e de falha (login válido, senha incorreta, usuário bloqueado)
- Testes de API isolados com `cy.request`, validando status code e schema
- Baterias de teste organizadas por tags (smoke / regression)
- Pipeline de CI/CD no GitHub Actions, com smoke e regression como jobs separados, publicando o relatório como artefato

## 📸 Evidências

O Cypress gera automaticamente screenshots e vídeos das execuções, além do relatório HTML (cypress-mochawesome-reporter), publicado como artefato em cada execução do pipeline.

## 🔜 Próximos passos

- Testes de interceptação de rede (`cy.intercept`)
- Testes cross-browser
- Testes de performance básicos
- Expandir a cobertura de API para outros recursos
