import mysql2 from "mysql2/promise";



export const pool = mysql2.createPool({
    host: "localhost",
    port: 2003,
    user: "root",
    database: "my_db_soldiers",
    connectionLimit: 10
});

// export async function createTable(req, res) {
//     try {
//         const create = await pool.execute(`
//         CREATE TABLE if not exists soldiers(  
//         id                          int PRIMARY KEY AUTO_INCREMENT ,
//         name                        VARCHAR(20) NOT NULL ,
//         role                        VARCHAR(20) ,
//         rank_soldier                VARCHAR(20) ,
//         unit                        VARCHAR(20) ,
//         age                         INT,
//         service_status              BOOLEAN DEFAULT 1,
//         creation_data               TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//         `);
//         return res.end("table create successful")
//     } catch (e) {
//         console.log(EERROORR);
//         return e
//     };
// };

export async function createSoldier(req, res) {
    try {
        const body = req.body;
        const create = await pool.execute(`
        INSERT into soldiers(
        name,role,rank_soldier,unit,age,service_status
        ) VALUES(
         ?,?,?,?,?,?
        )
        `, [body.name, body.role, body.rank_soldier, body.unit, body.age, body.service_status]);
        return res.status(201).json({message:"soldier created successful"})
    }catch (e) {
        console.log(e);
        return res.status(400).json({error:"somthing wrong"})
     };
};



