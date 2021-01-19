const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;
const walletSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Noob",
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
});

const noobSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  mainCurrency: {
    type: String,
    required: true,
  },
  wallet: [walletSchema],
  accountType: {
    type: String,
    default: "noob",
  },
});

//model
const Noob = mongoose.model("User", noobSchema);
module.exports = Noob;

//validate user input
module.exports.validateUser = function (user) {
  const schema = Joi.object().keys({
    name: Joi.string().max(50).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(8).required(),
    mainCurrency: Joi.string().required(),
  });

  //.... Return result....
  const { error, value } = schema.validate(user);
  return { error, value };
};
