Feature('Checkout Demo Blaze');

Scenario('finalizar compra de produto', async ({ I }) => {
  I.amOnPage('/');
  I.click("//a[text()='Samsung galaxy s6']");
  I.waitForElement("//a[text()='Add to cart']", 10);
  I.click("//a[text()='Add to cart']");

  // ✅ Correção do popup
  I.seeInPopup('Product added');
  I.acceptPopup();

  I.click("//a[text()='Cart']");
  I.waitForElement("//td[contains(text(),'Samsung galaxy s6')]", 10);

  I.click("//button[text()='Place Order']");
  I.fillField('#name', 'Vinicius');
  I.fillField('#country', 'Brasil');
  I.fillField('#city', 'São Paulo');
  I.fillField('#card', '1234567890123456');
  I.fillField('#month', '05');
  I.fillField('#year', '2026');
  I.click("//button[text()='Purchase']");

  I.see('Thank you for your purchase!');
  I.click("//button[text()='OK']");

  console.log('💳 Checkout executado com sucesso!');
});
