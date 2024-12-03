import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import { msgLog } from './logger';
import { googleEmail, googleKey, googleSheetId } from './envVariables';

// export class GSheet {

//     private doc: GoogleSpreadsheet;
    
//     constructor() {
//         const auth = new JWT({
//             email: process.env.GOOGLE_EMAIL,
//             key: process.env.GOOGLE_KEY,
//             scopes: ['https://www.googleapis.com/auth/spreadsheets']
//         })
//         this.
//     }

//     async initSheet() {
//         await this.doc.loadInfo()
//         msgLog(this.doc.title)
//         return this.doc.title
//     }
// }

const auth = new JWT({
    email: googleEmail,
    key: googleKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

const doc = new GoogleSpreadsheet(googleSheetId, auth)

export async function getTitle() {
    await doc.loadInfo()
    return doc.title
}