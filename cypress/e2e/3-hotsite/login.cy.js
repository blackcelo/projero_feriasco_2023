describe('Login', () => {

    it('Login Elegível com sucesso', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/')
        .get('#content_width > .content_component')
        cy.get('#cpf')
        .type('445.506.078-23')
        cy.get('#personal-email')
        .type('flunamc@yopmail.com')
        cy.get('#celular')
        .type('11994056080')
        cy.get('app-identificacao-usuario > .fc-btn')
        .click()
        cy.get('fc-planos-exibir-contas')
    })

})

describe('Login Elegível premiado', () => {

    it('Login Elegível premiado com sucesso', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/')
        .get('#content_width > .content_component')
        cy.get('#cpf')
        .type('456.678.907-12')
        cy.get('#personal-email')
        .type('breidamc@yopmail.com')
        cy.get('#celular')
        .type('11994056079')
        cy.get('app-identificacao-usuario > .fc-btn')
        .click()
        cy.get('app-parabens-premiacao.ng-star-inserted > :nth-child(1) > .content_width')
        cy.get('.boxMessage > .fc-btn')
        .click()
        cy.get('fc-planos-exibir-contas')
        cy.get('.textMessage > #btn-clean-search')

    })

})

describe('Tentativa Login CPF invalido', () => {

    it('Login CPF invalido', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/')
        .get('#content_width > .content_component')
        cy.get('#cpf')
        .type('555.555.555-55')
        cy.get('#personal-email')
        .type('cpfinvalido@yopmail.com')
        cy.get('#celular')
        .type('11994056079')
        cy.get('app-identificacao-usuario > .fc-btn')
        .click()
        cy.get('.error-message')
        .contains('Ops, não encontramos esse CPF na nossa base. Entre em contato com o RH da sua empresa')
       

    })
})

describe('Tentativa de Login Assinante', () => {

    it('Login Assinante', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/')
        .get('#content_width > .content_component')
        cy.get('#cpf')
        .type('479.052.883-90')
        cy.get('#personal-email')
        .type('assinantemc@yopmail.com')
        cy.get('#celular')
        .type('11994056078')
        cy.get('app-identificacao-usuario > .fc-btn')
        .click()
        cy.get('.error-message')
        .contains('Esse CPF já possui um plano. Faça login em www.ferias.co para reservar sua hospedagem. Caso não tenha um plano, por favor confira o número de CPF :)')
       

    })
})

describe('Login Elegível e-mail invalido', () => {

    it('Login elegível e-mail invalido', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/')
        .get('#content_width > .content_component')
        cy.get('#cpf')
        .type('445.506.078-23')
        cy.get('#personal-email')
        .type('flunamc')
        cy.get('#celular')
        .type('11994056078')
        cy.get('app-identificacao-usuario > .fc-btn')
        .click()
        cy.get('.error-message')
        .contains('Informe um endereço de e-mail válido.')
       

    })
})


describe('Login Elegível celular invalido', () => {

    it('Login elegível celular invalido', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/')
        .get('#content_width > .content_component')
        cy.get('#cpf')
        .type('445.506.078-23')
        cy.get('#personal-email')
        .type('flunamc@yopmail.com')
        cy.get('#celular')
        .type('11555555559')
        cy.get('app-identificacao-usuario > .fc-btn')
        .click()
        cy.get('.error-message')
        .contains('Informe um número de celular válido.')
       

    })
})

describe('Tentativa de Login sem preencher todos os campos', () => {

    it('Tentativa de Login sem preencher todos os campos', () => {
        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/')
        .get('#content_width > .content_component')
        cy.get('#cpf')
        .type('445.506.078-23')
        cy.get('#personal-email')
        .type('flunamc@yopmail.com')
        cy.get('#celular')
        cy.get('app-identificacao-usuario > .fc-btn')
    
    })
})