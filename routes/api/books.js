const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  .post(booksController.create)
 .get(booksController.findAll);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);
  

module.exports = router;