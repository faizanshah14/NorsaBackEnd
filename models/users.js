const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email"
    },
    accessToken: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    refreshToken: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    emailConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    emailConfirmationToken: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    resetPasswordToken: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resetPasswordTokenExpiration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
