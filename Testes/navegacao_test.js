Feature('Navegação Demo Blaze');

Scenario('validar categorias Phones, Laptops e Monitors', async ({ I }) => {
  I.amOnPage('/');

  I.click("//a[text()='Phones']");
  I.waitForText('Samsung galaxy s6', 10);
  I.see('Samsung galaxy s6');

  I.click("//a[text()='Laptops']");
  I.waitForText('MacBook air', 10);
  I.see('MacBook air');

  I.click("//a[text()='Monitors']");
  I.waitForText('Apple monitor 24', 10);
  I.see('Apple monitor 24');

  console.log('📂 Navegação entre categorias validada com sucesso!');
});
