'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.on('login').render('login')

Route.on('createuser').render('createuser')

Route.on('map').render('map')

Route.on('profile').render('profile')

Route.get('hello-world', ({ view }) => {
    return view.render('hello-world')
  })

  Route
  .post('login', 'UserController.login')
  .middleware('guest')
  .as('login')
  

Route
  .get('users/:id', 'UserController.show')
  .middleware('auth')

  Route.post('/user/new', 'UserController.new').as('createuser')

  Route
  .get('logout', 'UserController.logout')
  .middleware('auth')


//
//rotas para os serviços de Locais (places)
//

//lista todos os locais cadastrados
Route.get('/places', 'PlaceController.listAll').middleware('auth')

//lista todos os locais cadastrados pelo usuário logado
Route.get('/places/user/:user_id', 'PlaceController.listByUser')

//lista um local cadastrado por id
Route.get('/places/:id', 'PlaceController.listById')

//insere novo local
Route.post('/places/new','PlaceController.insert')

//exlui todos os locais
Route.post('/places/delete/all', 'PlaceController.deleteAll')

//exclui um local por id
Route.post('/places/delete/:id','PlaceController.deleteById')



//
//rotas para os serviços de Avaliação (assess)
//

//lista todas as avaliações cadastradas
Route.get('/assess', 'AssessController.listAll')

//lista todas as avaliações cadastradas pelo usuário logado
Route.get('/assess/user/:user_id', 'AssessController.listByUser')

//lista uma avaliação cadastrada por id
Route.get('/assess/:id', 'AssessController.listById')

//lista todas as avaliações cadastradas para um local especifico
Route.get('/assess/place/:place_id', 'AssessController.listByPlace')

//insere nova avaliação
Route.post('/assess/new','AssessController.insert')

//exclui uma avaliação por id
Route.post('/assess/delete/:id','AssessController.deleteById')

//exclui todas as avaliações
Route.post('/assess/delete/all','AssessController.deleteAll')