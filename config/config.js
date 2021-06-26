let config = {
    dev: {
        nodeEnv: "dev",
        port: "8081",
        db: {
            user: 'root',
            pwd: 'atd',
            host: 'localhost',
            port: '27017',
            dbName: 'dev'
        }
    },
    test: {
        nodeEnv: "test",
        port: "8081",
        db: {
            user: process.env.db_user || '',
            pwd: process.env.db_pwd || '',
            host: process.env.db_host || 'localhost',
            port: process.env.db_post || '27017',
            dbName: process.env_db_name || 'test'
        }
    }
};

module.exports = get = (env) => {
    switch (env.trim()) {
        case "dev":
            return config.dev;
        case "test":
            return config.test;
        default:
            return config.dev;
    }
}