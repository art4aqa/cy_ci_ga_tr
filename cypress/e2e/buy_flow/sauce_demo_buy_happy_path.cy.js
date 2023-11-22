import Users from '../../fixtures/users.json'
import LoginPage from '../../page_object/login_page'

describe('Sauce_demo Login SD', function () {
	const ERROR_MESSAGE = 'Epic sadface: Sorry, this user has been locked out.',
		USER_SAD_PATH = Users.sadPathUser

	it.skip('Login Sad Path C9', function () {
		cy.log('WHEN a user opens the Login page')
		LoginPage.open()
		cy.log('AND the user logins with the incorrect data')
		LoginPage.login(USER_SAD_PATH)
		cy.log('THEN the Error Message is displayed')
		LoginPage.errorMessage.should('contain.text', ERROR_MESSAGE)
	})
})
