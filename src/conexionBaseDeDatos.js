//Se importa la dependencia de "mariadb"
const mariadb = require('mariadb');

//Se crea una constante que tendra los elementos de la base de datos 
const database = mariadb.createConnection({
    host: 'database-xenio-test.cin19f9yjiqy.us-east-2.rds.amazonaws.com',
    user: 'UserLambdas',
    password: 'Us3rL4mbd4s%',
    database: 'DBERPAPPV2'
})

//Se crea un objeto que contendra elementos para exportar
const data = {
    database,
}

//Se exporta el objeto
module.exports = data