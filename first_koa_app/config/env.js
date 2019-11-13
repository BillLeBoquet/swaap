const env = {
    database: 'swaap',
    username: 'swaap_admin@swaap',
    password: 'P@ssw0rd',
    host: 'swaap.mysql.database.azure.com',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;