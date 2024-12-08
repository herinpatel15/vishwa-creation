require('dotenv').config()
import { createNewSheet, getAllRowData, getTitle } from "./lib/gSheet";

(async function () {
    console.log('hello herin')
    // getTitle()
    // getAllRowData('admins')
    console.log(await createNewSheet('bye'));
    
})();