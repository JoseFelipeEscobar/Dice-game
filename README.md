
# Juego demo de apuestas con dados
Este es un demo para el juego de dados <br>
@author: Jose Felipe Escobar Ballesta - jfejose10@gmail.com <br>
El proyecto fue desarrollado con Visual Studio Code

mira el juego aqui: [crear juego](https://dice-game-api.herokuapp.com/createGame "juego de apuestas de dados virtual")

## Database
    > the mongo database is running in localhost 27017
    > the database name: 'games'
## How to run the project
    > npm run dev -> run dev mode
    > npm run start -> run standard

## Routes
    "GET"
    > create-game -> localhost:8080/createGame
    > game-status -> localhost:8080/game/:id
    > game-winner -> localhost:8080/game/:id/winner
    > start-game -> localhost:8080/startGame

    "POST"
    > create-game -> localhost:8080/createGame
    > start-game -> localhost:8080/startGame
