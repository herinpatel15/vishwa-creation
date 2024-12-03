if(!process.env.PORT) throw new Error('env error: PORT :(')
const port = process.env.PORT

if(!process.env.DB_URL) throw new Error('env error: DB_URL :(')
const dbUrl = process.env.DB_URL

if(!process.env.GOOGLE_EMAIL) throw new Error('env error: GOOGLE_EMAIL :(')
const googleEmail = process.env.GOOGLE_EMAIL

if(!process.env.GOOGLE_KEY) throw new Error('env error: GOOGLE_KEY :(')
const googleKey = process.env.GOOGLE_KEY?.replace(/\\n/g, '\n')

if(!process.env.GOOGLE_SHEET_ID) throw new Error('env error: GOOGLE_SHEET_ID :(')
const googleSheetId = process.env.GOOGLE_SHEET_ID

export {
    port,
    dbUrl,
    googleEmail,
    googleKey,
    googleSheetId
}