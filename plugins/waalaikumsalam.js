let handler = async (m, { conn }) => {
let thumb = '-'
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*`

await conn.sendFile(m.chat, thumb, 'shalat.jpg', `${caption}`, m)

       }
       
handler.customPrefix = /^(assalamualaikum|Salom|salam)/i
handler.command = new RegExp
module.exports = handler