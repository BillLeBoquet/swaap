module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        pseudo: {
            type: Sequelize.STRING
        }
    });
    
    return User;
  }