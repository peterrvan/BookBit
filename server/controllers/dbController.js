const db = require('../models/models');

const dbController = {};

dbController.getBooks = (req, res, next) => {
  // Retrieve the user_id from req.body
	const { user_id } = req.body;

  const query = 'SELECT volume_id, favorite, notes FROM books WHERE user_id = $1';
  const parameters = [ user_id ];

  db.query(query, parameters)
    .then((data) => {
      res.locals.myBooks = data.rows;
      return next();
    })
    .catch((err) => {
      console.log('Error in dbController.getBooks: ', err);
      return next(err);
    })
}

dbController.addBook = (req, res, next) => {
  // Retrieve the user_id and volume_id from req.body
	const { user_id } = req.body;
  const { volume_id } = req.body;

  const query = 'INSERT INTO books(volume_id, favorite, user_id) VALUES($1,\'false\', $2) RETURNING volume_id, favorite, notes, user_id';
  const parameters = [ volume_id, user_id ];

  db.query(query, parameters)
    .then((data) => {
      res.locals.book = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('Error in dbController.addBook: ', err);
      return next(err);
    })
}

dbController.deleteBook = (req, res, next) => {
  // Retrieve the user_id and volume_id from req.body
	const { user_id } = req.body;
  const { volume_id } = req.body;

  const query = 'DELETE FROM books WHERE volume_id = $1 AND user_id = $2 RETURNING *';
  const parameters = [ volume_id, user_id ];

  db.query(query, parameters)
    .then((data) => {
      res.locals.deletedBook = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('Error in dbController.deleteBook: ', err);
      return next(err);
    })
}

dbController.updateNote = (req, res, next) => {
  // Retrieve the user_id and volume_id from req.body
	const { user_id } = req.body;
  const { volume_id } = req.body;
  const { note } = req.body;

  const query = 'UPDATE books SET notes = $3 WHERE volume_id = $1 AND user_id = $2 RETURNING *';
  const parameters = [ volume_id, user_id, note ];

  db.query(query, parameters)
    .then((data) => {
      res.locals.note = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('Error in dbController.updateNote: ', err);
      return next(err);
    })
}

dbController.updateFavorite = (req, res, next) => {
  // Retrieve the user_id and volume_id from req.body
	const { user_id } = req.body;
  const { volume_id } = req.body;
  const { favorite } = req.body;

  const query = 'UPDATE books SET favorite = $3 WHERE volume_id = $1 AND user_id = $2 RETURNING *';
  const parameters = [ volume_id, user_id, favorite ];

  db.query(query, parameters)
    .then((data) => {
      res.locals.favorite = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('Error in dbController.updateFavorite: ', err);
      return next(err);
    })
}
// dbController.getBooks = (req, res, next) => {
// 	// Dummy data for getBooks
// 	res.locals.myBooks = [
// 		{
// 			"id": "SedvDwAAQBAJ",
// 			"title": "The Unchangeable Spots of Leopards",
// 			"authors": [
// 					"Kristopher Jansma"
// 			],
// 			"publisher": "Penguin Books",
// 			"publishedDate": "2014",
// 			"description": "Haunted by the successes of a long-time rival and unable to let go of his love for a woman who got away, an aspiring writer, determined to discover and tell the truth about the trio's falling out, struggles to untangle a complicated web of lies.",
// 			"pageCount": 254,
// 			"categories": [
// 					"Fiction"
// 			],
// 			"imageLinks": {
// 					"smallThumbnail": "http://books.google.com/books/content?id=SedvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
// 					"thumbnail": "http://books.google.com/books/content?id=SedvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// 			}
// 	},
// 	{
// 		"id": "wFp2CQAAQBAJ",
// 		"title": "The Picture of Dorian Gray",
// 		"authors": [
// 				"Oscar Wilde"
// 		],
// 		"publisher": "Courier Corporation",
// 		"publishedDate": "1993-10-13",
// 		"description": "A handsome, dissolute man who sells his soul for eternal youth is horrified to see the reflection of his degeneration in the distorted features of his portrait.",
// 		"pageCount": 176,
// 		"categories": [
// 				"Fiction"
// 		],
// 		"imageLinks": {
// 				"smallThumbnail": "http://books.google.com/books/content?id=wFp2CQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
// 				"thumbnail": "http://books.google.com/books/content?id=wFp2CQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// 		}
// },
// {
// 	"id": "eQQUDAAAQBAJ",
// 	"title": "On the Genealogy of Morals",
// 	"subtitle": "A Polemic. By Way of Clarification and Supplement to My Last Book Beyond Good and Evil",
// 	"authors": [
// 			"Friedrich Nietzsche",
// 			"Douglas Smith"
// 	],
// 	"publisher": "Oxford University Press",
// 	"publishedDate": "2008-08-14",
// 	"description": "Nietzsche examines the history of ethics as a history of cruelty, and raises profoundly disquieting issues. He exposes the central values of the Judaeo-Christian and liberal traditions-- compassion, equality, justice-- as the product of a brutal process of conditioning. This is the most sustained of Nietzsche's later works and offers one of the fullest expressions of his characteristic concerns. The introduction places his ideas within the cultural context of his own time and stresses the relevance of his work for a contemporary audience.",
// 	"pageCount": 208,
// 	"categories": [
// 			"Literary Collections"
// 	],
// 	"imageLinks": {
// 			"smallThumbnail": "http://books.google.com/books/content?id=eQQUDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
// 			"thumbnail": "http://books.google.com/books/content?id=eQQUDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// 	}
// }];
// 	next();
// }

module.exports =  dbController;