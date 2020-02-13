import { initGame, setToken, getGame } from "./comm";

// Compile with via 'tsc' and nodeJs to .js
// Then start script with 'node file.js'

async function startGame(){
    const id = "13"

    const userKeys = await initGame(id)
    await setToken(id, 0, userKeys)
    let currentGame = await getGame(id)
    console.log(currentGame)
    await setToken(id, 0, userKeys)
    currentGame = await getGame(id)
    console.log(currentGame)
}

startGame()