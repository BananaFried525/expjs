export class Response {
    catchError = (err, req, res, next) => {
        res.status(err.code || 500).json(err);
    }
}

export class ThrowPayload {
    constructor(code, msg) {
        this.code = code;
        this.data = msg;
    }
}