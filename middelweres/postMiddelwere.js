

export const BODY = ["name", "role", "rank_soldier", "unit", "age", "service_status"]

export async function isProperBody(req, res, next) {
    const body = req.body;
    const bodyKeys = Object.keys(body);

    const isAllKeysInBody = bodyKeys.every(k => BODY.includes(k))
    if (!isAllKeysInBody) return res.status(400).json({ error: "Invalid fields provided" })
    return next()

};
