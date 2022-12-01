
const http = require('http');
const fs = require('fs')
const port = 3000

const renderHtml = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404)
            res.write('Error file tidak ada')
        } else {
            res.write(data)
        }
        res.end()
    })  
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'Context-type' : 'text/html'
    })

    const url = req.url;

    switch (url) {
        case '/about':
            renderHtml('./about.html', res)
            break;
        case '/kontak_saya':
            renderHtml('./contact.html', res)
        default:
            renderHtml('./index.html', res)
            break;
    }


    // if(url === '/about') {
    //     renderHtml('./about.html', res)
    // } else if (url === '/contact') {
    //     renderHtml('./contact.html', res)
    // } else {
    //     renderHtml('./index.html', res)
    // }



}) .listen(port, () => {
    console.log(`Server menyala di port ${port}`)
})