const {body, validationResult} = require('express-validator');

exports.validateLogin = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({min: 5, max:32}).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
]; 


exports.validateBanner = [
    body('url').optional().isString().withMessage('Неверный формат URL'),
    body('active').optional().isBoolean().withMessage('Неверный формат активности баннера'),
    body('sort').optional().isInt().withMessage('Неверный формат сортировки баннера'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

