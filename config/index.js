const dotenv = require('dotenv');
dotenv.config();

const { DB_URI, PORT, JWT_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = process.env;

module.exports = {
  port: PORT || 4200,
  jwtSecretKey: JWT_SECRET_KEY,
  refreshTokenSecretKey: REFRESH_TOKEN_SECRET_KEY,
  dbUri: DB_URI,
};
