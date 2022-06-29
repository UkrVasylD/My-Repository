var express = require('express')
var router = express.Router()

const authorController = require('../controllers/author')

/* GET список книг. */
router.get('/', authorController.getList)

/* GET видалення книги за id. */
router.delete('/', authorController.delete)

/* POST Створення нової книги. */
router.post('/', authorController.add)

// Оновлення інформації про книгу після редагування
router.put('/', authorController.update)

/* Відображення інформації про одну книгу */
router.get('/:id', authorController.getById)

module.exports = router
