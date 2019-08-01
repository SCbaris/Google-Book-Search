const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router.route("/") // his will indicate /api/savedBooks/
  .get(booksController.findAll) // it will take all datas from database and show us.

router
  .route("/:id") // this will indicate /api/savedBooks/:id
                 // We just need id for delete what we saved.
  .delete(booksController.remove); //Delete what we save

module.exports = router;