// IMPORTER PACKAGE EXPRESS
const express = require("express");
const dtoUser = require("./src/middleware/user.midldleware");
const controlleruser = require("./src/controllers/userControlers");
const dtoTweet = require("./src/middleware/tweet.middleware");
const controllerTweet = require("./src/controllers/tweetController");

const data = require("./src/database");

const app = express();
app.use(express.json());

//creer User
app.post("/twitter", dtoUser.dtoCreateUser, controlleruser.createUser);

// Supprrimer user
app.delete(
  "/users/:user",
  dtoUser.dtoDeleteUser,
  controlleruser.deleteThisUser
);

// Creer tweet
app.post(
  "/twitter/:user",
  dtoTweet.dtoCreateTweet,
  controllerTweet.createTweet
);

// Get tweet
app.get("/twitter/tweet/:id", dtoTweet.dtoGetTweet, controllerTweet.getTweet);

//Get All tweet
app.get(
  "/twitter/fildactu",
  dtoTweet.dtoGetallTweet,
  controllerTweet.getallTweet
);
// Modifier tweet
app.patch(
  "/twitter/:id/update",
  dtoTweet.dtoPatchTweet,
  controllerTweet.patchTweet
);

// Supprimer Tweet
app.delete(
  "/twitter/:tweet/deletetweet",
  dtoTweet.dtoDeleteTweet,
  controllerTweet.deleteTweet
);

app.listen(3000, () => {
  console.log("Serveur démarré");
});
