/// <reference types="cypress" />

// [Descrição do conjunto de testes] Este describe agrupa os testes relacionados à validação de cupons de desconto na Loja Integrada
describe('Validação de Cupom de Desconto na Loja Integrada', () => {
    // Caminho relativo do produto usado em todos os testes
    const produtoPath = '/produtooolalal'; // Caminho relativo ao produto

    // Antes de cada teste, executa ações comuns como visitar a página e adicionar o produto ao carrinho
    beforeEach(() => {
        // Acessa a página do produto utilizando a baseUrl configurada
        cy.visit(produtoPath);

        // Seleciona o produto na listagem e garante que está visível antes de interagir
        cy.get(':nth-child(2) > .listagem-item > .info-produto > .nome-produto')
          .should('be.visible').click();

        // Clica no botão de "Comprar" para adicionar o produto ao carrinho
        cy.get('.comprar > .botao').should('be.visible').click();
    });

    // Caso de teste para validar cupons de desconto válidos
    it.only('Deve aplicar cupons válidos', () => {
        // Carrega o arquivo de fixture 'cupons' para obter os dados dos cupons válidos
        cy.fixture('cupons').then((cupons) => {
            // Itera sobre cada cupom válido
            cupons.validos.forEach((cupom) => {
                // Aplica o cupom utilizando o comando customizado
                cy.aplicarCupom(cupom);

                // Verifica a exibição de mensagens de sucesso relacionadas ao cupom aplicado
                cy.get('.cupom-sucesso').should('contain', 'Cupom de desconto:')
                    .and('contain', '(Alguns cupons não são cumulativos com promoções.)');
            });
        });
    });

    // Caso de teste para validar cupons de desconto inválidos
    it.only('Deve exibir mensagem para cupons inválidos', () => {
        // Carrega o arquivo de fixture 'cupons' para obter os dados dos cupons inválidos
        cy.fixture('cupons').then((cupons) => {
            // Itera sobre cada cupom inválido
            cupons.invalidos.forEach((cupom) => {
                // Aplica o cupom utilizando o comando customizado
                cy.aplicarCupom(cupom);

                // Verifica se a mensagem de erro correta é exibida
                cy.get('.alert').should('contain', 'Cupom não encontrado');
            });
        });
    });

    // Caso de teste para validar cupons que influenciam no frete
    it.only('Deve validar cupons de desconto com frete', () => {
        // Carrega o arquivo de fixture 'cupons' para obter os dados dos cupons relacionados ao frete
        cy.fixture('cupons').then((cupons) => {
            // Itera sobre cada cupom relacionado ao frete
            cupons.frete.forEach((cupom) => {
                // Aplica o cupom utilizando o comando customizado
                cy.aplicarCupom(cupom);

                // Verifica a exibição de mensagens de sucesso relacionadas ao cupom aplicado
                cy.get('.cupom-valor').should('contain', 'Cupom ativo')
                    .and('contain', '(frete não incluso)');
            });
        });
    });
});