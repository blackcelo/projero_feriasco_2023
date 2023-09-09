describe('Login Assinante com sucesso', () => {


    it('Login assinante sucesso', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login')
        .get('.box-container')
        cy.get('#cpf')
        .type('525.669.518-53')
        cy.get('#password')
        .type('Senha123')
        cy.get('#btn_save')
        .click()
        cy.get('#id-como-funciona-nav')
        .contains('Olá Agulorde, vamos viajar?')

    })

})

describe('Login Elegível com erro', () => {


    it('Login elegível com erro', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login')
        .get('.box-container')
        cy.get('#cpf')
        .type('741.066.866-00')
        cy.get('#password')
        .type('Senha123')
        cy.get('#btn_save')
        .click()
        cy.get('.error-message')
        .contains('CPF ou senha inválidos.')

    })

})

describe('Login CPF inválido', () => {


    it('Login CPF inválido', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login')
        .get('.box-container')
        cy.get('#cpf')
        .type('333.333.333-33')
        cy.get('#password')
        .type('Senha123')
        cy.get('#btn_save')
        .click()
        cy.get('.error-message')
        .contains('Digite o CPF')

    })

})

describe('Login Senha inválida', () => {


    it('Login Senha inválida', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login')
        .get('.box-container')
        cy.get('#cpf')
        .type('525.669.518-53')
        cy.get('#password')
        .type('senha_invalida')
        cy.get('#btn_save')
        .click()
        cy.get('.error-message')
        .contains('CPF ou senha inválidos.')

    })

})

describe('Login sem preencher Senha', () => {


    it('Login sem preencher Senha', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login')
        .get('.box-container')
        cy.get('#cpf')
        .type('525.669.518-53')
        cy.get('#password')
        cy.get('#btn_save')
        .click()
        cy.get('.error-message')
        .contains('Digite a senha')

    })

})

describe('Login sem preencher CPF', () => {


    it('Login sem preencher CPF', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login')
        .get('.box-container')
        cy.get('#password')
        .type('Senha123')
        cy.get('#btn_save')
        .click()
        cy.get('.error-message')
        .contains('Digite o CPF')

    })

})