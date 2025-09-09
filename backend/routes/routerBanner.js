const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/bannerController');
const { upload } = require('../middlewares/uploadImage');
const { validateBanner } = require('../middlewares/validationRequest');

router.post(
    '/banner/create', 
    validateBanner, 
    upload.single('image'), 
    bannerController.create, 
    (err, req, res, next) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }   
        next();
    }
);

router.post(
    '/banner/edit/:id', 
    upload.single('image'), 
    bannerController.edit, 
    (err, req, res, next) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }   
        next();
    }
);

router.delete('/banner/delete/:id', bannerController.delete);

router.get('/banner/list', bannerController.list);

module.exports = router;
