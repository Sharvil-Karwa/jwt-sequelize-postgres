const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

exports.all = (req, res) => {
  res.status(200).send("Visible to all");
};
exports.user = (req, res) => {
  res.status(200).send("Visible to users.");
};
exports.admin = (req, res) => {
  // send data of all users
  User.findAll({
    include: [
      {
        model: Role,
        attributes: ["id", "name"],
      },
    ],
  })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
