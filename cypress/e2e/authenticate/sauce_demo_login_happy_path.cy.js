import Users from '../../fixtures/users.json'
import InventoryPage from '../../page_object/inventory_page'
import LoginPage from '../../page_object/login_page'

describe('Sauce_demo Login HP', function () {
	const USER_HAPPY_PATH = Users.happyPathUser

	it('Login Happy Path C7', function () {
		cy.log('WHEN a user opens the Login page')
		LoginPage.open()
		cy.log('AND the user logins with the incorrect data')
		LoginPage.login(USER_HAPPY_PATH)
		cy.log('THEN the Inventory Page is opened')
		InventoryPage.isInventoryPage()
	})
})
