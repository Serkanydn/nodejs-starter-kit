const JWT = require('jsonwebtoken');

class AuthHelper {
  generateAccessToken(user) {
    // ! Kullanıcınızda name property' si var ise name' i silebilirsiniz.
    return JWT.sign(
      { name: user.email, ...user },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expresIn: '1w' }
    );
  }
  generateRefreshToken(user) {
    // ! Kullanıcınızda name property' si var ise name' i silebilirsiniz.
    return JWT.sign(
      { name: user.email, ...user },
      process.env.REFRESH_TOKEN_SECRET_KEY
    );
  }
}

module.exports = new AuthHelper();
