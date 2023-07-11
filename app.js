const express = require('express');
const collection = require('./mongodb');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get("/", (req, res) => {

})

app.post("/", (req, res) => {
  const { email, password } = req.body;

  try {

    const verifyEmail = collection.findOne({ email: email })

    if (verifyEmail) {
      res.json("El email ya se encuentra registrado");
    } else {
      res.json("El email es nuevo");
    }

  } catch (e) {
    res.json(e);
  }
})

//Signup
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  }

  try {

    const verifyEmail = collection.findOne({ email: email })

    if (verifyEmail) {
      res.json("exist");
    } else {
      res.json("notexist");
      collection.insertMany({ data });
    }

  } catch (e) {
    res.json(e);
  }
})

app.listen(8000, () => {
  console.log("server escuchando en el puerto: 8000");
});