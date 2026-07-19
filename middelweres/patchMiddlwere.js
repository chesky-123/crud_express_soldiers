



export async function isStatusInBody(req, res, next) {
    
    const { service_status } = req.body;
    
    if (service_status !== 1 && service_status !== 0) {
        const err = new Error("inalid input");
        err.status = 400;
        return next(err)
}    return next();
};



