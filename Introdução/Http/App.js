const http = require("http")

http.createServer((req, res)=>{
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>teste</title>
    </head>
    <body>
        <h1>A tecnologia vai revolucionar o mundo</h1>
    </body>
    </html>`)
}

).listen(3000,()=> {
    return console.log("servidor rodando!!")
})