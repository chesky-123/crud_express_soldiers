import { BODY } from "./postMiddelwere.js";



export async function isValidBody(req,res,next) {
    const body = req.body;
    const bodyKeys = Object.keys(body);
    const isNotValidBody = bodyKeys.some(k => !BODY.includes(k));
    if (isNotValidBody) {
        const err = Error("Invalid fields provided");
        err.status = 400;
        return next(err);
    };
    return next();
}