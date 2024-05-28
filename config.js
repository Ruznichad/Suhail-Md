const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94759139597";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_58_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYzLFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUnFPU0c1UE1hemcxdU5VenJIekxEemllZ25VNDNINTM5TUFxQ3JHRDZCST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1OTEzOTU5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTM2QzI5MzMwMkZBQzJCNEZBQ0MxRjQ0MDU5QzQ0MjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2OTAxMTAwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTkxMzk1OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJEMUJGMkM3NDE4QUQwQjM0NDg4ODA4MjEwQTlGNjI3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkwMTEwMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiZVhnUTZuNlFGZWZ1N3ZhMzhSalNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1NjY2MTNmLTY1NGUtNDk1Ni05MjUwLTU0YmU4NjM4ZmI4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxMDQsXG4gICAgICAxNjUsXG4gICAgICAxOTcsXG4gICAgICA1MixcbiAgICAgIDM3LFxuICAgICAgODUsXG4gICAgICAxOTEsXG4gICAgICAxMDcsXG4gICAgICAxMzMsXG4gICAgICAyMDEsXG4gICAgICAxNTcsXG4gICAgICAxMDYsXG4gICAgICAyNDMsXG4gICAgICAxNixcbiAgICAgIDY3LFxuICAgICAgMjA4LFxuICAgICAgMTE1LFxuICAgICAgMyxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAyMjAsXG4gICAgICA3OSxcbiAgICAgIDU4LFxuICAgICAgMTM1LFxuICAgICAgODgsXG4gICAgICAxMDIsXG4gICAgICAxNjEsXG4gICAgICAyOCxcbiAgICAgIDIwNyxcbiAgICAgIDIzMCxcbiAgICAgIDE1LFxuICAgICAgMjI0LFxuICAgICAgNDEsXG4gICAgICAxNjUsXG4gICAgICA4MSxcbiAgICAgIDE0OSxcbiAgICAgIDkzLFxuICAgICAgMTM3LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktNWjgzWUpIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1OTEzOTU5NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzU5NDM0NjE1MzE4NzU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZxMEY0UTVLblhzZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYWll5WkpTS2R6QXIvV2ZIb2pPOUQ4c3B3R3EyVlFPOVEwdTBJOGJqUlJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNRRHJyWXQzVE5NZWduVWFOWkpjZGxKaWs5dGxORkRNdDZMZjhXNVY3eTVsNndoQUROTmx0MFgwQkJoZEpONDVJdXppaSs0MmtOakErVktDQ3J2b0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjN0N3g0anEvQ0Vjb0g2bkkzbUFqTzZreFowYmpBM0lBbXpjMk5PaXhtR1Q5aXljSmtUekF0QlRsQTFiWGRXd1FaQ29HVnl2TzlmVWZyaS9QRGx4TGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU5MTM5NTk3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5MDEwOTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPZlhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9mWC5qc29uIjogIntcImtleURhdGFcIjpcInNGelg2dTNoTzdNNWxpWTBRZy9BUExMaGovM1lQMTZQM0w1VkJMa2ZZUDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4NDU2NjYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY5MDEwOTg3NDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
