class LoginPage {
	get userNameInputFiled() {
		return cy.get('#user-name').should('be.visible')
	}

	get userPasswordInputFiled() {
		return cy.get('#password').should('be.visible')
	}

	get loginButton() {
		return cy.get('#login-button').should('be.visible')
	}

	get errorMessage() {
		return cy.get('h3[data-test="error"').should('be.visible')
	}

	open() {
		cy.visit('/')
	}

	login(user) {
		this.userNameInputFiled.clear().type(user.name)
		this.userPasswordInputFiled.clear().type(user.password)
		this.loginButton.click()
	}
}

export default new LoginPage()
