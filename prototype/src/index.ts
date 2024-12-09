require('dotenv').config()
import { createNewSheet, getTitle, setRowInSheet } from "./lib/gSheet";

(async function () {
    console.log('hello herin')
    // getTitle()
    // getAllRowData('admins')
    // console.log(await createNewSheet('test123'));
    const data = {
        timeStream: '10:00 AM',
        date: '2024-12-08',
        sari: 2,
        price: 2,
    };

    const test1 = await setRowInSheet({
        sheetName: 'test123',
        data
    })
    console.log(test1);
    
})();