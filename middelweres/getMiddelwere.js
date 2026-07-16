import { BODY } from "./postMiddelwere.js";




export async function isValidId(req, res, next) {
    const { id } = req.params;
    if (!id || isNaN(id)) return res.status(400).json({ error: "invalid id" });
    return next();
};

export async function isValidCondition(req, res, next) {
    const condition = req.query;
    const conditionKeys = Object.keys(condition);
    const isNotValidCondition = conditionKeys.some(c => !BODY.includes(c));
    if (isNotValidCondition) return res.status(400).json({ error: "Invalid fields provided" });
    return next();
};