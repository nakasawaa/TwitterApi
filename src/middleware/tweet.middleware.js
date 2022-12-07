const tweet = require("../models/Tweet");
const User = require("../models/User");

const dtoCreateTweet = async (req, res, next) => {
  try {
    const tweet = req.body.tweet;
    const user = req.params.user;
    const userExist = await User.findOne({ username: user });
    if (!userExist) {
      res.status(400).send("User pas connecté");
      return;
    }

    if (!tweet) {
      res.status(400).send("Entrez un tweet ");
      return;
    }

    res.locals.user = userExist;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur 500 / DtoCreateTweet");
  }
};

const dtoPatchTweet = async (req, res, next) => {
  try {
    const idTweet = req.params.id;

    const tweetExist = await tweet.findOne({ id: idTweet });
    console.log(tweetExist);
    if (!tweetExist) {
      req.status(400).send("tweet inexistant");
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue/ dtoPatchTweet" });
  }
};

const dtoGetTweet = async (req, res, next) => {
  try {
    const idTweet = req.params.id;

    const tweetExist = await tweet.findOne({ id: idTweet });
    console.log(tweetExist);
    if (!tweetExist) {
      req.status(400).send("tweet inexistant");
    }
    next();
  } catch (error) {
    res.status(500).send("Une erreur est survenue/ DtoGetTweet");
    console.log("error", error);
  }
};

const dtoGetallTweet = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(500).send("Une erreur est survenue/ DtoGetTweet");
    console.log("error", error);
  }
};
const dtoDeleteTweet = async (req, res, next) => {
  try {
    const tweetExist = await tweet.findOne({ id: req.params.id });

    if (!tweetExist) {
      res.status(400).send("tweet inexistant");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur 500 / DtoDeleteTweet");
  }
};

module.exports = {
  dtoCreateTweet,
  dtoDeleteTweet,
  dtoPatchTweet,
  dtoGetTweet,
  dtoGetallTweet,
};
