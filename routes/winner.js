const express=require('express')
const router=express.Router();
const gameController=require('../controllers/game.controller')


/**
 * @description GET / ruta para mostrar el status del juego
 * @returns un  json con el id, el nombre del jugador, status del juego,the winner
*/
router.get('/:id',gameController.gameStatus); //


/**
 * @description GET / ruta para mostrar el ganador
 * @returns un archivo json con el id y el nombre del jugador
*/
router.get('/:id/winner',gameController.winner);

module.exports = router;