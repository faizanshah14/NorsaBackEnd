const models = require('../models/index');


exports.checkAdminStatus = (req, res) => {
  models.user
    .findOne({ where: { email: req.body.email } })
    .then((data) => {
      if (!data) {
        res.status(400).send({ result: 'error', message: 'not found user with your email' });
      }
      res.json(data.isAdmin);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving CLient Record .',
      });
    });
};

exports.changeUserStatus = (req, res) => {
  const { email, status } = req.body;
  let val = 0;
  switch (status) {
    case 'Admin': val = 1; break;
    case 'User': val = 0; break;
    case 'Merchant':val = 3; break;
    default: val = 0; break;
  }
  models.user
    .update({ isAdmin: val }, { where: { email } })
    .then(() => {
      res.json('Sucess');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while updating Admin status .',
      });
    });
};
exports.dormantUser = (req, res) => {
  const email = req.body.email;

  models.user.findOne({ where: { email } })
  .then(user => {
    const { status } = user;
  });
  let statusvalue;
  status == 0 ? statusValue = 1 : statusValue = 0;

  models.user
    .update({ status: statusvalue }, { where: { email } })
    .then((user) => {
      console.log(user);
      return res.json('sucess');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while dormanting Record .',
      });
    });
};

