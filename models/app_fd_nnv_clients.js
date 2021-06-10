const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  return sequelize.define('app_fd_nnv_clients', {
    id: {
      type: Sequelize.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    dateCreated: {
      type: Sequelize.DATE,
      allowNull: true
    },
    dateModified: {
      type: Sequelize.DATE,
      allowNull: true
    },
    createdBy: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    createdByName: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    modifiedBy: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    modifiedByName: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    c_code: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_name: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_familyName: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_address: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_TelPhoneNo: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_workPhoneNo: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_cellNo: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_faxNo: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_email: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_clientSince: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_identificationNo: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_badPayer: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_maxAmount: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_worksAt: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_remarks: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    c_status: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_fd_nnv_clients',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          {
            name: 'id'
          }
        ]
      },
    ]
  });
};
