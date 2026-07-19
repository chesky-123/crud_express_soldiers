import { BODY } from "./postMiddelwere.js";




export async function isValidId(req, res, next) {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        const err = new Error("invalid id");
        err.status = 400;
        return next(err)
    };
    return next();
};

export async function isValidCondition(req, res, next) {
    const condition = req.query;
    const conditionKeys = Object.keys(condition);
    const isNotValidCondition = conditionKeys.some(c => !BODY.includes(c));
    if (isNotValidCondition)  {
        const err = new Error("Invalid fields provided");
        err.status = 400;
        return next(err);
    };
    return next();
};