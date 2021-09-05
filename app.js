/*

1031820016 - Bianca Tramontin
1031820011 - Dhiessica Moreira

*/ 
const express = require('express')
const bodyparse = require('body-parser')
const app = express()
app.use(bodyparse.json())

require("./router/ProdutoRouter")(app)
require("./router/CategoriaRouter")(app)

app.listen(3000, function(){
    console.log("Servidor inicializado")
})