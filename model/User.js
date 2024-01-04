const mongoose = require("mongoose");
const { default: isEmail } = require("validator/lib/isEmail");

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Pls enter Your name"] },
  age: {
    type: Number,
    required: [true, "Kindly, enter your age"],
    minlength: [2, "Kindly, provide a valid age"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Kindly, enter an email"],
    lowercase: true,
    validate: [isEmail, "Kindly, enter a valid email"],
  },
});

// Create a Person model using the schema
const user = mongoose.model("user", userSchema);
module.exports = user;
