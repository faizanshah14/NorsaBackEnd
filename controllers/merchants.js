const models = require('../models/index');

exports.getAllMerchants = (req, res) => {
  const limit = req.params.limit ? null : 10;
  const offset = req.params.offset ? null : 10;
  models.merchants
    .findAll({ limit, offset })
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

exports.getMerchantById = (req, res) => {
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
        id,
      },
    })
    .then((num) => {
      if (num === 1) {
        res.send({ message: 'merchants was deleted successfully!' });
      } else {
        res.send({
          message: `Cannot delete merchants with id=${id}. Maybe merchants was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while Deleting merchants.',
      });
    });
};
