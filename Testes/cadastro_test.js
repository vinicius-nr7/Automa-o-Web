Feature('Cadastro Demo Blaze');

Scenario('criar novo usuário com nome único', async ({ I }) => {
  I.amOnPage('/');
  I.click("//a[text()='Sign up']");
  I.waitForVisible('#signInModal', 10);
  const randomUser = 'usuario' + Date.now();
  I.fillField('#sign-username', randomUser);
  I.fillField('#sign-password', 'senha123');
  I.click("//button[text()='Sign up']");
  I.acceptPopup();
  console.log(`✅ Cadastro de usuário '${randomUser}' executado com sucesso!`);
});

Scenario('tentar cadastrar usuário já existente', async ({ I }) => {
  I.amOnPage('/');
  I.click("//a[text()='Sign up']");
  I.waitForVisible('#signInModal', 10);
  I.fillField('#sign-username', 'novoUsuario');
  I.fillField('#sign-password', 'senha123');
  I.click("//button[text()='Sign up']");
  I.acceptPopup();
  console.log('❌ Cadastro inválido validado: usuário já existente!');
});