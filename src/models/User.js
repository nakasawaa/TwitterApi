const { model, Schema } = require("mongoose");

const user = new Schema({
  username: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("User", user, "users");

