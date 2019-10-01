'use strict'

const Mail = use('Mail');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class ForgotPasswordController {
  async store({ request }) {
    const { email } = request.input('email');

    console.log(email);

    const user = await User.findOrFail('email', email);



    await Mail.send(('emails.welcome', { name: user.name }, (message) => {
      message
        .to(user.email)
        .from('rodrigo@rtoledo.inf.br')
        .subject('RS/XP - Recuperação de senha')
    }))
  }
}

module.exports = ForgotPasswordController
