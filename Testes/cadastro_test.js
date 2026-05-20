Feature('Cadastro Demo Blaze');

// Cenário positivo
Scenario('criar novo usuário com nome único', async ({ I }) => {
  I.amOnPage('/');
  I.click("//a[text()='Sign up']");
  I.waitForVisible('#signInModal', 10);

  const randomUser = 'usuario' + Date.now();
  I.fillField('#sign-username', randomUser);
  I.fillField('#sign-password', 'senha123');
  I.click("//button[text()='Sign up']");

  I.seeInPopup('Sign up successful.');
  I.acceptPopup();

  console.log(`📝 Cadastro de usuário '${randomUser}' executado com sucesso!`);
});

// Cenário negativo
Scenario('tentar cadastrar usuário já existente', async ({ I }) => {
  I.amOnPage('/');
  I.click("//a[text()='Sign up']");
  I.waitForVisible('#signInModal', 5);

  I.fillField('#sign-username', 'novoUsuario');
  I.fillField('#sign-password', 'senha123');
  I.click("//button[text()='Sign up']");

  I.seeInPopup('This user already exist.');
  I.acceptPopup();

  console.log('❌ Cadastro inválido validado: usuário já existente!');
});
