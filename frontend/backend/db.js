const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://yumBites:yumBites@cluster0.ihvbpuy.mongodb.net/yumBitesMern?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("Some Error occured", err);
      else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection(
          "food-items"
        );
        fetched_data.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          else console.log("");
        });
      }
    }
  );
};
module.exports = mongoDB;
