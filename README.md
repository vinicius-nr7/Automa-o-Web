# Automação de Testes com CodeceptJS

Projeto de automação web usando CodeceptJS, Playwright e WebdriverIO para testar a aplicação de demonstração Demoblaze.

## Visão Geral

Este repositório contém uma suíte profissional de testes automatizados em JavaScript para validar os principais fluxos da aplicação Demoblaze: navegação, cadastro, login, carrinho e checkout.
O framework principal é o CodeceptJS, com Playwright configurado para abrir o navegador Chromium em modo visível.

## Como Executar os Testes

1. Abra o terminal na raiz do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Execute a suíte completa:

```bash
npm test
```

4. Execute casos específicos quando desejar validar apenas um fluxo:

```bash
npm run test:navegacao
npm run test:cadastro
npm run test:login
npm run test:carrinho
npm run test:checkout
```

5. O CodeceptJS iniciará o Chromium e exibirá cada passo no terminal, usando o modo `--steps` para maior transparência.

### Recomendações de execução

- Use `npm test` para validar a suíte completa antes de uma apresentação ou pull request.
- Use os comandos específicos para depurar ou demonstrar um fluxo isolado.
- Atualize `codecept.conf.js` se precisar alterar a URL base ou o navegador.

## Geração da Documentação Allure

Após a execução dos testes, gere o relatório Allure a partir dos resultados brutos:

```bash
npx allure generate allure-results --clean -o allure-report
```

Em seguida, abra a documentação gerada:

```bash
npx allure open allure-report
```

A documentação do Allure será exibida no navegador e apresenta métricas, gráficos, histórico, etapas e evidências de cada execução.

## Sobre as Imagens

As imagens abaixo são capturas da documentação do Allure gerada a partir da execução dos testes. Elas mostram a apresentação visual dos relatórios, incluindo resultados e evidências de validação.

| Imagem 1 | Imagem 2 | Imagem 3 | Imagem 4 |
| --- | --- | --- | --- |
| ![Captura 1](images-docs/Captura%20de%20tela%202026-05-27%20141022.jpg) | ![Captura 2](images-docs/Captura%20de%20tela%202026-05-27%20141323.jpg) | ![Captura 3](images-docs/Captura%20de%20tela%202026-05-27%20141431.jpg) | ![Captura 4](images-docs/Captura%20de%20tela%202026-05-27%20141506.jpg) |

| Imagem 5 | Imagem 6 | Imagem 7 | Imagem 8 |
| --- | --- | --- | --- |
| ![Captura 5](images-docs/Captura%20de%20tela%202026-05-27%20141618.jpg) | ![Captura 6](images-docs/Captura%20de%20tela%202026-05-27%20141643.jpg) | ![Captura 7](images-docs/Captura%20de%20tela%202026-05-27%20141721.jpg) | ![Captura 8](images-docs/Captura%20de%20tela%202026-05-27%20141744.jpg) |

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

> Para gerar o relatório Allure manualmente, use o binário local do projeto:

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
