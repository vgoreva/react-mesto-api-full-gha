const router = require('express').Router();
const routesUsers = require('./users');
const routesCards = require('./cards');
const routessignup = require('./signup');
const routesSignIn = require('./signin');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.use('/sign-up', routessignup);
router.use('/sign-in', routesSignIn);
router.use(auth);
router.use('/users', routesUsers);
router.use('/cards', routesCards);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена.'));
});

module.exports = router;
