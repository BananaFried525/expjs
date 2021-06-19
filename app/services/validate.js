const isNumber = (val) => {
    let reg = /^[0-9]*$/;
    return reg.test(val);
}

const isEmpty = (val) => {
    if (val === null || val === undefined) return true;
    if (typeof val === 'string' && val === "") return true;
    if (val.length <= 0) return true;
    if (typeof val === 'object' && Object.keys(val).length === 0) return true;
    return false;
}

module.exports = {
    isNumber,
    isEmpty
}