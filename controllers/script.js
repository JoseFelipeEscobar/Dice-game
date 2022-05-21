const API = "http://localhost:8080/game";
const APIBet="http://localhost:8080/startGame";
const form = document.getElementsByTagName('form')[0];
const betform = document.getElementsByTagName('form1')[0];

//nombre de los apostadores
form.addEventListener('submit', async function(event){
    e.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const player3 = document.getElementById('player3').value;
    const data = await getData(player1,player2,player3);
})

//formulario de las apuestas
betform.addEventListener('submit',async function(event){
    e.preventDefault();
    const bet1 = document.getElementById('player1').value;
    const bet2 = document.getElementById('player2').value;
    const bet3 = document.getElementById('player3').value;
    const data = await getBet(bet1,bet2,bet3);
})

/**funcion para guardar los nombres de los jugadores en la base de datos
 * y traer un json de respuesta
 * 
 * @params player1
 * @params player2
 * @params player3
 * @returns JSon con el gameID, Nombres de los jugadores y su id  
*/
const postData = async (player1,player2,player3)=>{
    const apiURl = `${API}`
    // console.log(apiURl);
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify({
            gamers:[player1,player2,player3]
        })
    }
    try {
        const response = await fetch(apiURl,options);
        const data = await response.json();
        
        return data;
    }catch(error){
        console.log('Fetch Error', error);
    };
};

/** funcion para ingresar los datos de las apuesta de cada jugador 
 *  y traer un json de respuesta 
 * 
 * @params bet1 apuesta del jugador 1
 * @params bet2 apuesta del jugador 2
 * @params bet3 apuesta del jugador 3
 * @return Json con los datos del juego, y las apuestas ingresadas por cada jugador
*/

const postBet = async (bet1,bet2,bet3)=>{
    const apiURl = `${APIBet}` //llama a la ruta de api de start game
    // console.log(apiURl);
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify({
            betGamers:[bet1,bet2,bet3]
        })
    }
    try {
        const response = await fetch(apiURl,options);
        const data = await response.json();
        
        return data;
    }catch(error){
        console.log('Fetch Error', error);
    };
};