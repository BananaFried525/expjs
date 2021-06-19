const _util = require('../services/util');
const _validate = require('../services/validate');

class User {
    id = "";
    userName = "";
    email = "";
    mobileNo = "";
    createAt = "";
    updateAt = "";
}

const createUser = (userName, email, mobileNo) => {
    if (_validate.isEmpty(userName) || _validate.isEmpty(email) || _validate.isEmpty(mobileNo)) return -1;
    let nUser = new User();
    nUser.userName = userName;
    nUser.email = email;
    nUser.mobileNo = mobileNo;
    nUser.createAt = _util.formatDate();
    nUser.updateAt = _util.formatDate();
    nUser.id = _util.genId(10);
    return nUser
}

module.exports = {
    User,
    createUser
}