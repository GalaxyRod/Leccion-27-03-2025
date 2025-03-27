'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviciosxarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      serviciosxarea.belongsTo(models.servicios, { foreignKey: 'id_servicio' });
      serviciosxarea.belongsTo(models.areas, { foreignKey: 'id_area' });
    }
  }
  serviciosxarea.init({
    id_servicio: DataTypes.INTEGER,
    id_area: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serviciosxarea',
    timestamps: false // Disable timestamps

  });
  return serviciosxarea;
};