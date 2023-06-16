//Se importa el archivo "conexionBaseDeDatos"
const { database } = require("./conexionBaseDeDatos")

//Se crea la funcion principal 
const generarTimbradoFacturaContado = async (event) => {

    //Se crea una constante que guardara los parametros del evento
    const params = event.queryStringParameters
    //Se crea una constante que guardara el parametro "idVentaFactura"
    const idVentaFactura = params["idVentaFactura"]

    try {
        //Se hace la consulta de la cabecera
        const qHeader = await (await database).query(`SELECT * FROM vw_VNTVentasFacturasProductos WHERE IDVENTAFACTURA=${idVentaFactura}`);

        //Se retorna la consulta en formato JSON
        return {
            statusCode: 200,
            body: JSON.stringify(qHeader)
        }
    } catch (error) {
        //Imprime en consola el error 
        console.log(error)
    }
}

//Se declara un objeto que contendra elementos para exportar
const data = {
    generarTimbradoFacturaContado
}

//Se exporta el objeto
module.exports = data