const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfc card', {
    'idNfc Card': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nfc card',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idNfc Card" },
        ]
      },
    ]
  });
};
