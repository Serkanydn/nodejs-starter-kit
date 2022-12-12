const httpStatus = require('http-status');
const { authHelper, cryptoHelper } = require('../scripts/utils');
const { homeService } = require('../services');
const { ApiError } = require('../errors');

class HomeController {
  async index(req, res) {
    // throw ApiError.notFound();

    res.status(httpStatus.OK).send('Welcome To Home!');
  }

  // ! Login örneği
  async login(req, res) {
    req.body.password = cryptoHelper.passwordToHash(req.body.password);

    let user = await userService.findOne(req.body);

    if (!user)
      throw new ApiError(
        'Böyle bir kullanıcı bulunamadı.',
        httpStatus.NOT_FOUND
      );

    user = {
      ...user.toObject(),
      tokens: {
        accessToken: authHelper.generateAccessToken(user),
        refreshToken: authHelper.generateRefreshToken(user),
      },
    };
    delete user.password;

    res.status(httpStatus.OK).json(user);
  }
}

module.exports = new HomeController();
