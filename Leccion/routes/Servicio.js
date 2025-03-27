var express = require('express');
var router = express.Router();
const { servicios } = require('../models');
const {Sequalize, Op} = require('sequelize');


/* GET home page. */
router.get('/', function(req, res, next) {
    servicios.findAll()
        .then(servicios => {
        res.render('todo', { title: 'Servicio', arrServ: servicios });
        })
        .catch(err => {
        console.error('Error fetching servicios:', err);
        res.render('todo', { title: 'Servicio', arrServ: [] });
        });    
});

router.get('/:id', function(req, res, next) {
  servicios.findAll({
  where: { 
    [Op.and]: [
        {id: id}
    ]
  }
})
    .then(servicios => {
      res.render('Servicio', { title: 'Servicio', arrService: servicios });
    })
    .catch(err => {
      console.error('Error fetching servicios:', err);
      res.render('Servicio', { title: 'Servicio', arrServ: [] });
    });
});

router.get('/precios', function(req, res, next) {
    let lower = parseFloat(req.query.lower);
    let higher = parseFloat(req.query.higher);
    servicios.findAll({
        where: {
            precio: {
                [Op.between]: [lower, higher]
            }
        }
    })
    .then(servicios => {
        res.render('Precios', { title: 'Rango Precios', servicios: servicios});
    })
    .catch(err => res.status(400).send(err))
});

module.exports = router;