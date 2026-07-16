import { pool } from "./postCtrl.js";






export async function updateSoldierStatus(req,res) {
    try{
        const {id} = req.params;
        const {service_status} = req.body;
        
        const [result] = await pool.execute(`
            update soldiers set service_status = ? where id = ?
            `,[+service_status,id]);
        
        const soldier = await pool.execute(`select * from soldiers where id = ?`,[+id]);        
        return res.status(200).json(soldier[0]);
    }catch(e){
        console.log(e);
        return res.status(500).json({error:"somthing wrong"})
    };
};


