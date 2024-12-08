require('dotenv').config()
import { createNewSheet, getAllRowData, getTitle } from "./lib/gSheet";

(function () {
    console.log('hello herin')
    getTitle()
    getAllRowData('admins')
    createNewSheet('test')
})();