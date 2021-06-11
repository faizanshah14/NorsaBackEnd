const models = require('../models/index');

exports.getAllClients = (req, res) => {
  models.app_fd_nnv_clients
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All clients.',
      });
    });
};

exports.getClientById = (req, res) => {
  models.app_fd_nnv_clients
    .findByPk(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving CLient Record .',
      });
    });
};

exports.createClient = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const client = {
    id: req.body.id,
    dateCreated: req.body.dateCreated,
    dateModified: req.body.dateModified,
    createdBy: req.body.createdBy,
    createdByName: req.body.createdByName,
    modifiedBy: req.body.modifiedBy,
    modifiedByName: req.body.modifiedByName,
    c_code: req.body.c_code,
    c_name: req.body.c_name,
    c_familyName: req.body.c_familyName,
    c_address: req.body.c_address,
    c_TelPhoneNo: req.body.c_TelPhoneNo,
    c_workPhoneNo: req.body.c_workPhoneNo,
    c_cellNo: req.body.c_cellNo,
    c_faxNo: req.body.c_faxNo,
    c_email: req.body.c_email,
    c_clientSince: req.body.c_clientSince,
    c_identificationNo: req.body.c_identificationNo,
    c_badPayer: req.body.c_badPayer,
    c_maxAmount: req.body.c_maxAmount,
    c_worksAt: req.body.c_worksAt,
    c_remarks: req.body.c_remarks,
    c_status: req.body.c_status,
  };
  models.app_fd_nnv_clients
    .create(client)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the CLient.',
      });
    });
};

exports.upsertClient = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const client = {
    id: req.body.id,
    dateCreated: req.body.dateCreated,
    dateModified: req.body.dateModified,
    createdBy: req.body.createdBy,
    createdByName: req.body.createdByName,
    modifiedBy: req.body.modifiedBy,
    modifiedByName: req.body.modifiedByName,
    c_code: req.body.c_code,
    c_name: req.body.c_name,
    c_familyName: req.body.c_familyName,
    c_address: req.body.c_address,
    c_TelPhoneNo: req.body.c_TelPhoneNo,
    c_workPhoneNo: req.body.c_workPhoneNo,
    c_cellNo: req.body.c_cellNo,
    c_faxNo: req.body.c_faxNo,
    c_email: req.body.c_email,
    c_clientSince: req.body.c_clientSince,
    c_identificationNo: req.body.c_identificationNo,
    c_badPayer: req.body.c_badPayer,
    c_maxAmount: req.body.c_maxAmount,
    c_worksAt: req.body.c_worksAt,
    c_remarks: req.body.c_remarks,
    c_status: req.body.c_status,
  };
  models.app_fd_nnv_clients
    .upsert(client)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the CLient.',
      });
    });
};

exports.deleteClient = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const id = req.params.id;
  models.app_fd_nnv_clients
    .destroy({
      where: {
        id: id,
      },
    })
    .then((num) => {
      if (num == 1) {
        res.send({ message: 'Client was deleted successfully!' });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while Deleting client.',
      });
    });
};
