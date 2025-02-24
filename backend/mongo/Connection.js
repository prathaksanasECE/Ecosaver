const mongoose = require("mongoose")

const mongoURL = "mongodb://0.0.0.0:27017/MERN_learn"

const mongoConnection = async () => {
  try {
    await mongoose.connect(mongoURL)
    console.log("connected to mongo ")
  }
  catch (err) {
    console.log(err);
  }

}
module.exports = mongoConnection;