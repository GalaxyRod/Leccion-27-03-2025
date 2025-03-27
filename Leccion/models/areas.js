'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class areas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      areas.belongsToMany(models.servicios, {
        through: models.serviciosxarea,
        foreignKey: 'id_area',
        otherKey: 'id_servicio'
      });
    }
  }
  areas.init({
    nombre: DataTypes.STRING,
    descricpion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'areas',
    timestamps: false // Disable timestamps

  });
  return areas;
};