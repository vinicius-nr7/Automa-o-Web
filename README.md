# Automação de Testes com CodeceptJS

Projeto de automação web usando CodeceptJS, Playwright e WebdriverIO para testar a aplicação de demonstração Demoblaze.

## Visão Geral

Este repositório contém testes automatizados em JavaScript para validar fluxos de navegação, cadastro, login, carrinho e checkout.
O framework principal é o CodeceptJS, com Playwright configurado para abrir o navegador Chromium em modo visível.

## Imagens em Destaque

Abaixo estão algumas capturas de tela geradas pelo projeto, exibidas diretamente no GitHub como destaque visual do fluxo de testes:

![Execução de teste 1](images-docs/Captura%20de%20tela%202026-05-27%20141022.jpg)

![Execução de teste 2](images-docs/Captura%20de%20tela%202026-05-27%20141323.jpg)

![Execução de teste 3](images-docs/Captura%20de%20tela%202026-05-27%20141431.jpg)

![Execução de teste 4](images-docs/Captura%20de%20tela%202026-05-27%20141506.jpg)

## Conteúdo do Projeto

- `codecept.conf.js` - Configuração do CodeceptJS, incluindo URL base, browser, timeout e plugins.
- `package.json` - Dependências e scripts de execução.
- `Testes/` - Pasta com os arquivos de teste e o arquivo de passos (`steps_file.js`).
- `output/` - Diretório padrão de logs e screenshots gerados pelos testes.
- `allure-results/` - Resultados de teste para gerar relatórios Allure.
- `allure-report/` - Relatório Allure gerado (artefatos estáticos).
- `images-docs/` - Imagens de documentação usadas no projeto e no relatório.

## Pré-requisitos

- Node.js instalado (recomenda-se versão 18 ou superior).
- npm disponível no ambiente.
- Conexão com a internet para acessar `https://www.demoblaze.com`.

## Instalação

1. Abra o terminal na raiz do projeto.
2. Instale as dependências:

```bash
npm install
```

## Como Executar

1. Abra o terminal na raiz do projeto.
2. Certifique-se de que as dependências foram instaladas:

```bash
npm install
```

3. Execute todos os testes de automação:

```bash
npm test
```

4. Para executar um teste específico, use um dos comandos abaixo:

```bash
npm run test:navegacao
npm run test:cadastro
npm run test:login
npm run test:carrinho
npm run test:checkout
```

5. O CodeceptJS iniciará o navegador Chromium e executará os passos definidos nos testes.
6. Depois da execução, verifique:
   - `output/` para logs, screenshots e evidências de falha;
   - `allure-results/` para dados brutos do relatório Allure.

### Execução recomendada

- Use `npm test` para rodar a suíte completa.
- Use comandos específicos quando quiser validar apenas um fluxo de teste.
- Mantenha `codecept.conf.js` atualizado se precisar alterar a URL base ou o navegador.

Os testes são executados com o modo `--steps`, exibindo cada passo no terminal.

## Configuração de Navegador

O projeto usa Playwright com as seguintes configurações em `codecept.conf.js`:

- URL base: `https://www.demoblaze.com`
- Navegador: `chromium`
- `show: true` (o navegador é exibido durante a execução)
- Tamanho da janela: `1200x900`

## Relatórios

- `output/` contém logs e evidências como screenshots de falha.
- `allure-results/` contém o resultado bruto para gerar o relatório Allure.
- `allure-report/` pode ser usado para visualizar o relatório já gerado.
- `images-docs/` contém imagens de apoio à documentação, úteis para relatórios e referência visual.

> Para gerar o relatório Allure manualmente, instale o CLI do Allure globalmente ou use o binário local conforme disponível.

### Gerar relatório Allure

Se você instalou o Allure CLI globalmente:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

Se preferir usar o binário local do projeto:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Estrutura de Testes

- `navegacao_test.js` - Valida a navegação geral do site.
- `cadastro_test.js` - Testa o fluxo de cadastro/registro.
- `login_test.js` - Testa o fluxo de login.
- `carrinho_test.js` - Testa a adição de produtos ao carrinho.
- `checkout_test.js` - Testa o processo de finalização da compra.
- `steps_file.js` - Contém os passos personalizados do CodeceptJS usados pelos testes.

## Observações

- Atualize `codecept.conf.js` caso deseje mudar o navegador ou a URL base.
- Se ocorrerem falhas, verifique `output/` para screenshots e logs.
- O projeto já inclui integração com Allure para rastreamento de resultados de teste.
