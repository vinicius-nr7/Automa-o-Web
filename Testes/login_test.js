Feature('Login Demo Blaze');

// Cenário positivo
Scenario('login com credenciais válidas', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement("//a[text()='Log in']", 10);
  I.click("//a[text()='Log in']");
  I.waitForVisible('#logInModal', 10);

  I.fillField('#loginusername', 'vinicius');
  I.fillField('#loginpassword', '123456');
  I.click("//button[text()='Log in']");

  I.waitForElement("//a[text()='Log out']", 10);
  I.see('Log out');

  console.log('✅ Login válido executado com sucesso!');
});

// Cenário negativo
Scenario('login com credenciais inválidas', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement("//a[text()='Log in']", 5);
  I.click("//a[text()='Log in']");
  I.waitForVisible('#logInModal', 5);

  I.fillField('#loginusername', 'usuarioErrado');
  I.fillField('#loginpassword', 'senhaErrada');
  I.click("//button[text()='Log in']");

  I.seeInPopup('User does not exist.');
  I.acceptPopup();

  console.log('❌ Login inválido validado com sucesso!');
});

