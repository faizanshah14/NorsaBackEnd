const models = require('../models/index');

/**
 * confirm email
 * @param {*} req
 * @param {*} res
 */
exports.getAllClients = (req, res) => {
  models.app_fd_nnv_clients.findAll().then(data => { res.json(data); }).catch(err => {
    res.status(500).send({
      message:
        err.message || 'Some error occurred while retrieving tutorials.'
    });
  });
};


/**
 * confirm email
 * @param {*} req
 * @param {*} res
 */
exports.getClientById = (req, res) => {
  models.app_fd_nnv_clients.findByPk(req.params.id).then(data => { res.json(data); }).catch(err => {
    res.status(500).send({
      message:
        err.message || 'Some error occurred while retrieving tutorials.'
    });
  });
};
