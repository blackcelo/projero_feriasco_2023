describe('Login', () => {

    it('Login Elegível Desconto em folha com sucesso plano padrão 4 diárias', () => {

        cy.visit('http://webapp-hotsite-staging.platform.ferias.in/#/').get('#content_width > .content_component')
        cy.get('#cpf').type('51666336017')
        cy.get('#personal-email').type('assinanteauttres@yopmail.com')
        cy.get('#celular').type('11993204343')
        cy.get('app-identificacao-usuario > .fc-btn').click()
        cy.get('#nav-options > :nth-child(7)',{timeout: 8000}).should('have.text', 'Olá Assinante, vamos viajar? ')
        cy.get('fc-planos-exibir-contas').should('be.visible')
        cy.get(':nth-child(1) > .box > .box_plus > .box_card').click().contains('Padrão')
        //cy.get(':nth-child(1) > .box > .box_plus > .box_card').click()
        cy.get(':nth-child(1) > .box > .box_plus > .box_card > .box_content > #btn-clean-search').click()
        cy.get(':nth-child(2) > .box').should('be.visible').click()
        cy.get('#personal-email-confirm').click().type('assinanteauttres@yopmail.com')
        cy.get('#btn-next').click()
        cy.get('form.ng-untouched > .box').should('be.visible')
        cy.get('#cep').click().type('04349110')
        cy.get('#Street').should('be.visible','Rua das Aningas')
        cy.get('#number').click().type('155')
        cy.get('#btn-next').click()
        cy.get('.col-lg-9 > .box').should('be.visible','Cadastre seu cartão de crédito')
        cy.get('form.ng-untouched > .form-field > :nth-child(2)').click({force : true})
        cy.get('#btn-next').click()
        cy.get('form.ng-pristine > .box').should('be.visible', 'Defina sua senha')
        cy.get('#password').click().type('Senha123')
        cy.get('#password-confirm').click().type('Senha123')
        cy.get(':nth-child(4) > app-term > .ng-star-inserted > .term-content').should('be.visible', 'Termos de uso')
        cy.get('.form-field > :nth-child(5)').should('be.visible', 'Li e concordo com os termos de uso.')
        cy.get(':nth-child(5) > .fc-checkbox-field > .checkmark').click()
        cy.get('.form-field > :nth-child(7)').should('be.visible','Termo de adesão e autorização de débito em folha de pagamento')
        cy.get(':nth-child(7) > .checkbox_field > .fc-checkbox-field > .checkmark').click()
        cy.get('#btn-sign-plan').click()
        cy.get('.col-message').should('be.visible', 'Sucesso')



    })

})