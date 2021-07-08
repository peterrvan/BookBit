const express = require ('express');
const router = express.Router();

const dbController = require('../controllers/dbController');

router.get('/books', dbController.getBooks, (req, res) => {
    console.log('here')
    return res.status(200).json(res.locals.myBooks);
  })

  module.exports = router;