const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Muitxooo louuuucoooooo!')
})

app.get('/adonias', (req, res) => {
  res.send({
    id: 1,
    nome: "S01",
    descrição: "Sensor Temperatura",
    dados: [
      {
        data: "01/06/2021 12:00",
        valor: "12 graus"
      },
      {
        data: "02/06/2021 12:00",
        valor: "8 graus"
      },
      {
        data: "03/06/2021 12:00",
        valor: "20 graus"
      },
    ]
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})