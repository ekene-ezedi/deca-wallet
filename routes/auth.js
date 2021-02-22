const express = require("express");
const router = express.Router();
const Noob = require("../models/noob");
const Helpers = require("../helpers/helpers");

//signup route
router.post("/signup", async (req, res) => {
  //validate request
  const validate = Noob.validateUser(req.body);

  //if validation fails return 404 error
  if (validate.error)
    return res.status(400).json({ error: validate.error.details[0].message });

  try {
    //check if user already exists
    let userExists = await Noob.findOne({ email: validate.value.email });
    if (userExists)
      return res.status(400).json({ msg: "This email address is unavailable" });

    const hashedPassword = await Helpers.hashPassword(validate.value.password);

    validate.value.password = hashedPassword;

    //create new user
    let noob = new Noob(validate.value);

    //create wallet
    const wallet = {
      name: `${validate.value.mainCurrency} Wallet`,
      userid: `${noob._id}`,
      currency: `${noob.mainCurrency}`,
    };

    noob.wallet = wallet;

    //save new user to DB
    await noob.save();

    //generate token
    const payload = {
      id: noob._id,
      name: noob.name,
      mainCurrency: noob.mainCurrency,
    };

    const token = await Helpers.genJwt(payload);

    res.status(200).json({ token, msg: "Account created succesffully" });
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});
//export router
module.exports = router;
