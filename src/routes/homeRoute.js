/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const router = require('express').Router();
const { tryCatch, authenticate, idChecker } = require('../middlewares');
const { homeController } = require('../controllers');

// ! Authenticate ve idChecker kullanım örneği.
router
  .route('/')
  .get(idChecker(), authenticate, tryCatch(homeController.index));

module.exports = router;
