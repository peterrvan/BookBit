const apiController = {};
const axios = require('axios');

apiController.searchResults = (req, res, next) => {
  // Assume query information is passed into req.body.query
  const { query } = req.body;

  axios({
    method: 'get',
    url: 'https://www.googleapis.com/books/v1/volumes',
    params: {
      q: query,
    }
  })
  .then((data) => {
    // Create a property labelled searchResults on res.locals and set its value to an empty array
    res.locals.searchResults = [];
    // Iterate through data.data and return only 10 search results
    for (let i = 0; i < 10; i += 1) {
      // console.log(res.locals.searchResults);
      res.locals.searchResults.push({
        id: data.data.items[i].id,
        title: data.data.items[i].volumeInfo.title,
        subtitle: data.data.items[i].volumeInfo.subtitle,
        authors: data.data.items[i].volumeInfo.authors,
        publisher: data.data.items[i].volumeInfo.publisher,
        publishedDate: data.data.items[i].volumeInfo.publishedDate,
        description: data.data.items[i].volumeInfo.description,
        pageCount: data.data.items[i].volumeInfo.pageCount,
        categories: data.data.items[i].volumeInfo.categories,
        imageLinks: data.data.items[i].volumeInfo.imageLinks,
        // textSnippet: data.data.items[i].searchInfo.textSnippet
      })
    }
    return next();
  })
  .catch((err) => {
    console.log('ERROR! Error in apiController.searchResults: ', err);
    next(err);
  })
}

apiController.getBookInfo = (req, res, next) => {
  // Perform a get request for each item in myBooks
  // For loop for length of myBooks
  async function generate () {
    for (let i = 0; i < res.locals.myBooks.length; i += 1) {
      await axios.get(`https://www.googleapis.com/books/v1/volumes/${res.locals.myBooks[i].volume_id}`)
      .then((data) => {
        // console.log('res.locals.myBooks inside getBookInfo: ', res.locals.myBooks);
        // console.log('data.data.volumeInfo: ', data.data.volumeInfo);
        res.locals.myBooks[i].title = data.data.volumeInfo.title;
        res.locals.myBooks[i].subtitle = data.data.volumeInfo.subtitle;
        res.locals.myBooks[i].authors = data.data.volumeInfo.authors;
        res.locals.myBooks[i].publisher = data.data.volumeInfo.publisher;
        res.locals.myBooks[i].publishedDate = data.data.volumeInfo.publishedDate;
        res.locals.myBooks[i].description = data.data.volumeInfo.description;
        res.locals.myBooks[i].pageCount = data.data.volumeInfo.pageCount;
        res.locals.myBooks[i].categories = data.data.volumeInfo.categories;
        res.locals.myBooks[i].imageLinks = data.data.volumeInfo.imageLinks;
      })
      .catch((err) => {
        console.log('ERROR! Error in apiController.getBookInfo: ', err);
        next(err);
      })
    }
  }
  generate()
    .then(() => {
      return next();
    })
}

module.exports =  apiController;