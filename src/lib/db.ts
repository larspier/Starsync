import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'mocha3039.mochahost.com',
  port: 3306,
  database: 'lapidela_larav82',
  user: 'lapidela_larav82',
  password: 'AleAndMil212701',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function query(sql: string, params: any[] = []) {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

export default pool;