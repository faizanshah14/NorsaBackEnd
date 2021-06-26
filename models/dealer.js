const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dealer', {
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
    NoOfIssuedCards: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MaxBorrowAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Group: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dealer',
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
    ]
  });
};
