const express = require ('express');
const router = express.Router();

const dbController = require('../controllers/dbController');

// router.get('/', dbController.getBooks, (req, res) => {
//   console.log('here')
//   return res.status(200).json(res.locals.myBooks);
// })

router.post('/login', dbController.userLogin, (req, res) => {
    console.log('here')
    //redirect to users home page w/ their books of choice;
    return res.status(200).json(res.locals.user_id);
})

//routers all get caught in server.js

  // Login
  // Verify that username exists and matches password in database
  // Upon sucessful login, return the user_id in res.locals
  // SELECT * FROM users...WHERE username = `${query}`...RETURNING _id


  // Sign up
  // Verify that username is not in the table
  // Then you insert new entry into the users table, RETURNING _id

  // getBooks
  // Front end sends backend _id, backend retrieves all volume_ids associated with that user id
  // Fetch google api for book information pertaining to those volume ids
  // Return back an array with objects containing all info for books to be rendered on homepage

  // addBook

  // deleteBook

  // updateBook

  // updateNote

  // updateFavorite

  module.exports = router;