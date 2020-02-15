import {TableFullInfo, TableParticipantInfo, TableInfo, UserKeys} from './types'

/* eslint @typescript-eslint/no-var-requires: warn */
const pcl = require('postchain-client')

// Check the node log on rellide-staging.chromia.dev to get node api url.
// const nodeApiUrl = 'https://rellide-staging.chromia.dev/node/XXXXX/'
// https://rellide-staging.chromia.dev/node/10125/brid/iid_0
const nodeApiUrl = 'https://rellide-staging.chromia.dev/node/10155/'
const blockchainRID = '813BD267A03222939B5363139B070344EEC1EF726CA2A9F0D26B3FC6410AAAB0'

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

export async function initGame(id: string): Promise<UserKeys> {
	const user = pcl.util.makeKeyPair()
	const {pubKey, privKey} = user
	const keys: UserKeys = {
		pubKey: keysBufferToString(pubKey),
		privKey: keysBufferToString(privKey)
	}

	await doOperations(keys, tx => {
        tx.addOperation('init_game', id)
	})

	return keys
}

export async function setToken(id: string, col: number, keys: UserKeys): Promise<UserKeys> {
	await doOperations(keys, tx => {
        tx.addOperation('set_token', id, col)
	})

	return keys
}


export async function getField(id: string): Promise<any> {
	const raw = await gtx.query(
		'getField',
		{
			id: id
		}
	)

	//const names = raw.map((o: any) => o.name)

	return raw
}