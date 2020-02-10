import { initGame, setToken, getGame } from "./comm";

// Compile with via 'tsc' and nodeJs to .js
// Then start script with 'node file.js'

async function startGame(){
    const id = "1"
    const userKeys = await initGame(id)
    await setToken(id, 0, userKeys)
    console.log("GETGAME")
    const currentGame = await getGame(id)
    console.log(currentGame)
}

startGame()