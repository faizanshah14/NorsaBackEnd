const models = require('../models/index');


exports.checkAdminStatus = (req, res) => {
  models.user
    .findOne(
        { where: { email: req.body.email } }
        )
    .then((data) => {
      if (!data) {
        return res.status(400).send({ result: 'error', message: 'not found user with your email' });
      }
      return res.json(data.isAdmin);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving CLient Record .',
      });
    });
};

exports.makeUserAdmin = (req, res) => {
  const email = req.body.email;
  models.user
    .update({ isAdmin: 3 }, { where: { email: email } })
    .then((user) => {
      console.log(user);
      return res.json('sucess');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving CLient Record .',
      });
    });
};
