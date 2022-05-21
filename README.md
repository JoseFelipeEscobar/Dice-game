
# Juego demo de apuestas con dados
Este es un demo para el juego de dados <br>
@author: Jose Felipe Escobar Ballesta - jfejose10@gmail.com
El proyecto fue desarrollado con Visual Studio Code y mongodb compass

## Database
    > the mongo database is running in localhost 27017
    > the database name: 'games'
## How to run the project
    > npm run dev -> run dev mode
    > npm run start -> run standard

## Routes
    > home -> localhost:8080/

    "GET"
    > create-game -> localhost:8080/createGame
    > game-status -> localhost:8080/game/:id
    > game-winner -> localhost:8080/game/:id/winner
    > start-game -> localhost:8080/startGame

    "POST"
    > create-game -> localhost:8080/createGame
    > start-game -> localhost:8080/startGame