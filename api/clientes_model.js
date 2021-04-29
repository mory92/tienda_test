const conexion = require("./conexion")
module.exports = {
  insertar(nombre, direccion, contacto) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into clientes
            (nombre, direccion, contacto)
            values
            (?, ?, ?)`,
        [nombre, direccion, contacto], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
}
