const express=require('express')
const router=express.Router();
const gameController=require('../controllers/game.controller')


/**
 * @description POST / route to create the game  
 */
router.post('/', gameController.createGame);

/** 
 * @description GET / render form page.
 * muestra la pagina donde se ingresa los nombres de los jugadores 
 */
router.get('/', (req, res) => {
    res.render('index');
  });

module.exports = router;

