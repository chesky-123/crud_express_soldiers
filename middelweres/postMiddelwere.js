

const BODY = ["name","role","rank_soldier","unit","age","service_status"]

export async function isProperBody(req,res,next) {
    const body = req.body;
    const bodyKeys = Object.keys(body);
    
    const isKeyInBody = bodyKeys.every(k => BODY.includes(k))
    if (!isKeyInBody) return res.status(400).json({error:"Invalid fields provided"})
    return next()
       
    };
