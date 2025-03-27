'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      servicios.belongsToMany(models.areas, {
        through: models.serviciosxarea,
        foreignKey: 'id_servicio',
        otherKey: 'id_area'
      });
    }
  }
  servicios.init({
    nombre: DataTypes.STRING,
    descricpion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    supervisor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'servicios',
    timestamps: false // Disable timestamps

  });
  return servicios;
};