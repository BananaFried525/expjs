const mongoose = require('mongoose');
const _config = require('../../config/config')(process.env.NODE_ENV);

const setUpMongoDb = async () => {
    try {
        let uri = '';
        if(_config.nodeEnv === 'dev') {
            uri = `mongodb://${_config.db.host}:${_config.db.port}/${_config.db.dbName}`
        } else {
            uri = `mongodb://${_config.db.user}:${_config.db.pwd}@${_config.db.host}:${_config.db.port}/${_config.db.dbName}`
        }
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connected db: ' + _config.db.dbName)
    } catch (error) {
        throw (error)
    }
}


export class DbModule {
    constructor() { }

    startUp = async () => {
        await setUpMongoDb();
    }
}