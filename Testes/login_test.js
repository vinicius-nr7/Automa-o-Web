Feature('Login Demo Blaze');

Scenario('login com credenciais válidas', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement("//a[text()='Log in']", 10);
  I.click("//a[text()='Log in']");
  I.waitForVisible("#logInModal", 10);
  
  I.fillField("#loginusername", "usuario1779897219807");
  I.fillField("#loginpassword", "senha123");
  I.click("//button[text()='Log in']");
  
  // NÃO vamos esperar o modal sumir. 
  // Vamos esperar o link de 'Log out' aparecer no lugar do 'Log in'.
  // Se o 'Log out' apareceu, o login funcionou independente do modal.
  I.waitForElement("//a[@id='logout2' and contains(text(), 'Log out')]", 15);
  
  console.log('✅ Login válido executado com sucesso!');
});

Scenario('login com credenciais inválidas', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement("//a[text()='Log in']", 10);
  I.click("//a[text()='Log in']");
  I.waitForVisible("#logInModal", 10);
  
  I.fillField("#loginusername", "usuarioErrado");
  I.fillField("#loginpassword", "senhaErrada");
  I.click("//button[text()='Log in']");
  
  I.acceptPopup();
  
  // Valida que o botão de Log out continua inexistente
  I.dontSeeElement("//a[@id='logout2']");
  
  console.log('❌ Login inválido validado com sucesso!');
});