import { BODY } from "./postMiddelwere.js";



export async function isValidBody(req,res,next) {
    const body = req.body;
    const bodyKeys = Object.keys(body);
    const isNotValidBody = bodyKeys.some(k => !BODY.includes(k));
    if (isNotValidBody) return res.status(400).json({ error: "Invalid fields provided" });
    return next();
}