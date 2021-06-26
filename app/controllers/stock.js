import { GoodsSchema } from '../models/goods';
import { ThrowPayload } from '../services/response';
import { Util } from '../services/util';
import { Validate } from '../services/validate';
const _util = new Util();
const _validate = new Validate();

export class StockController {

    getAllStock = async (req, res, next) => {
        try {
            let { type, id } = req.query;
            let filter = {}
            if (!_validate.isEmpty(type)) filter.type = type;
            if (!_validate.isEmpty(id)) filter._id = id;

            let arrayGoods = await GoodsSchema.find(filter).select(['-__v']);
            res.status(200).json({ code: 200, data: arrayGoods });
        } catch (error) {
            let payload = new ThrowPayload();
            payload.code = error.code || 500;
            payload.data = error.msg || error;
            next(payload);
        }
    }

    postAddGoods = async (req, res, next) => {
        try {
            let body = req.body;
            StockController.validateBody(body);
            let newGoods = new GoodsSchema(body);
            await newGoods.save();
            res.status(200).json({ code: 200, data: 'create success' });
        } catch (error) {
            console.log(error)
            let payload = new ThrowPayload();
            payload.code = error.code || 500;
            payload.data = error.msg || error;
            next(payload);
        }
    }

    deleteGoods = async (req, res, next) => {
        try {
            let { id } = req.query;
            if (_validate.isEmpty(id)) throw ({ code: 403, msg: `require id` })
            let data = await GoodsSchema.findByIdAndDelete(id);
            if (_validate.isEmpty(data)) throw ({ code: 404, msg: `not found data` });
            res.status(200).json({ code: 200, data: 'delete success' })
        } catch (error) {
            let payload = new ThrowPayload();
            payload.code = error.code || 500;
            payload.data = error.msg || error;
            next(payload);
        }
    }

    updateGoods = async (req, res, next) => {
        try {
            let { id } = req.query;
            let body = req.body;
            // validate input //
            if (_validate.isEmpty(id)) throw ({ code: 403, msg: `require id` });
            StockController.validateBody(body);
            // validate input //
            await GoodsSchema.findByIdAndUpdate(id, body);
            res.status(200).json({ code: 200, data: 'update success' });
        } catch (error) {
            let payload = new ThrowPayload();
            payload.code = error.code || 500;
            payload.data = error.msg || error;
            next(payload);
        }
    }

    static validateBody = (body) => {
        let list = ['name', 'price', 'type', 'amount', 'title'];
        let missingParam = _validate.checkListInValue(list,body);
        if (missingParam.length > 0) {
            throw ({ code: 403, msg: `body required: ${missingParam}` });
        }
    }
}