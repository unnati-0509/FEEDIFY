const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // Add a field to represent the user type
  userType: {
    type: String,
    enum: ["Admin", "Faculty", "Student"],
    required: true,
  },
  // Add an ID field
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
