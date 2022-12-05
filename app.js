
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Asep S',
      email: 'asep@gmail.com'
    },
    {
      nama: 'Agus S',
      email: 'Agus@gmail.com'
    },
    {
      nama: 'Adang S',
      email: 'adang@gmail.com'
    }
  ]
  res.render('index', {
    layout: 'layouts/main-layout',
    nama: 'Aldi Abdillah Basalamah',
    title: 'Halaman Home 😁',
    mahasiswa,
    })
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout', title: 'Halaman About'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact'
  })
})

app.get('/product/:id', (req, res) => {
    res.send(`Product id : ${req.params.id} <br> Category id : ${req.query.cat}`)
})

app.use('/', (req, res) => {
    res.status('404')
    res.sendFile('./404.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`server menyala di port ${port}`)
})