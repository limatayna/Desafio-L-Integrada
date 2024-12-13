 cypress-cucumber-structure
<h1>Estrutura de projeto utilizando Cypress </h1>

<b>Para configurar o Ambiente:</b>
<ol>
<li>Instalar Node.js. <a href="https://nodejs.org/en/">Download Node</a></li>
<li>Escolher uma IDE de JavaScript para programar, o VScode é uma boa escolha.</li>
<li>Crie uma pasta onde ficarão os arquivos do seu projeto. Abra o terminal do windows e acesse essa mesma pasta com o seguinte comando: <i>cd /your/project/path</i></li>
<li>Instalar o Cypress executando o seguinte comando na raíz da pasta do seu projeto: npm install cypress --save-dev</li>
<b>Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:</b>
<ul>
<li>Para executar os testes via terminal: <i>npx cypress run</i></li>
<li>Para executar os testes via navegador: <i>npx cypress open</i></li>
</ul>
<li>Estruturando o projeto</li>
<p>O Cypress pode ser utilizado sem Cucumber com uma estrutura simples explicada na documentação do mesmo. Neste tutorial veremos como estruturar utilizando a ferramenta de escrita de testes em Gherkin. Para isso, temos que conhecer as principais pastas e arquivos iniciais do projeto:</p>
<h3>Estrutura inicial.</h3>
<p>A pasta ‘fixtures’ e os arquivos ‘commands.js’, ‘index,js’ e package-lock.json’ oferecem configurações
avançadas que não serão abordadas neste tutorial.</p>
<ul>
<li>integration: nesta pasta colocamos os nossos arquivos com os cenários de teste escritos no formato Gherkin.</li>
<li>plugin/index.js: este arquivo é destinado para configuração de plugins.</li>
<li>support: dentro desta pasta colocamos os steps, os scripts e o mapeamento de elementos de nossos testes.</li>
<li>node_modules: aqui ficam os arquivos de funcionamento do Cypress . Normalmente não precisamos mexer nesta pasta.</li>
<li>cypress.json: neste arquivo podemos realizar configurações globais do nosso projeto. Ex.: criar variáveis globais, definir resolução do navegador, setar uma URL padrão, entre outros.</li>
</ul>