//required modules
const Noob = require("../../../models/noob");

describe("Noon User Model", () => {
  const user = {
    name: "Ekene",
    email: "ezedi.eo.ekene@gmail.com",
    password: "admin1234",
    mainCurrency: "USD",
  };

  it("Should return a validated user", async () => {
    const response = await Noob.validateUser(user);
    expect(response.value).toEqual(user);
    expect(response.error).toBeUndefined();
  });

  it("Should return an an error when validation fails", () => {
    const response = Noob.validateUser({ name: "ekene" });
    expect(response.error).toBeDefined();
  });
});
