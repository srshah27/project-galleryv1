import mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'aws.connect.psdb.cloud',
  user: '7m655wtg1gt6gt0zr71t',
  database: 'project-gallery',
  password: 'pscale_pw_tLwjwEutQWil29mspBmHEy06p11SyhfC5xSoIpqHc84',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  ssl: {
    rejectUnauthorized: true
  }
})

export default pool.promise()
