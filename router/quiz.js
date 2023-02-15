const quizController = require('../controllers/quiz');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:nomor', quizController.findOne);
router.put('/:nomor', quizController.update);
router.delete('/:nomor', quizController.delete);

module.exports = router;