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


exports.getAllMerchantTypes = (req, res) => {
  const limit = req.params.limit ? null : 10;
  const offset = req.params.offset ? null : 10;
  models.merchanttype
    .findAll({ limit, offset })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All MerchantTypes.',
      });
    });
};

exports.getMerchantTypeById = (req, res) => {
  models.merchanttype
    .findByPk(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving MerchantTypes Record .',
      });
    });
};

exports.createMerchantType = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.merchanttype
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the MerchantTypes.',
      });
    });
};

exports.upsertMerchantType = (req, res) => {

  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.merchanttype
    .upsert(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the merchants.',
      });
    });
};

exports.deleteMerchantType = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const id = req.params.id;
  models.merchanttype
    .destroy({
      where: {
        id,
      },
    })
    .then((num) => {
      if (num === 1) {
        res.send({ message: 'MerchantTypes was deleted successfully!' });
      } else {
        res.send({
          message: `Cannot delete MerchantTypes with id=${id}. Maybe MerchantTypes was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while Deleting MerchantTypes.',
      });
    });
};

exports.getAllMerchantTypeDiscounts = (req, res) => {
  const limit = req.params.limit ? null : 10;
  const offset = req.params.offset ? null : 10;
  models.merchanttypediscount
    .findAll({ limit, offset })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All MerchantTypeDiscounts.',
      });
    });
};

exports.getMerchantTypeDiscountById = (req, res) => {
  models.merchanttypediscount
    .findByPk(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving MerchantTypeDiscounts Record .',
      });
    });
};

exports.createMerchantTypeDiscount = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.merchanttypediscount
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the MerchantTypeDiscounts.',
      });
    });
};

exports.upsertMerchantTypeDiscount = (req, res) => {

  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.merchanttypediscount
    .upsert(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the MerchantTypeDiscounts.',
      });
    });
};

exports.deleteMerchantTypeDiscount = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const id = req.params.id;
  models.merchanttypediscount
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
