require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "need name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "need email"],
    validate: {
      validator: validator.isEmail,
      message: "please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "need password"],
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    default: "my city",
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

UserSchema.methods.comparePassword = async function (inputPassword) {
  try {
    const isPasswordCorrect = await bcrypt.compare(
      inputPassword,
      this.password
    );
    console.log(isPasswordCorrect);
    if (isPasswordCorrect) return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("User", UserSchema);
