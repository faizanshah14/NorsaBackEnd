const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  return sequelize.define('client', {
    idClients: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    FirstName: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    LastName: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    Status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    ContactNo: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    WorkNo: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    WorksAt: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    FaxNumber: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    MaxBorrowAmount: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Dealer_idClients: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'dealer',
        key: 'idClients'
      }
    }
  }, {
    sequelize,
    tableName: 'client',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'idClients' },
        ]
      },
      {
        name: 'fk_Client_Dealer1_idx',
        using: 'BTREE',
        fields: [
          { name: 'Dealer_idClients' },
        ]
      },
    ]
  });
};