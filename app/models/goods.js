import mongoose, { Schema } from 'mongoose';
import { Util } from '../services/util';
const _util = new Util();

const schema = new Schema({
    name: String,
    price: String,
    amount: String,
    type: String,
    title: String,
    subTitle: String,
    desc: String,
    createAt: { type:String,default: _util.formatDate()},
    createBy: { type:String,default: 'admin'},
    updateAt: { type:String,default: _util.formatDate()},
    UpdateBy: { type:String,default: 'admin'},
});

export const GoodsSchema = mongoose.model('Goods', schema)
