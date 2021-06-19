let config = {
    dev: {
        nodeEnv: "dev",
        port: "8081",
    }
};

module.exports = get = (env) => {

    switch (env) {
        case "dev":
            return config.dev;
        default:
            return config.dev;
    }
}