



export async function isStatusInBody(req, res, next) {
    
    const { service_status } = req.body;
    
    if (service_status !== +1 && service_status !== +0) return res.status(400).json({ error: "invalid input" })
    return next();
};



