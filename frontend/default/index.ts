import { initGame, setToken, getField, setToken2, getGame } from "./comm";

// Compile with via 'tsc' and nodeJs to .js
// Then start script with 'node file.js'

async function startGame(){
    const id_raw = Math.floor((Math.random() * 100) + 1);
    const id = id_raw.toString();

    let userKeys = await initGame(id)

    console.log("SETTING1")
    await setToken(id, 1, userKeys)

    console.log("GETTING1")
    let currentGame = await getField(id)
    console.log(currentGame)
    
    console.log("SETTING2")
    await setToken(id, 0, userKeys)

    console.log("SETTING3")
    console.log(await setToken2(id, 0));
    //await setToken(id, 0, userKeys)

    console.log("GETTING2")
    console.log(await getGame(id));


    currentGame = await getField(id)
    console.log(currentGame)
}

startGame()