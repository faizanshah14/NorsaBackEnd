var DataTypes = require("sequelize").DataTypes;
var _app_fd_nnv_clients = require("./app_fd_nnv_clients");
var _client = require("./client");
var _dealer = require("./dealer");
var _device = require("./device");
var _issuancehistory = require("./issuancehistory");
var _merchants = require("./merchants");
var _nfc card = require("./nfc card");
var _user = require("./user");
var _users = require("./users");

function initModels(sequelize) {
  var app_fd_nnv_clients = _app_fd_nnv_clients(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var dealer = _dealer(sequelize, DataTypes);
  var device = _device(sequelize, DataTypes);
  var issuancehistory = _issuancehistory(sequelize, DataTypes);
  var merchants = _merchants(sequelize, DataTypes);
  var nfc card = _nfc card(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  issuancehistory.belongsTo(client, { as: "Client_idClients_client", foreignKey: "Client_idClients"});
  client.hasMany(issuancehistory, { as: "issuancehistories", foreignKey: "Client_idClients"});
  client.belongsTo(dealer, { as: "Dealer_idClients_dealer", foreignKey: "Dealer_idClients"});
  dealer.hasMany(client, { as: "clients", foreignKey: "Dealer_idClients"});
  issuancehistory.belongsTo(merchants, { as: "Merchants_idMerchants_merchant", foreignKey: "Merchants_idMerchants"});
  merchants.hasMany(issuancehistory, { as: "issuancehistories", foreignKey: "Merchants_idMerchants"});
  issuancehistory.belongsTo(nfc card, { as: "Nfc Card_idNfc Card_nfc card", foreignKey: "Nfc Card_idNfc Card"});
  nfc card.hasMany(issuancehistory, { as: "issuancehistories", foreignKey: "Nfc Card_idNfc Card"});

  return {
    app_fd_nnv_clients,
    client,
    dealer,
    device,
    issuancehistory,
    merchants,
    nfc card,
    user,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
