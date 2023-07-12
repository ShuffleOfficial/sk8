const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285823360959@s.whatsapp.net"]
global.nomerOwner = "6285823360959"
global.nomorOwner = ['6285823360959']
global.namaDeveloper = "ADITYA STORE JB"
global.namaBot = "Bot Whassap"
global.packname = ""
global.author = "By | RƝ᭄Mʀᯓ༆ɃłȺđɇ"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})