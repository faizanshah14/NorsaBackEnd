const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  return sequelize.define('issuancehistory', {
    id: {
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
    Client_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'id'
      }
    },
    NfcCard_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'nfcCard',
        key: 'id'
      }
    },
    Merchants_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'merchants',
        key: 'id'
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
          { name: 'id' },
        ]
      },
      {
        name: 'fk_IssuanceHistory_Client1_idx',
        using: 'BTREE',
        fields: [
          { name: 'Client_id' },
        ]
      },
      {
        name: 'fk_IssuanceHistory_NfcCard1_idx',
        using: 'BTREE',
        fields: [
          { name: 'NfcCard_id' },
        ]
      },
      {
        name: 'fk_IssuanceHistory_Merchants1_idx',
        using: 'BTREE',
        fields: [
          { name: 'Merchants_id' },
        ]
      },
    ]
  });
};
