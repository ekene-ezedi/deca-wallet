//define packages/modules
const mongoose = require("mongoose");

//database connection string and error handling
module.exports = function () {
  const db = process.env.DB;
  let DB = mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  DB.then(() => console.log(`Database connection @ ${db}`)).catch((error) =>
    console.log(error)
  );
};
