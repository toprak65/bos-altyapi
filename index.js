const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env['token'], 
prefix: ["$getServerVar[prefix]", "<@$clientID>", "<@!$clientID>"], 
intents: "all" 
}) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

////////// Callbackler \\\\\\\\\\
bot.onJoin()
bot.onMessage()

////////// Durum \\\\\\\\\\
bot.status({
text:"Boş altyapı işte aw",
type:"PLAYING",
status:"dnd",
time: 12
})

////////// Variableler \\\\\\\\\\
bot.variables({
prefix:"prefix"
})
