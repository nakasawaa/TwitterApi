const tweet = require("../models/Tweet");

const isAuthenticated = async (req, res, next) => {
  try {
    // RECUP USERNAME
    const username = req.headers.username;

    if (!username) {
      // ON LUI ENVOIE ERREUR
      res.status(401).send("Il faut te connecter");
      return;
    }

    const user = await tweet.findOne({ username: username });

    if (!user) {
      res.status(401).send(" Verifiez l'orthographe du user");
      return;
    }

    // CLE
    req.user = user;

    next();
  } catch (error) {
    res.status(500).send("ERROR/ isAuth");
  }
};

module.export = isAuthenticated();
