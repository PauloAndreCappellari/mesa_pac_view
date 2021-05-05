'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    const users = await Database.table('users')
    console.log('users: ' + users)
    
    console.log(await Hash.make('teste'))

    const isSame = await Hash.verify('teste', '$2a$10$KE0YjtABTmmQzX3mthvuxubRDChepCa0PyEyqFdpGhjMo4m0LcV2G')
    if (isSame){
      console.log('isso aí')

    }
  }
}

module.exports = UserSeeder