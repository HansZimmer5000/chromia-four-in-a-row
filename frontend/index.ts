import { createUser, createGame, bet, getUser, draw_player_card } from "./comm";

// Compile with via 'tsc' and nodeJs to .js
// Then start script with 'node file.js'

async function startGame(){
    const userKeys = await createUser("Edgar3")
    await createGame(userKeys)
    
    let user: any
    do  {
        await draw_player_card(userKeys)
        await bet(userKeys, 10)
        user = await getUser(userKeys)
        console.log(user.credit)
    } while (user.credit > 0)
}

startGame()