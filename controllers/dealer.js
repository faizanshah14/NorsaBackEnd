const models = require('../models/index');

exports.getAllDealers = (req, res) => {
  models.dealer
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All dealer.',
      });
    });
};

exports.getDealerById = (req, res) => {
  models.dealer
    .findByPk(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving dealer Record .',
      });
    });
};

exports.createDealer = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.dealer
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the dealer.',
      });
    });
};

exports.upsertDealer = (req, res) => {

  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.dealer
    .upsert(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the dealer.',
      });
    });
};

exports.deleteDealer = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const id = req.params.id;
  models.dealer
    .destroy({
      where: {
        id: id,
      },
    })
    .then((num) => {
      if (num == 1) {
        res.send({ message: 'dealer was deleted successfully!' });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while Deleting dealer.',
      });
    });
};