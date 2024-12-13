import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { SheetReturn, WorkerSheet } from '../types';

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
export async function getSheetsList(): Promise<SheetReturn<string[]>> {
    try {
        await doc.loadInfo()
        const sheetsList = doc.sheetsByIndex.map(sheet => sheet.title)
        return {
            code: 1,
            message: "Sheet list :)",
            data: sheetsList
        }
    } catch (err) {
        return {
            code: 0,
            message: "Sheet List error :("
        }
    }
}

// create new sheet
export async function createNewSheet(
    {
        sheetName
    } : {
        sheetName: string
    }
): Promise<SheetReturn<string[]>> {
    try {
        await doc.loadInfo()
        const isExist = (await getSheetsList()).data?.some(e => e === sheetName);
        if (isExist) return { code: 0, message: "Sheet alrady exist :(" }
        const newSheet = await doc.addSheet({
            title: sheetName,
        })
        await newSheet.setHeaderRow(['timeStream', 'date', 'sari', 'price'])
        const newSheetList = (await getSheetsList()).data
        return {
            code: 1,
            message: "Sheet create successfully :)",
            data: newSheetList
        }
    } catch (err) {
        return {
            code: 0,
            message: "Create new sheet error :("
        }
    }
}

// add new row in sheet 
export async function setRowInSheet(
    {
        sheetName,
        data
    } : {
        sheetName: string,
        data: WorkerSheet
    }
): Promise<SheetReturn<string[]>> {
    try {
        await doc.loadInfo()
        const sheet = doc.sheetsByTitle[sheetName]
        // ['timeStream', 'date', 'sari', 'price'] 
        // const addRow = await sheet.addRow(data)
        const addRow = await sheet.addRows([
            data
        ])
        console.log(addRow);

        return {
            code: 0,
            message: 'new row added :)'
        }
    } catch (err) {
        console.log(err);

        return {
            code: 0,
            message: 'add row error :('
        }
    }
}

// get all row data in sheet
export async function getRowInSheet(
    {
        sheetName
    } : {
        sheetName: string
    }
) {
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

