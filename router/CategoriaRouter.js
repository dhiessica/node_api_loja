/*

1031820016 - Bianca Tramontin
1031820011 - Dhiessica Moreira

*/ 
const categoriaController = require("../controller/CategoriaController")

module.exports = function(app){
    
    app.get("/categoria/:id", categoriaController.getCategoriaById)
    app.get("/categoria", categoriaController.getCategorias)
    app.post("/categoria", categoriaController.createCategoria)
    app.delete("/categoria/:id",categoriaController.deleteCategoriaById)
    app.put("/categoria/:id",categoriaController.updateCategoriaById)


}
