const reponseSondage = require("../models/ReponseSondage");
const Tweet = require("../models/Tweet");
const user = require("../models/User");

const createTweet = async (req, res) => {
  try {
    const tweet = req.body.tweet;
    const user = req.params.user;
    const newTweet = new Tweet();

    newTweet.tweets = tweet;
    newTweet.user = res.locals.user;
    await newTweet.save();

    console.log(res.locals.user);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send("error 500 / CreateTweet");
    console.log(error);
  }
};

const getTweet = async (req, res) => {
  try {
    const userTweet = await Tweet.findOne({ id: req.params.id });
    res.send(userTweet.tweet);
  } catch (error) {
    res.status(500).json({ message: "error 500/ Get Tweet" });
    console.log(error);
  }
};

const getallTweet = async (req, res) => {
  try {
    const userTweet = await Tweet.find({}).limit(10);
    res.send(userTweet);
    console.log(userTweet);
  } catch (error) {
    res.status(500).json({ message: "error 500/ Get All Tweet" });
    console.log(error);
  }
};

const patchTweet = async (req, res) => {
  try {
    const idTweet = req.params.id;
    const userTweet = await Tweet.findOne({ id: idTweet });
    const data = req.body;
    const newTweet = { ...userTweet, data };

    res.send(newTweet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error 500/ PatchTweet" });
  }
};

const deleteTweet = async (req, res) => {
  try {
    const idTweet = req.params.id;
    const tweet = await Tweet.findOne({ id: idTweet });

    console.log("tweet", tweet);
    await tweet.deleteOne();
    res.status(200).send("Tweet supprimé");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error 500 / deleteTweet" });
  }
};

module.exports = {
  createTweet,
  getTweet,
  patchTweet,
  deleteTweet,
  getallTweet,
};
