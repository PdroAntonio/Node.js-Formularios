const Sequelize = require('sequelize')

//Conexão bd
    const sequelize = new Sequelize('test', 'root', '582197364P', {
        host: "localhost",
        dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

