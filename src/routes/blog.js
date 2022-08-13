const express = require('express');
const router = express.Router();
const blogController = require('../app/controllers/BlogController');

router.get('/create', blogController.create);
router.post('/store', blogController.store);
router.get('/:id/edit', blogController.edit);
router.post('/handle-form-action', blogController.handleFormAction);
router.put('/:id', blogController.update);
router.patch('/:id/restore', blogController.restore);
router.delete('/:id', blogController.deleteOne);
router.delete('/:id/destroy', blogController.destroy);
router.get('/:slug', blogController.index);

module.exports = router;
