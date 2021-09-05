/*

1031820016 - Bianca Tramontin
1031820011 - Dhiessica Moreira

*/ 
const produtoController = require("../controller/ProdutoController")

module.exports = function(app){
    
    app.get("/produto/:id", produtoController.getProdutoById)
    app.get("/produto", produtoController.getProdutos)
    app.post("/produto", produtoController.createProduto)
    app.delete("/produto/:id",produtoController.deleteProdutoById)
    app.put("/produto/:id",produtoController.updateProdutoById)


}
