const reponseSondage = require("../models/ReponseSondage");
const Tweet = require("../models/Tweet");
const user = require("../models/User");

const createUser = async (req, res) => {
  try {
    const username = req.body.username;
    console.log(req.body);
    const newUser = new user();
    newUser.username = username;

    await newUser.save();
  } catch (error) {
    res.status(500).send("Une erreur est survenue");
    console.log(error);
  }
  res.sendStatus(201);
};

const deleteThisUser = async (req, res) => {
  try {
    const username = req.params;
    await user.deleteOne({ user: username });

    res.status(200).send("User supprimé");
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

module.exports = {
  createUser,
  deleteThisUser,
};
