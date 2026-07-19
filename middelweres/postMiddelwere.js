

export const BODY = ["name", "role", "rank_soldier", "unit", "age", "service_status"]

export async function isProperBody(req, res, next) {
    const body = req.body;
    const bodyKeys = Object.keys(body);

    const isAllKeysInBody = bodyKeys.every(k => BODY.includes(k))
    if (!isAllKeysInBody) {
        const err = new Error("Invalid fields provided");
        err.status = 400;
        return next(err);
    };
    return next();
};
