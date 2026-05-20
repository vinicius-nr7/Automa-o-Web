Feature('Login Demo Blaze');

// Cenário positivo
Scenario('login com credenciais válidas', async ({ I }) => {
  I.amOnPage('/');
  I.click("//a[text()='Sign up']");
  I.waitForVisible('#signInModal', 10);

  const randomUser = 'usuario' + Date.now();
  I.waitForVisible('#sign-username', 10);
  I.waitForVisible('#sign-password', 10);
  I.click('#sign-username');
  I.fillField('#sign-username', randomUser);
  I.click('#sign-password');
  I.fillField('#sign-password', 'senha123');
  I.seeInField('#sign-username', randomUser);
  I.seeInField('#sign-password', 'senha123');
  I.waitForElement("//button[text()='Sign up']", 10);
  I.click("//button[text()='Sign up']");

  I.seeInPopup('Sign up successful.');
  I.acceptPopup();

  I.waitForElement("//a[text()='Log in']", 10);
  I.click("//a[text()='Log in']");
  I.waitForVisible('#logInModal', 10);

  I.fillField('#loginusername', randomUser);
  I.fillField('#loginpassword', 'senha123');
  I.click("//button[text()='Log in']");

  I.waitForVisible("//a[text()='Log out']", 10);
  I.seeElement("//a[text()='Log out']");

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

