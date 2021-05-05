const Event = use('Event')


Event.on('user::login', async (login) => {
  console.log('events.js -> user::login')
})