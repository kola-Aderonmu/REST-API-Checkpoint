// server.js
const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./config/dbConnect");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const User = require("./model/User");




// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;


// Body parser middleware
// Middlewares
app.use(morgan("combined"));
app.use(express.json());
app.use(cors());



// GET: RETURN ALL USERS
app
  .route("/users")
  .get(async (req, res) => {
    try {
      const users = await user.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  })

  // POST: ADD A NEW USER TO THE DATABASE
  .post(async (req, res) => {
    try {
      await user.create(req.body);
      res.status(200).json({ Message: "User created successful" });
    } catch (error) {
      res.status(400).json({ error: "Bad Request" });
    }
  });

// PUT: EDIT A USER BY ID
app
  .route("/users/:id")
  .put(async (req, res) => {
    try {
      const updatedUser = await user.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: "Bad Request" });
    }
  })

  // DELETE: REMOVE A USER BY ID
  .delete(async (req, res) => {
    try {
      const deletedUser = await user.findByIdAndDelete(req.params.id);
      res.json(deletedUser);
    } catch (error) {
      res.status(400).json({ error: "Bad Request" });
    }
  });

// start app
const startApp = async () => {
    //connect to Mongodb
  await connectDB();
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)});
};

startApp();





