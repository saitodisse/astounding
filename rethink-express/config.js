//FIXME: remove hardcoded values
module.exports = {
  rethinkdb: {
      host: 'rethinkdb.dev.azk.io',
      port: process.env.RRRR || 28015,
      authKey: '',
      db: 'posts_cerebral'
  },
  express: {
      port: process.env.PORT || 8080,
      simulate_delay: process.env.SIMULATE_DELAY || 0
  },
  rethinkdb_server_ngrok: {
    api: 'http://rethink-express-ngrok.dev.azk.io/api'
  },
};
