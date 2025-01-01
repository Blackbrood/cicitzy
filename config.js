require("./lib/module")

// SETTING KONTAK
global.owner = "6289526156543"
global.ownername = "𝐂𝐢𝐜𝐢𝐓𝐳𝐲"
global.nomorbot = "6289526156543"
global.namaCreator = "𝐂𝐢𝐜𝐢𝐓𝐳𝐲"
global.Dec = "𝐂𝐢𝐜𝐢𝐓𝐳𝐲"
global.autoJoin = false
global.antilink = false

// THUMBNAIL (BEBAS GANTI)
global.imageurl = 'https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg'
global.channel = 'https://whatsapp.com/channel/0029VarnOfo1CYoPhQUMNa0D'

// STICKER
global.packname = "𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐁𝐲"
global.author = "𝐂𝐢𝐜𝐢𝐓𝐳𝐲"
global.jumlah = "5"


















// RESPON BOT
global.onlyprem = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*⍴rᥱmіᥙm s⍴ᥱᥴіᥲᥣ ᥴ᥆mmᥲᥒძ*`
global.onlyown = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*᥆ᥕᥒᥱr s⍴ᥱᥴі𝖿іᥴ ᥴ᥆mmᥲᥒძ*`
global.onlygroup = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*special command in group*`
global.onlyadmin = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*ᥲძmіᥒ s⍴ᥱᥴі𝖿іᥴ ᥴ᥆mmᥲᥒძ*`
global.notext = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*ᥕһᥱrᥱ іs 𝗍һᥱ 𝗍ᥱ᥊𝗍?*`
global.noadmin = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*ᑲ᥆𝗍 іs ᥒ᥆𝗍 ᥲძmіᥒ ᥡᥱ𝗍..!*`
global.succes = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*ძ᥆ᥒᥱ sіs ᑲᥱᥲᥙ𝗍і𝖿ᥙᥣ ᥴіᥴі*`
global.invalid = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*ᥱᥒ𝗍ᥱr ᥲ ᥎ᥲᥣіძ ᥒᥙmᑲᥱr*`
global.bugrespon = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*ᥕᥲі𝗍 𝖿᥆r 𝗍һᥱ ᑲ᥆𝗍 𝗍᥆ rᥱᥲᥴᥱ 𝗍᥆ 𝗍һᥱ ᥱm᥆ȷі 🎀*`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})