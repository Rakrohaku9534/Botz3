let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let thum = 'https://telegra.ph/file/cb2ed2f23f898090cc259.jpg'
let reel =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 085786539008
┃Pulsa: 085786539008 
┃Pulsa: 085712408309
┃Gopay: 085786539008
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: -
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendFile(m.chat, thum, 'thumb.jpg', `${reel}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler