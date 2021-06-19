const dayjs = require("dayjs");

const genId = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const formatDate = (val) => {
    return dayjs(val).format('DD/MM/YYYY HHmmssZ');
}


module.exports = {
    formatDate,
    genId
}