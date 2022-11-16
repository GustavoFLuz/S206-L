# S206 - Qualidade de Software
## Trabalho Prático 1

## Instalação:
- Faça a instalação das dependências via linha de comando. Abra o terminal e digite

```
npm install
```

### Para rodar os testes:
```
./testes/node_modules/.bin/cypress open
```

### Para gerar um relatório com **mochawesome** basta executar pelo terminal:
```
1.
    npm i --save-dev cypress-mochawesome-reporter

2.
    ./testes/node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```