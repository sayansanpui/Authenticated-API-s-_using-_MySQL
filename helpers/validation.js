const { check } = require('express-validator');

exports.signUpValidation = [
    check('name','Name is required').not().isEmpty(),
    check('email','Please enter a valid mail').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password','Password is required').isLength({ min: 6 }),
]