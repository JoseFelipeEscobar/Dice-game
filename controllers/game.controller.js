/**
 * @author: Jose Felipe Escobar Ballesta - jfejose10@gmail.com
 * @since 20/05/2022
 * @version 1.0.0
 */


const Game=require('../models/createGame.model')
const { uuid } = require('uuidv4');


/**
 * @description Funcion para crear el juego con los nombres de los jugadore que apuestan
 * @returns JSON con los nombres de los jugadores y el id  
 */

exports.createGame=function(req,res){
    try{
        const{gamers}=req.body;
        const gameModel=new Game({
        gamers:[{
            id:uuid(),
            name:gamers[0],
        },{
            id:uuid(),
            name:gamers[1]
        },{            
            id:uuid(),
            name:gamers[2],
        }]
        })
        gameModel.save()
            .then((result)=>res.json({
                id:result.gameid,
                type:"",
                gamers:[result.gamers[0].name,result.gamers[1].name,result.gamers[2].name],
                // [gamers[0],gamers[1],gamers[2]]
            }))
            .catch((err) => {res.status(404).json({
                "error": err.message,
                "message": "Error no se pudo crear el juego intentelo mas tarde"
              })});
            
    }
    catch(err){
        console.log(err)
    }
}

/** 
 * funcion para consultar el estado del juego
 * @returns JSON con todos los parametros del juego
 *   
 */
exports.gameStatus=function(req,res){
    const {gameid}=req.params;
    Game.findOne(gameid)  
        .then(result=>{ res.json({
            
            id: result.gameid,
            gamers: {
                id1: {
                    id: result.gamers[0].id,
                    name: result.gamers[0].name
                },
                id2: {
                    id: result.gamers[1].id,
                    name: result.gamers[1].name
                },
                id3: {
                    id: result.gamers[2].id,
                    name: result.gamers[2].name
                },
            },
            inProgress: false,
            winner: {
                id: result.gamers[1].id,
                name: result.gamers[1].name
            }
        })
        })
        .catch((err) => {res.status(404).json({
            "error": err.message,
            "message": "Game not found"
          })});
}

/**
 * controlador para comenzar las apuestas 
 * @returns JSON con los id de los jugadores y sus apuestas 
 */
exports.startGame=function(req,res){
    const {betGamers}=req.body;
    const {gameid}=req.params;
    Game.findOne(gameid)
        .then(result=>{
            let obj={};
            obj[result.gamers[0].id]=betGamers[0];
            obj[result.gamers[1].id]=betGamers[1];
            obj[result.gamers[2].id]=betGamers[2];
        
            res.json({
                id:result.gameid,
                type:"" ,
                gamerbet:obj,
            })
        })
        .catch((err) => {res.status(404).json({
            "error": err.message,
            "message": "Game not found"
          })});
}
/**
 * @description controlador para saber el ganador del juego
 * @returns JSON con el id y el nombre del jugador
 */
exports.winner=function(req,res){
    const {gameid}=req.params;
    Game.findOne(gameid)
        .then(result=>{
            let winner=Math.floor(Math.random() * 4);
            res.json({
                id:result.gamers[winner].id,
                name:result.gamers[winner].name,
            })
        })
        .catch((err) => {res.status(404).json({
            "error": err.message,
            "message": "Game not found"
          })});
}


