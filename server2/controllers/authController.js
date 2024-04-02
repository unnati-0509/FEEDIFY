const User = require("../models/user");
const { comparePassword, hashPassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

//register endpoint
const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and min of 6 characters long",
      });
    }
    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email is already present",
      });
    }

    const hashedPassword = await hashPassword(password);
    //create user in database
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    // check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      //res.json("passwords match");
      //._id bcz in mongodb its obj._id// name:user.name
      jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Passwords didn't matched",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};



module.exports = { test, registerUser, loginUser, getProfile };
