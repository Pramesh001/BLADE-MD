const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94713368325'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'prameshnilakshan208@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'srilanka'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "94713368325"
global.devs = '94713368325'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFOUG9BUTh5dmtzRUVYY3E4cFphT0d1ZUFUaUpGY2ZTU3hPem9DUXBuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEJBVC92UUZrTGh2Mk5yOWlQUlEzVW04RmZ6dEJ6Ui9nY2xFdTloWThBbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRS2s5SXVvd01KTVBZM3RXcE5UZTNudVdZMEErT01kV2JJY3AxZ29lbG00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCNkJDNXAxV05xUG1CWTBIUXJrc3p1eFhtaGRUODVkbXR0MXlDNXhuV2lvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIS28zaSt4SGU1YmdhMS83dTMxME5kKzRVRXlnZnpYL213WmlacTdERWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc4NDBCOVVDWXpiRjcrUTdMemxWUmQwMlpYR0pmTW82ZWR5OWQ2bW1Ubmc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmU0VaSE9VR24vQ2lLdzhoOUNBK2o5bGhvdElCazhBYjM2UnRmN0ZvY3g3WW10RXhwZ3Y1bkdPcXdVbmxRaVgvVU9aNzYvRG5LeFBibWQ5Y1BNUDloQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyNSwiYWR2U2VjcmV0S2V5IjoiaitVUndJc011QVNzTHpZcVRheURpY09TK2paeTJIZEpoK1NKYkp1NzdDZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia25DMFJTTXpRSXEwbDFTTnYtSGExUSIsInBob25lSWQiOiI0NGFlZjQ5Ni0yYmY3LTRkMzctOTkyZS0xMTZhMzc2YWYyODQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkM0ZEp2bkFEV2tuVk16UUFwQkFrNVpYZHdvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrd096dmtnK3pyYXZncEdGL1c0T2g2SERXMXc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLR1hpN1FCRVBLVjI2d0dHQWc9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZoUU9TbFVTUm1XdUh5T1o0RFZrNUhwQXNZckVGUVhBVEhJNHhUVDFVRGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImF6cHAwWUt2eGpkMXBCTk5lY0hCWjFaSmc1eUxYU1hPS1gvMWM1ZlNYNkJnaHU2V3VRQWJNR2hud00vcHcyWHBkekpUTlNIOU00eWhCU25lTHIzakRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2TmJZU3hTa3F3M0xlNXBRL3VTY1doWWNTeThibmN5aC9lMGUyQmxiaW9PalN3RUpCeHZvTU9odk5MY2pyR1gxNE43Wm5INVVGWWdvMkVyWE5HU0ZqQT09In0sIm1lIjp7ImlkIjoiOTQ3ODMwMzc5NDM6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJwcmFtZXNobmlsYWtzaGFuMjA4In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgzMDM3OTQzOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUllVRGtwVkVrWmxyaDhqbWVBMVpPUjZRTEdLeEJVRndFeHlPTVUwOVZBNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDM4MTE3MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKelQifQ==",   // put the session 
  author:  process.env.PACK_AUTHER ||  '𝙏𝙍𝘼𝙉𝙎𝙁𝙊𝙍𝙈𝙀𝙍 𝘾𝙊𝘿𝙀',
  packname:  process.env.PACK_NAME || 'MADE BY 𝐏𝐑𝐀𝐌𝐄𝐒𝐇 𝐍𝐈𝐋𝐀𝐊𝐒𝐇𝐀𝐍',
  
  botname:   process.env.BOT_NAME === undefined ? "𝐊𝐈𝐍𝐆 𝐑𝐀𝐕𝐀𝐍𝐀 𝐌𝐃" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'alexdavid' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "𝐊𝐈𝐍𝐆 𝐑𝐀𝐕𝐀𝐍𝐀 𝐌𝐃 : 𝙏𝙍𝘼𝙉𝙎𝙁𝙊𝙍𝙈𝙀𝙍 𝘾𝙊𝘿𝙀 ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
