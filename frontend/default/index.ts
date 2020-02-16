import { initGame, setToken, getField } from "./comm";

// Compile with via 'tsc' and nodeJs to .js
// Then start script with 'node file.js'

async function startGame(){
    const id = "0"

    let userKeys = await initGame(id)

    console.log("SETTING")
    await setToken(id, 1, userKeys)

    console.log("GETTING")
    let currentGame = await getField(id)
    console.log(currentGame)
    
    console.log("SETTING")
    await setToken(id, 0, userKeys)

    console.log("SETTING")
    await setToken(id, 0, userKeys)

    console.log("GETTING")
    currentGame = await getField(id)
    console.log(currentGame)
}

//startGame()
let env = process.env["NODE_ENV"];