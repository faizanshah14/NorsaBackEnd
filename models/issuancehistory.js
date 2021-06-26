const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  return sequelize.define('issuancehistory', {
    idIssuanceHistory: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DateAndTime: {
      type: Sequelize.DATE,
      allowNull: false
    },
    Amount: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    PaymentPeriod: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    TypeOfPayment: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    DateDeposit: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    Client_idClients: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'idClients'
      }
    },
    'Nfc Card_idNfcCard': {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'nfc card',
        key: 'idNfc Card'
      }
    },
    Merchants_idMerchants: {
      type: Sequelize.INTEGER,
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
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'idIssuanceHistory' },
        ]
      },
      {
        name: 'fk_IssuanceHistory_Client1_idx',
        using: 'BTREE',
        fields: [
          { name: 'Client_idClients' },
        ]
      },
      {
        name: 'fk_IssuanceHistory_NfcCard1_idx',
        using: 'BTREE',
        fields: [
          { name: 'Nfc Card_idNfc Card' },
        ]
      },
      {
        name: 'fk_IssuanceHistory_Merchants1_idx',
        using: 'BTREE',
        fields: [
          { name: 'Merchants_idMerchants' },
        ]
      },
    ]
  });
};
