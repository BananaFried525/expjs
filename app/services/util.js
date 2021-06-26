const dayjs = require("dayjs");
export class Util {
    constructor() { }
    genId = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    formatDate = (val) => {
        return dayjs(val).format('DD/MM/YYYY HHmmssZ');
    }

    replaceAll = (val, search, replace) => {
        return val.split(search).join(replace).trim();
    }
    
}