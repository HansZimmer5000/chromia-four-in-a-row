import { initGame, setToken, getName } from "./comm";

// Compile with via 'tsc' and nodeJs to .js
// Then start script with 'node file.js'

async function startGame(){
    const id = "0"

    let userKeys = await initGame(id)

    console.log("SETTING")
    await setToken(id, "eins", userKeys)

    console.log("GETTING")
    let currentGame = await getName(id)
    console.log(currentGame)
    
    console.log("SETTING")
    await setToken(id, "zwei", userKeys)

    console.log("SETTING")
    await setToken(id, "zwei2", userKeys)

    console.log("GETTING")
    currentGame = await getName(id)
    console.log(currentGame)
}

startGame()