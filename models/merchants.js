const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  return sequelize.define('merchants', {
    idMerchants: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    Name: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    Address: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    Device_idDevice: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'merchants',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'idMerchants' },
        ]
      },
    ]
  });
};
