Feature('Carrinho Demo Blaze');

Scenario('adicionar produto ao carrinho', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement("//a[text()='Samsung galaxy s6']", 10);
  I.click("//a[text()='Samsung galaxy s6']");
  I.waitForElement("//a[text()='Add to cart']", 10);
  I.click("//a[text()='Add to cart']");
  I.acceptPopup();
  I.click("//a[text()='Cart']");
  I.waitForElement("//td[contains(text(),'Samsung galaxy s6')]", 10);
  I.see('Samsung galaxy s6');
  console.log('🛒 Produto adicionado ao carrinho com sucesso!');
});