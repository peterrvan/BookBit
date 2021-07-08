const { Pool } = require('pg');

const PG_URI = 'postgres://znppixim:3TJzcISawQebTYvom8zZ1tdTr69g7p_V@kashin.db.elephantsql.com/znppixim';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};