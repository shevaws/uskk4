const quizController = require('../controllers/materi');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:nomor', quizController.findOne);
router.put('/:nama', quizController.update);
router.delete('/:nama', quizController.delete);

module.exports = router;