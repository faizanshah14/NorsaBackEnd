const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  return sequelize.define('nfcCard', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    number: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nfcCard',
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
    ]
  });
};
