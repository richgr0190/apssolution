const { Router } = require('express');
const router = Router ();
const fs = require('fs');

const json_datos = fs.readFileSync('src/newdato.json', 'utf-8');
const datos = JSON.parse(json_datos)

router.get('/', (req, res) => {
  res.render('index.ejs', {
    datos
  })
})

router.get('/api/sps/helloworld/v1',(req,res)=> {
  res.render('new-entry');
})

router.post('/api/sps/helloworld/v1', (req, res) => {
  const {nombre, correo, edad} = req.body;
  if(!nombre || !correo || !edad ){
    res.status(400).send('Faltan campos');
    return;
  }
  let newDato = {
    nombre,
    correo,
    edad
  };

  datos.push(newDato);

//Modulo filse sistem
const json_datos = JSON.stringify(datos)
fs.writeFileSync('src/newdato.json', json_datos, 'utf-8');
  //res.send('recibido');
  res.redirect('/')
});


module.exports = router;
