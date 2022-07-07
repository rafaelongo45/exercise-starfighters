import connection from "../database.js";

async function findFighter(username: string){
  return connection.query(`
    SELECT *
    FROM fighters
    WHERE username = $1;
  `, [username]);
};

async function insertFighter(username: string){
  return connection.query(`
    INSERT INTO fighters(username, wins, losses, draws)
    VALUES($1, 0, 0, 0);
  `, [username]);
};

async function updateFighter(username: string, column: string){
  return connection.query(`
    UPDATE fighters
    SET ${column} = ${column} + 1
    WHERE username = $1
  `, [username]);
};

async function getRanking(){
  return connection.query(`
    SELECT * FROM fighters
    ORDER BY wins DESC, draws DESC
  `);
};


const userRepository = {
  findFighter,
  insertFighter,
  updateFighter,
  getRanking
};

export default userRepository;