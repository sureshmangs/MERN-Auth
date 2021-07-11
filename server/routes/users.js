const router = require('express-promise-router')();

const userSignUp = require('../controllers/userSignUp');
const validate = require('../helpers/userValidation');

router.route('/signup')
    .post(validate.validateSignUp(validate.schemaSignUp.authSchema), userSignUp.signUp);


module.exports = router;