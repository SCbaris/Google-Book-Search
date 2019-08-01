const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/") // api/searhedBooks
                  // Whenever we open searched books page we need to save one book.
                  // if we send as post it will save it to database.
  .post(booksController.create);

router
  .route("/:query") // api/searhedBooks/:query 
                    // We are sending quary value as req.params.query. like id.
                    // And it will give us results.
  .get(booksController.findByQuery) // Using axios to get book data from google.
module.exports = router;
