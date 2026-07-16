import { pool } from "./postCtrl.js";

export async function deleteSoldier(req, res) {
    try{
    const { id } = req.params;
        const deleted = await pool.execute(`delete from soldiers where id = ?`,[id]);
        return res.status(200).json({message:"soldier deleted successfuli"})
    }catch (e){
        console.log(e);
        return res.status(500).json({error:"somthing wrong"})
    }
    
}