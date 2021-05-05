'use strict'

const { route } = require("@adonisjs/framework/src/Route/Manager")

const Database = use('Database')
const Hash = use('Hash')

class UserController {
    async login ({ auth, request, response }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
        return response.redirect('/')
    }

    show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
          return "You cannot see someone else's profile"
        }
        return auth.user
    }

    async new ({auth, request, response }) {
        console.log('UserController.new')
        await Database.table('users').insert({
            'username': request.input('username'),
            'email': request.input('email'),
            'password': await Hash.make(request.input('password')),
        })
        await auth.attempt(request.input('email'), request.input('password'))
        return response.redirect('/')
    }

    async logout ({auth, request, response }) {
      await auth.logout()
      return response.redirect('/')
    }

}


module.exports = UserController
