describe('Login Assinante com sucesso', () => {


    it('Login assinante sucesso', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login').get('.box-container')
        cy.get('#cpf').should("have.value", "").type('733.544.736-49')
        cy.get('#password').should("have.value", "").type('Senha123')
        cy.get('#btn_save').click()
        cy.get('#id-como-funciona-nav').contains('Olá Assinante, vamos viajar?')
        cy.get('.title-page').should('be.visible','Para onde quer ir?')

    })

})

describe('Login Elegível com erro', () => {


    it('Login elegível com erro', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login').get('.box-container')
        cy.get('#cpf').type('741.066.866-00')
        cy.get('#password').type('Senha123')
        cy.get('#btn_save').click()
        cy.get('.error-message').should('be.visible', 'CPF ou senha inválidos.')

    })

})

describe('Login CPF inválido', () => {


    it('Login CPF inválido', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login').get('.box-container')
        cy.get('#cpf').type('333.333.333-33')
        cy.get('#password').type('Senha123')
        cy.get('#btn_save').click()
        cy.get('.error-message').should('be.visible', 'CPF digitado é inválido')

    })

})

describe('Login Senha inválida', () => {


    it('Login Senha inválida', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login').get('.box-container')
        cy.get('#cpf').type('525.669.518-53')
        cy.get('#password').type('senha_invalida')
        cy.get('#btn_save').click()
        cy.get('.error-message').should('be.visible' ,'CPF ou senha inválidos.')

    })

})

describe('Login sem preencher Senha', () => {


    it('Login sem preencher Senha', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login').get('.box-container')
        cy.get('#cpf').type('525.669.518-53')
        cy.get('#password')
        cy.get('#btn_save').click()
        cy.get('.error-message').should('be.visible' ,'Digite a senha')

    })

})

describe('Login sem preencher CPF', () => {


    it('Login sem preencher CPF', () => {
        cy.visit('http://webapp-colaborador-staging.platform.ferias.in/#/login').get('.box-container')
        cy.get('#password').type('Senha123')
        cy.get('#btn_save').click()
        cy.get('.error-message').should('be.visible' ,'Digite o CPF')

    })

})