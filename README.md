automacao-codeceptjs
Repositório: [https://github.com/vinicius-nr7/Automacao-Codeceptjs.git]

Automação de testes web para o site https://www.demoblaze.com utilizando CodeceptJS e Playwright.

Estrutura do projeto
codecept.conf.js — Configuração principal do CodeceptJS.

package.json — Dependências e scripts de execução do projeto.

Testes/ — Arquivos de testes (Cadastro, Login, Carrinho, Checkout, Navegação).

Testes/steps_file.js — Definições de passos customizados.

output/ — Capturas de tela de falhas.

allure-results/ — Dados brutos das execuções (gerados automaticamente).

allure-report/ — Relatórios visuais gerados.

Pré-requisitos
Node.js instalado.

Google Chrome instalado.

Terminal aberto na pasta raiz do projeto.

Instalação
No terminal, execute:

Bash
npm install
Isso instalará o codeceptjs, playwright, @codeceptjs/allure-legacy e allure-commandline.

Como rodar os testes
Rodar todos os testes
Bash
npm run test
Rodar testes específicos por suíte
O projeto possui scripts configurados para facilitar a execução:

npm run test:navegacao

npm run test:cadastro

npm run test:login

npm run test:carrinho

npm run test:checkout

Rodar cenário específico (Filtro por nome)
Você pode usar o --grep para buscar um cenário específico:

Bash
npx codeceptjs run --grep "NOME_DO_CENARIO" --steps
Documentação Visual com Allure Report
O projeto utiliza o Allure Report para gerar dashboards detalhados.

1. Executar testes e gerar dados
Ao rodar seus testes normalmente, o plugin criará os arquivos de log na pasta allure-results:

Bash
npx codeceptjs run --steps
2. Gerar o relatório visual
Transforme os resultados em um painel interativo navegável:

Bash
npx allure-commandline generate allure-results -o allure-report --clean
3. Abrir o relatório
Visualize o dashboard completo no seu navegador padrão:

Bash
npx allure-commandline open allure-report
Observações
O navegador configurado é o chromium.

O tempo de espera inteligente (smartWait) está configurado para 5000ms.

Sempre que houver falha, o sistema gera automaticamente uma captura de tela na pasta output.

Como enviar para o GitHub:
Após salvar este conteúdo no README.md, execute no seu terminal:

Bash
git add README.md
git commit -m "docs: atualização completa da documentação e guia do Allure Report"
git push origin main