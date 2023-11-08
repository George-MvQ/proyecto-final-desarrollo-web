//George Moisés Vásquez Quiché
const express = require('express')
const hbs = require('hbs');
//configurar variable de entorno
require('dotenv').config();
const app = express()
const port = process.env.PORT

/* const port = 8080 */

app.set('view engine', 'hbs');

// Es donde se ubican los archivos a reutilizar
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static('public'))

// controlador de la ruta principal
// aqui hacemos el llamdo de home.hbs no es necesario indicar el tipo de archivo
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'George Vasquez',
        titulo:'Curso de Node'
    })
})

//para contacto
app.get('/contacto', (req, res) => {
    res.render('contacto')
})

//para infor personal
app.get('/sobre-mi', (req, res) => {
    res.render('infoPersonal')
})

//portafolio
app.get('/portafolio-gmv', (req, res) => {
    res.render('portafolio_gmv')
})

//proyecto 1
app.get('/proyecto-1', (req, res) => {
    res.render('proyecto1')
})

//proyecto 2
app.get('/proyecto-2', (req, res) => {
    res.render('proyecto2')
})

//proyecto 3
app.get('/proyecto-3', (req, res) => {
    res.render('proyecto3')
})

//proyecto 4
app.get('/proyecto-4', (req, res) => {
    res.render('proyecto4')
})



app.get('/proyecto-mru', (req, res) => {
    res.render('proyecto_mru',{
        titulo: 'MRU',
        proyecto: 'PROYECTO MRU'
    })
})

app.get('/proyecto-multiplicacion', (req, res) => {
    res.render('multiplicacion',{
        titulo: 'multiplicacion',
        proyecto: 'PROYECTO GENERADOR DE TABLAS DE MULTIPLICAR'
    })
})

app.get('/proyecto-mongodb', (req, res) => {
    res.render('mongoDB',{
        titulo: 'MongoDB',
        proyecto: 'PROYECTO CONEXION MONGODB'
    })
})
app.get('*',(req, res)=>{
    res.render('404')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

