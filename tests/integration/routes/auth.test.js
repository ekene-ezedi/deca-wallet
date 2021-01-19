const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../../../app");
const request = supertest(app);
const Noob = require("../../../models/noob");

//remove password from data, to cause failure
let data = {
  name: "Ekene",
  email: "ezedi.eo.ekene@gmail.com",
  mainCurrency: "USD",
};

describe("AUTHENTICATION ROUTE", () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/deca-wallet_test`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  });

  afterEach(async () => {
    await Noob.deleteOne();
  });

  describe("POST/signup", () => {
    it("Should return status 400, if user validation fails", async (done) => {
      const response = await request.post("/api/auth/signup").send(data);
      expect(response.status).toBe(400);
      done();
    });

    it("Should return status 400 if user already exist", async (done) => {
      const data = {
        name: "Ekene",
        email: "ezedi.eo.ekene@gmail.com",
        password: "admin1234",
        mainCurrency: "USD",
      };
      const user = new Noob(data);
      await user.save();
      const response = await request.post("/api/auth/signup").send(data);

      expect(response.status).toBe(400);
      done();
    });

    it("Should return status 200 if user acccount is created successfully", async (done) => {
      const data = {
        name: "Ekene",
        email: "ezedi.eo.ekene@gmail.com",
        password: "admin1234",
        mainCurrency: "USD",
      };
      const response = await request.post("/api/auth/signup").send(data);
      expect(response.status).toBe(200);
      const user = await Noob.findOne({ email: "ezedi.eo.ekene@gmail.com" });
      expect(user).toHaveProperty("email", "ezedi.eo.ekene@gmail.com");
      done();
    });
  });
});
