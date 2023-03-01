const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://yumBites:yumBites@cluster0.ihvbpuy.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    if (err) console.log("Some Error occured", err);
    else {
      console.log("connected");
    }
  });
};
module.exports = mongoDB;
