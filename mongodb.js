const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/login-auth')
  .then(() => {
    console.log('Conexion a la base de datos exitosa');
  })
  .catch((err) => {
    console.log('Conexion a la base de datos fallida');
    console.log(err);
  }
  )

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})

const collection = mongoose.model("collection", userSchema);

module.exports = collection;

