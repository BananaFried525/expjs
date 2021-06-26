import { Util } from "./util";

export class Validate {
    isNumber = (val) => {
        let reg = /^[0-9]*$/;
        return reg.test(val);
    }

    isEmpty = (val) => {
        if (val === null || val === undefined) return true;
        if (typeof val === 'string' && val === "") return true;
        if (val.length <= 0) return true;
        if (typeof val === 'object' && Object.keys(val).length === 0) return true;
        return false;
    }

    isArray = (list) => {
        if (Array.isArray(list)) return true;
        return false;
    }

    checkListInValue = (list, obj) => {
        if (this.isEmpty(list) || !this.isArray(list)) throw ('require "list"');
        if (this.isEmpty(obj)) throw ('require "object"');
        let missing = '';
        list.forEach((val) => {
            if (this.isEmpty(obj[val])) missing += `${val} `
        });
        return new Util().replaceAll(missing, ' ', ',');
    }
}