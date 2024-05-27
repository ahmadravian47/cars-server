const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  // _id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
