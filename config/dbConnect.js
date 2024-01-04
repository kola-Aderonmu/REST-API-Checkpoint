const mongoose = require("mongoose");

// Connect to MongoDB database

const connectDB = async () => {
    console.log("MongoDB URI:", process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to DB");
};

module.exports = { connectDB };




// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => console.log("Connected to MongoDB"));
