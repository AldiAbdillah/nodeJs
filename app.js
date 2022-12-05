
// const http = require('http');
// const fs = require('fs')
// const port = 3000

// const renderHtml = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404)
//             res.write('Error file tidak ada')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })  
// }

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Context-type' : 'text/html'
//     })

//     const url = req.url;

//     switch (url) {
//         case '/about':
//             renderHtml('./about.html', res)
//             break;
//         case '/kontak':
//             renderHtml('./contact.html', res)
//         default:
//             renderHtml('./index.html', res)
//             break;
//     }


//     // if(url === '/about') {
//     //     renderHtml('./about.html', res)
//     // } else if (url === '/contact') {
//     //     renderHtml('./contact.html', res)
//     // } else {
//     //     renderHtml('./index.html', res)
//     // }



// }) .listen(port, () => {
//     console.log(`Server menyala di port ${port}`)
// })

// yang diatas adalah kode node js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname})
})

app.get('/tentangkami', (req, res) => {
  res.sendFile('./about.html', {root: __dirname})
})

app.get('/kontak', (req, res) => {
  res.sendFile('./contact.html', {root: __dirname})
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