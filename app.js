const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { loadContact, findContact } = require('./utils/contacts')

const app = express()
const port = 3000

app.set('view engine', 'ejs');

// thirdparty middleware
app.use(expressLayouts);

// built-in middleware
app.use(express.static('public'))


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
  const contacts = loadContact();
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contacts,
  })
})
app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contact,
  })
})

app.use((req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`server menyala di port ${port}`)
})