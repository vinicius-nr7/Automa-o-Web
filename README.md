# automacao-codeceptjs

Repositório: `https://github.com/vinicius-nr7/Automa-o-Web.git`

Automação de testes web usando CodeceptJS e WebDriverIO para o site `https://www.demoblaze.com`.

## Estrutura do projeto

- `codecept.conf.js` — configuração principal do CodeceptJS
- `package.json` — dependências do projeto
- `Testes/` — arquivos de testes e steps
- `Testes/steps_file.js` — objeto `I` e passos reutilizáveis
- `output/` — relatórios e screenshots gerados

## Pré-requisitos

1. Node.js instalado
2. Google Chrome instalado
3. Terminal aberto na pasta raiz do projeto
4. Conexão com internet (o site de teste é online)

## Instalação

No terminal, execute:

```bash
npm install
```

Isso instala o `codeceptjs`, `webdriverio` e outras dependências.

## Como rodar todos os testes

No terminal, na raiz do projeto:

```bash
npx codeceptjs run --steps
```

Esse comando:
- carrega `codecept.conf.js`
- encontra os arquivos `./Testes/*_test.js`
- executa todos os cenários
- mostra cada passo no terminal

## Como rodar apenas um arquivo de teste

Para executar apenas `navegacao_test.js`:

```bash
npx codeceptjs run Testes/navegacao_test.js --steps
```

Substitua `navegacao_test.js` por outro arquivo de teste na pasta `Testes`.

## Como rodar apenas um cenário específico

Use `--grep` com o texto do nome do cenário. Exemplo:

```bash
npx codeceptjs run --grep "validar categorias Phones, Laptops e Monitors" --steps
```

Ou, se quiser limitar ao arquivo:

```bash
npx codeceptjs run Testes/navegacao_test.js --grep "validar categorias Phones, Laptops e Monitors" --steps
```

## Como rodar por partes

1. Rodar todos os testes: `npx codeceptjs run --steps`
2. Rodar um único arquivo: `npx codeceptjs run Testes/<arquivo> --steps`
3. Rodar um cenário específico: `npx codeceptjs run --grep "<texto do cenário>" --steps`

## Scripts npm disponíveis

O `package.json` já inclui os seguintes scripts:

```json
"scripts": {
  "test": "npx codeceptjs run --steps",
  "test:navegacao": "npx codeceptjs run Testes/navegacao_test.js --steps",
  "test:cadastro": "npx codeceptjs run Testes/cadastro_test.js --steps",
  "test:login": "npx codeceptjs run Testes/login_test.js --steps",
  "test:carrinho": "npx codeceptjs run Testes/carrinho_test.js --steps",
  "test:checkout": "npx codeceptjs run Testes/checkout_test.js --steps"
}
```

Depois, execute:
- `npm run test`
- `npm run test:navegacao`
- `npm run test:cadastro`
- `npm run test:login`
- `npm run test:carrinho`
- `npm run test:checkout`

## Observações

- O navegador configurado em `codecept.conf.js` é `chrome`
- Os relatórios/screenshots são gerados em `output/`
- Use `--grep` para filtrar cenários específicos
