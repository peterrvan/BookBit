const express = require ('express');
const router = express.Router();

const dbController = require('../controllers/dbController');
const apiController = require('../controllers/apiController');

router.get('/books', dbController.getBooks, apiController.getBookInfo, (req, res) => {
  // console.log('res.locals.myBooks: ', res.locals.myBooks);
  return res.status(200).json(res.locals.myBooks);
})

router.post('/add', dbController.addBook, (req, res) => {
  // console.log('res.locals.book: ', res.locals.book);
  return res.status(200).json(res.locals.book);
})

router.post('/delete', dbController.deleteBook, (req, res) => {
  // console.log('res.locals.deletedBook: ', res.locals.deletedBook);
  return res.status(200).json(res.locals.deletedBook);
})

router.post('/note', dbController.updateNote, (req, res) => {
  // console.log('res.locals.note: ', res.locals.note);
  return res.status(200).json(res.locals.note);
})

router.post('/favorite', dbController.updateFavorite, (req, res) => {
  // console.log('res.locals.favorite: ', res.locals.favorite);
  return res.status(200).json(res.locals.favorite);
})
  // Login
  // Verify that username exists and matches password in database
  // SELECT * FROM users...WHERE username = `${query}`...RETURNING _id

  // Sign up
  // Verify that username is not in the table
  // Then you insert new entry into the users table, RETURNING _id

  // getBooks (done)
  // Front end sends backend _id, backend retrieves all volume_ids associated with that user id
  // Fetch google api for book information pertaining to those volume ids
  // Return back an array with objects containing all info for books to be rendered on homepage

  // addBook (done)

  // deleteBook (done)

  // updateBook => implies the bottom two

  // updateNote

  // updateFavorite

  module.exports = router;