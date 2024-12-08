import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

if (!process.env.GOOGLE_EMAIL) throw new Error("ERROR_ENV: GOOGLE_EMAIL missing")
if (!process.env.GOOGLE_KEY) throw new Error("ERROR_ENV: GOOGLE_KEY missing")
if (!process.env.GOOGLE_SHEET_ID) throw new Error("ERROR_ENV: GOOGLE_SHEET_ID missing")

const auth = new JWT({
    email: process.env.GOOGLE_EMAIL,
    key: process.env.GOOGLE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);

export async function getTitle() {
    await doc.loadInfo()
    console.log(doc.title)
}

// get sheets list 
export async function getSheetsList() {
    try {
        await doc.loadInfo()
        const sheetsList = doc.sheetsByIndex.map(sheet => sheet.title)
        return {
            code: 1,
            massage: "Sheet list :)",
            data: sheetsList
        }
    } catch (err) {
        return {
            code: 0,
            massage: "Sheet List error :(",
            data: []
        }
    }
}

export async function createNewSheet(sheetName: string) {
    await doc.loadInfo()
    const isExist = getSheetsList.
    const addsheet = await doc.addSheet({title: sheetName})
}

// get all row data in sheet
export async function getAllRowData(sheetName: string) {
    await doc.loadInfo()
    const sheet = doc.sheetsByTitle[sheetName]
    const rows = await sheet.getRows()
    const data = rows.map(row => {
        const rowData: Record<string, string> = {}
        sheet.headerValues.forEach(header => {
            rowData[header] = row.get(header)
        })
        return rowData
    })
    console.log(data);
}
