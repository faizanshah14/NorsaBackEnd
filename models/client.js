const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    idClients: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContactNo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    WorkNo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    WorksAt: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FaxNumber: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MaxBorrowAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Dealer_idClients: {
      type: DataTypes.INTEGER,
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
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idClients" },
        ]
      },
      {
        name: "fk_Client_Dealer1_idx",
        using: "BTREE",
        fields: [
          { name: "Dealer_idClients" },
        ]
      },
    ]
  });
};
