const BaseService = require('./baseService');
const { Home } = require('../models');

class HomeService extends BaseService {}

module.exports = new HomeService(Home);
