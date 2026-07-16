import { pool } from "./postCtrl.js";





export async function getSoldierById(req, res) {
    try {
        const { id } = req.params;

        const [soldier] = await pool.execute(`select * from soldiers where id = ?`,[id])

        if (soldier.length === 0) return res.status(404).json({ error: "soldier not found" })
        return res.status(200).json(soldier);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "somthing wrong" })
    };
};

export async function getSoldierByCondition(req,res) {
    try{
        const condition = req.query;
        const conditionKeys = Object.keys(condition);
        const conditionValues = Object.values(condition);
        if (conditionKeys.length === 0){
            const [allSoldiers] = await pool.execute(`select * from soldiers`);
            return res.status(200).json(allSoldiers);
        };
        const whereClauses = conditionKeys.map(k => `${k} = ?`).join(" and ");
        const [soldiers] = await pool.execute(`
            select * from soldiers where ${whereClauses}
            `,conditionValues)
        return res.status(200).json(soldiers);
    }catch(e){
        console.log(e);
        return res.status(500).json({ error: "somthing wrong" })
    }
    
}