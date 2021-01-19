//required modules
const Helpers = require("../../../helpers/helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.PUBLIC_ACCESS_TOKEN_SECRET;
//helpers.js tests suite
describe("helpers test", () => {
  //mock user
  let user = {
    name: "Ekene",
    email: "ezedi.eo.ekene@gmail.com",
    mainCurrency: "USD",
  };
  it("should return true for password match", async () => {
    const password = "admin1234";
    const hashedPassword = await Helpers.hashPassword(password);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    expect(isMatch).toBeTruthy();
  });

  it("should return false for password mismatch", async () => {
    const password = "admin1234";
    const hashedPassword = await Helpers.hashPassword(password);

    const isMatch = await bcrypt.compare("admin12345", hashedPassword);
    expect(isMatch).toBeFalsy();
  });

  it("should return a valid jwt", async () => {
    const payload = {
      name: user.name,
      email: user.email,
      mainCurrency: user.mainCurrency,
    };
    const token = await Helpers.genJwt(payload);
    const decoded = await jwt.verify(token, secret);
    expect(decoded).toMatchObject(payload);
  });
});
