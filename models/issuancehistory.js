const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issuancehistory', {
    idIssuanceHistory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'Date&Time': {
      type: DataTypes.DATE,
      allowNull: false
    },
    Amount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PaymentPeriod: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    TypeOfPayment: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DateDeposit: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Client_idClients: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'idClients'
      }
    },
    'Nfc Card_idNfc Card': {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nfc card',
        key: 'idNfc Card'
      }
    },
    Merchants_idMerchants: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'merchants',
        key: 'idMerchants'
      }
    }
  }, {
    sequelize,
    tableName: 'issuancehistory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idIssuanceHistory" },
        ]
      },
      {
        name: "fk_IssuanceHistory_Client1_idx",
        using: "BTREE",
        fields: [
          { name: "Client_idClients" },
        ]
      },
      {
        name: "fk_IssuanceHistory_Nfc Card1_idx",
        using: "BTREE",
        fields: [
          { name: "Nfc Card_idNfc Card" },
        ]
      },
      {
        name: "fk_IssuanceHistory_Merchants1_idx",
        using: "BTREE",
        fields: [
          { name: "Merchants_idMerchants" },
        ]
      },
    ]
  });
};
