//FIXME: remove hardcoded values
module.exports = {
  rethinkdb: {
    host: 'http://rethink-db.dev.azk.io/'
  },
  rethinkdb_server: {
    host: 'http://rethink-express.dev.azk.io',
    db: 'posts_cerebral'
  },
  initial_text: [
    '### [TITLE](URL)',
    '',
    'DESCRIPTION',
    '',
  ].join('\n')
};
