describe('Login', () => {

    it('Login Elegível com sucesso', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/').get('#content_width > .content_component')
        cy.get('#cpf').type('75328503155')
        cy.get('#personal-email').type('eleumaut@yopmail.com')
        cy.get('#celular').type('11995422710')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('#nav-options > :nth-child(7)',{timeout: 8000}).should('have.text', 'Olá Elegivel, vamos viajar? ')
        cy.get('fc-planos-exibir-contas').should('be.visible')

    })

})

describe('Login Elegível premiado', () => {

    it('Login Elegível premiado com sucesso', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/').get('#content_width > .content_component')
        cy.get('#cpf').type('45646564816')
        cy.get('#personal-email').type('elegivelpremiado@yopmail.com')
        cy.get('#celular').type('11995523720')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('app-parabens-premiacao.ng-star-inserted > :nth-child(1) > .content_width', {timeout: 8000}).should('be.visible', 'Parabéns! Você ganhou um presentão da sua empresa.')
        cy.get('.boxMessage > .fc-btn').click()
        cy.get('fc-planos-exibir-contas').should('be.visible')
        cy.get('.textMessage > #btn-clean-search').should('be.visible', 'Abrir conta gratuita')

    })

})

describe('Tentativa Login CPF invalido', () => {

    it('Login CPF invalido', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/').get('#content_width > .content_component')
        cy.get('#cpf').type('555.555.5555-55')
        cy.get('#personal-email').type('cpfinvalido@yopmail.com')
        cy.get('#celular').type('11994056079')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('.error-message').contains('Informe um número de CPF válido')
        cy.get('#cpf').clear('555.555.555-55').type('225.715')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('.error-message').should('be.visible', 'Informe um número de CPF válido')       

    })
})

describe('Tentativa de Login Assinante', () => {

    it('Login Assinante', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/').get('#content_width > .content_component')
        cy.get('#cpf').type('735.314.561-72')
        cy.get('#personal-email').type('assinanteautstg@yopmail.com')
        cy.get('#celular').type('11992704077')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('.error-message').should('be.visible', 'Esse CPF já possui um plano. Faça login em www.ferias.co para reservar sua hospedagem. Caso não tenha um plano, por favor confira o número de CPF :)')
       

    })
})

describe('Login Elegível e-mail invalido', () => {

    it('Login elegível e-mail invalido', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/').get('#content_width > .content_component')
        cy.get('#cpf').type('445.506.078-23')
        cy.get('#personal-email').type('emailinvalido')
        cy.get('#celular').type('11994056078')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('.error-message').should('be.visible', 'Informe um endereço de e-mail válido.')
        cy.get('#personal-email').type('@yopmail')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('.error-message').should('be.visible', 'Informe um endereço de e-mail válido.')
        cy.get('#personal-email').type('.c')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('.error-message').should('be.visible', 'Informe um endereço de e-mail válido.')
       

    })
})


describe('Login Elegível celular invalido', () => {

    it('Login elegível celular invalido', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/').get('#content_width > .content_component')
        cy.get('#cpf').type('445.506.078-23')
        cy.get('#personal-email').type('celularinvalido@yopmail.com')
        cy.get('#celular').type('11555555555')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('.error-message').should('be.visible', 'Informe um número de celular válido.')
        cy.get('#celular').clear('11555555555').type('1199456')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('.error-message').should('be.visible', 'Informe um número de celular válido.')
       
    })
})

describe('Tentativa de Login sem preencher todos os campos', () => {

    it('Tentativa de Login sem preencher todos os campos', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/').get('#content_width > .content_component')
        cy.get('#cpf').type('445.506.078-23')
        cy.get('#personal-email').type('sempreencher@yopmail.com')
        cy.get('#celular')
        cy.get('app-identificacao-usuario > .fc-btn')
        cy.get('#celular').type('11994073434')
        cy.get('#cpf').clear('445.506.078-23')
        cy.get('app-identificacao-usuario > .fc-btn')
        cy.get('#personal-email').clear('sempreencher@yopmail.com')
        cy.get('#cpf').type('445.506.078-23')
        cy.get('app-identificacao-usuario > .fc-btn')

    
    })
})