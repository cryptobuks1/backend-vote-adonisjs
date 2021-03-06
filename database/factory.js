'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    name: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  }
})

Factory.blueprint('App/Models/Post', async (faker) => {
  return {
    title: faker.sentence(),
    content: faker.paragraph()
  }
})
Factory.blueprint('App/Models/Vote', async (faker) => {
  return {
    id_vote: faker.integer(),
    votename: faker.sentence(),
    kandidat: faker.username()
  }
})