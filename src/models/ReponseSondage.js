const { model, Schema } = require("mongoose");

const reponseSondageSchema = new Schema({
  answers: String,

  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("ReponseSondage", reponseSondageSchema, "ReponsesSondages");
