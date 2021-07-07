const express = require ('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/search', apiController.searchResults, (req, res) => {
  return res.status(200).json(res.locals.searchResults);
})

module.exports = router;
