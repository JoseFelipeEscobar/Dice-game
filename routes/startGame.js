var express = require('express');
var router = express.Router();
const gameController=require('../controllers/game.controller')

/**
 *  @description POST/ para comenzar el juego
 * */
router.post('/',gameController.startGame);
/**
 *  @description GET/ ruta de pagina formulario para crear el juego 
 */
router.get('/', (req,res) => {
    res.render('betForm');
  });
  

module.exports = router;