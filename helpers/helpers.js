//required modules
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//hash password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

//generate token
const genJwt = async (payload) => {
  const token = await jwt.sign(payload, process.env.JWTSECRET, {
    expiresIn: "24h",
  });
  return token;
};

module.exports = { hashPassword, genJwt };
