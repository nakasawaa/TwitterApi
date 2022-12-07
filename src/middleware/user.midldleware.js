const User = require("../models/User");

const dtoCreateUser = async (req, res, next) => {
  try {
    const user = req.body;
    console.log(req.body)
    if (!user) {
      res.status(400).send("Rentrez un user svp");
      return;
    }

    const userExist = await User.findOne({ username: user.username });

    if (userExist) {
      res.status(400).send("Utilisateur existe déja");
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur 500 / dtoCreateUser");
  }
};

const dtoDeleteUser = async (req, res, next) => {
  try {
    const username = req.params;
    const user = await User.findOne({ user: username });

    if (!user) {
      res.status(404).send("User existe pas ");
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Erreur 500 / dtoDeleteUser" });
  }
};

module.exports = {
  dtoCreateUser,
  dtoDeleteUser,
};
