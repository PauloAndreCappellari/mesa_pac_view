'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssessSchema extends Schema {
  up () {
    this.create('assesses', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('place_id').unsigned().references('id').inTable('places')
      table.integer('rating').unsigned().notNullable()
      table.string('description', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('assesses')
  }
}

module.exports = AssessSchema
