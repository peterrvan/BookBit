const path = require('path'); 
const express = require('express'); 
const app = express();
const PORT = 3000;
const cors = require('cors');

// Require routers
const apiRouter = require('./routes/api');
const dbRouter = require('./routes/db');

// Adding ability to parse request body and form data
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

// Serve all static assets
app.use(express.static(path.resolve(__dirname, '../')));

// Route handler for all api requests
app.use('/api', apiRouter);
console.log('here!!!!');
app.use('/db', dbRouter);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT}...`);
});