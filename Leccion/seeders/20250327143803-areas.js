'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('areas', [
      { nombre: 'Tecnología de la Información', descricpion: 'Área de TI' },
      { nombre: 'Recursos Humanos', descricpion: 'Área de RRHH'},
      { nombre: 'Finanzas', descricpion: 'Área financiera' },
      { nombre: 'Marketing', descricpion: 'Área de marketing'},
      { nombre: 'Atención al Cliente', descricpion: 'Área de atención al cliente' },
      { nombre: 'Logística', descricpion: 'Área logística'},
      { nombre: 'Producción', descricpion: 'Área de producción'},
      { nombre: 'Salud y Seguridad', descricpion: 'Área de seguridad laboral'},
      { nombre: 'Investigación y Desarrollo', descricpion: 'Área de I+D' },
      { nombre: 'Ventas', descricpion: 'Área de ventas' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('areas', null, {});
  }
};
