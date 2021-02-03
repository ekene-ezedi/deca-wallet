//define packages/modules
const mongoose = require("mongoose");

//database connection string and error handling
module.exports = function () {
  const db = process.env.DB;
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useUnifiedTopology", true);
  mongoose.set("useCreateIndex", true);
  let DB = mongoose.connect(db);
  DB.then(() => console.log(`Database connection @ ${db}`)).catch((error) =>
    console.log(error)
  );
};
