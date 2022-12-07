const { model, Schema } = require("mongoose");

const TweetSchema = new Schema({
  tweets: String,
  isSondage: Boolean,
  answers: [String],

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.nom,
  },
});

module.exports = model("Tweet", TweetSchema, "Tweets");
