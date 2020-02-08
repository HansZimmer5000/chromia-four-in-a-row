import { initGame, setToken } from "./comm";

// Compile with via 'tsc' and nodeJs to .js
// Then start script with 'node file.js'

async function startGame(){
    const userKeys = await initGame("0")
    await setToken("0", 0, userKeys)
}

startGame()