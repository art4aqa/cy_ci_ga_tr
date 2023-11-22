class InventoryPage {
	isInventoryPage() {
		return cy.url().should('contain', 'inventory')
	}
}

export default new InventoryPage()
