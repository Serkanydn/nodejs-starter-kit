/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const router = require('express').Router();
const { tryCatch } = require('../middlewares');
const { homeController } = require('../controllers');

router.route('/').get(tryCatch(homeController.index));

module.exports = router;
