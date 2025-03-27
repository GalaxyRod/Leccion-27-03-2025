'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servicios', [
      { id: 1, nombre: 'Consultoría TI', descricpion: 'Asesoría técnica especializada', precio: 1500, supervisor: 'Carlos López' },
      { id: 2, nombre: 'Capacitación', descricpion: 'Entrenamiento de personal', precio: 800, supervisor: 'María Pérez' },
      { id: 3, nombre: 'Auditoría Financiera', descricpion: 'Revisión de finanzas', precio: 2000, supervisor: 'Ana Gómez'},
      { id: 4, nombre: 'Campañas Publicitarias', descricpion: 'Promoción de productos', precio: 1200, supervisor: 'Luis Sánchez'},
      { id: 5, nombre: 'Soporte Técnico', descricpion: 'Asistencia a usuarios', precio: 500, supervisor: 'Laura Martínez' },
    ]);

    await queryInterface.bulkInsert('serviciosxareas', [

      { id_servicio: 1, id_area: 1, },
      { id_servicio: 1, id_area: 9,  },

      { id_servicio: 2, id_area: 2, },
      { id_servicio: 2, id_area: 5,  },

      { id_servicio: 3, id_area: 3,  },
      { id_servicio: 3, id_area: 10, },

      { id_servicio: 4, id_area: 4, },
      { id_servicio: 4, id_area: 10, },

      { id_servicio: 5, id_area: 1,  },
      { id_servicio: 5, id_area: 5,  },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviciosxareas', null, {});
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
