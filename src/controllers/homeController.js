const httpStatus = require('http-status');
const { homeService } = require('../services');
const { ApiError } = require('../errors');

class HomeController {
  async index(req, res) {
    // throw ApiError.notFound();

    res.status(httpStatus.OK).send('Welcome To Home!');
  }
}

module.exports = new HomeController();
