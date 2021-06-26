const models = require('../models/index');

exports.getAllMerchants = (req, res) => {
  models.merchants
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All merchants.',
      });
    });
};

exports.getMerchantId = (req, res) => {
  models.merchants
    .findByPk(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving merchants Record .',
      });
    });
};

exports.createMerchant = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.merchants
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the merchants.',
      });
    });
};

exports.upsertMerchant = (req, res) => {

  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.merchants
    .upsert(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the merchants.',
      });
    });
};

exports.deleteMerchant = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const id = req.params.id;
  models.merchants
    .destroy({
      where: {
        id: id,
      },
    })
    .then((num) => {
      if (num == 1) {
        res.send({ message: 'merchants was deleted successfully!' });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while Deleting merchants.',
      });
    });
};
