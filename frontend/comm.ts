import {TableFullInfo, TableParticipantInfo, TableInfo, UserKeys} from './types'

/* eslint @typescript-eslint/no-var-requires: warn */
const pcl = require('postchain-client')

// Check the node log on rellide-staging.chromia.dev to get node api url.
// const nodeApiUrl = 'https://rellide-staging.chromia.dev/node/XXXXX/'
const nodeApiUrl = 'https://rellide-staging.chromia.dev/node/10061/'
const blockchainRID = '886DF4AC890A8D189DB6AB3E2CA61DA8B3C86961CEA7BA94522130525F2B2C52'

const rest = pcl.restClient.createRestClient(nodeApiUrl, blockchainRID, 5)
const gtx = pcl.gtxClient.createClient(
	rest,
	Buffer.from(
		blockchainRID,
		'hex'
	),
	[]
)

function keysBufferToString(b: Buffer): string {
	return b.toString('hex')
}

function keysStringToBuffer(s: string): Buffer {
	return Buffer.from(s, 'hex')
}

async function doOperations(keys: UserKeys, addOps: (tx: any) => void): Promise<void> {
	const tx = gtx.newTransaction([keysStringToBuffer(keys.pubKey)])

	addOps(tx)

	tx.sign(keysStringToBuffer(keys.privKey), keysStringToBuffer(keys.pubKey))
	await tx.postAndWaitConfirmation()
}

export async function createUser(name: string): Promise<UserKeys> {
	const user = pcl.util.makeKeyPair()
	const {pubKey, privKey} = user
	const keys: UserKeys = {
		pubKey: keysBufferToString(pubKey),
		privKey: keysBufferToString(privKey)
	}

	await doOperations(keys, tx => {
		tx.addOperation('create_user', name, pubKey)
	})

	return keys
}

export async function createGame(userKeys: UserKeys): Promise<void> {
	await doOperations(userKeys, tx => {
		tx.addOperation('create_game', keysStringToBuffer(userKeys.pubKey), 20000)
	})
}

export async function draw_player_card(userKeys: UserKeys): Promise<void> {
	await doOperations(userKeys, tx => {
		tx.addOperation('draw_player_card', keysStringToBuffer(userKeys.pubKey))
		tx.addOperation('nop', Math.floor(Math.random() * 10000))
	})
}

export async function bet(userKeys: UserKeys, bet: number): Promise<void> {
	await doOperations(userKeys, tx => {
		tx.addOperation('bet', keysStringToBuffer(userKeys.pubKey), bet)
		tx.addOperation('nop', Math.floor(Math.random() * 10000))
	})
}



export async function getUser(userKeys: UserKeys): Promise<{credit: number; name: string}> {
	const result = await gtx.query(
		'get_user',
		{
			pubkey: userKeys.pubKey
		}
	)

	return result
}
/* Old Example code from Edgars Repo from here on:
export async function getTables(): Promise<TableInfo[]> {
	const raw = await gtx.query(
		'getTables',
		{}
	)

	return raw
}

export async function getOpenTables(userKeys: UserKeys): Promise<TableInfo[]> {
	const raw = await gtx.query(
		'getOpenTables',
		{
			pubkey: userKeys.pubKey
		}
	)

	return raw
}

export async function getPlayerTables(userKeys: UserKeys): Promise<TableParticipantInfo[]> {
	const raw = await gtx.query(
		'getPlayerTables',
		{
			pubkey: userKeys.pubKey
		}
	)

	return raw
}

export async function getTable(tableName: string): Promise<TableFullInfo> {
	const raw = await gtx.query(
		'getGame',
		{
			name: tableName
		}
	)

	return raw
}
*/