const db = require('../models/models.js'); 

const dbController = {};

//Controllers here

dbController.userLogin = (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  const values = [username, password];
  const userInDB = 'SELECT _id FROM users WHERE username = $1 AND password = $2';

  db 
    .query(userInDB, values)
    .then(results => {
      // Conditional statement for no match
      // if (!results.rows.length) throw new Error
      res.locals.user_id = results.rows[0];  
      return next(); 
    })
    .catch((err) => {
      console.log('Error in dbController.userLogin: ', err)
      return next( {log: 'dbController.userLogin failed: error retrieving/verifying user'} );
    })
}

// dbController.getBooks = (req, res, next) => {
// 	// Dummy data for 
	
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