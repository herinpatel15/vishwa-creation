import { Request, Response } from "express";
import { getTitle } from "../utils/sheets";
// import { GSheet } from "../utils/sheets";

import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import { googleEmail, googleKey, googleSheetId } from '../utils/envVariables';
import { msgLog } from "../utils/logger";

export async function register(req: Request, res: Response) {
    // const d = getTitle()
    // msgLog('email : ' + googleEmail + '\n' + 'key : ' + googleKey + '\n' + 'id : ' + googleSheetId + '\n')
    const auth = new JWT({
        email: googleEmail,
        key: googleKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })
    
    const doc = new GoogleSpreadsheet(googleSheetId, auth)
    await doc.loadInfo()    
    const d = doc.title
    // res.json({register: 'register done', data: 'ok'})
    res.json({register: 'register done', data: d})
}