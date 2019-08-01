const router = require("express").Router();
const searchedBooksRoutes = require("./searchedBooks");
const savedBooksRoutes = require("./savedBooks");

router.use("/searchedBooks", searchedBooksRoutes); // /api/searchedBooks
                                                   // this one use AXIOS to get data from google.
                                                   // And save book.
                                                   // I gonna use req.params.query to build a quary.
router.use("/savedBooks", savedBooksRoutes); // /api/savedBooks
                                             // this one only SHOW saved books from database.
                                             // also client can REMOVE one saved book

module.exports = router;
