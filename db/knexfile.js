module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/db.sqlite`
    },
    useNullAsDefault: true
  },

  production: {
    // Acá iran los datos de la conexion en un ambiente de produccion
  }
}