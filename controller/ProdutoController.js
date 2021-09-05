/*

1031820016 - Bianca Tramontin
1031820011 - Dhiessica Moreira

*/ 
const produto = require('../model/Produto')
const produtos = []

function error (response){
    response.statusCode = 401
    response.setHeader("Content-Type","application/json")

    let objectResponse ={
        "response" : "erro"
    }

    response.end(JSON.stringify(objectResponse))
}

function successResponseWithObject(object, response){
    response.statusCode = 200
    response.setHeader("Content-Type","application/json")

    let objectResponse = {
        "response" : "success",
        "data" : object
    }

    response.end(JSON.stringify(objectResponse))
}

const getProdutos = function(request, response){

    let categoria = request.params.categoria
    
    if(categoria == null){
        produto.getAllProdutos(function(produtos){

            successResponseWithObject(produtos,response)

        }, function(){
            error(response)
        })

    }else{
        produto.getProdutoByCategoria(categoria,function(produtos){

            successResponseWithObject(produtos,response)

        }, function(){
            error(response)
        })
    }
    
}

const getProdutoById = function(request,response){
    let id = request.params.id
    
    if(id ==null){

        error(response)

    }else{
        produto.getProdutoById(id,function(produto){
            
            if(produto == null){
                error
            }else{
                successResponseWithObject(produto,response)
            }

        }, function(){

            error(response)
        })
    }
}

const createProduto = function(request,response){

    let body = request.body

    if(body == null || body.nome == null || body.estoque == null){
        error(response)
    
    }else{
        produto.createProduto(body,
            function(){
                response.statusCode = 200
                response.setHeader("Content-Type","application/json")

                let objectResponse = {
                    "response" : "created"
                }
                response.end(JSON.stringify(objectResponse))
            
            }, function(){
                
                error(response)
            }
        )
        
    }

}

const deleteProdutoById = function(request,response){
    let id = request.params.id

    if(id == null){

        error(response)

    }else{

        produto.deleteProdutoById(id,function(){

            response.statusCode = 200
            response.setHeader("Content-Type","application/json")

            let objectResponse = {
                "response" : "deleted"
            }

            response.end(JSON.stringify(objectResponse))

        },function(){
            error(response)
        })
    }
}

const updateProdutoById = function(request,response){
    
    let id = request.params.id
    let body = request.body

    if(id == null || body == null || body.nome == null || body.marca == null || body.categoria == null || body.estoque == null){
        
        error(response)

    }else{
        
        produto.updateProdutoById(id,body,function(){

            response.statusCode = 200
            response.setHeader("Content-Type","application/json")

            let objectResponse = {
                "response" : "updated"
            }

            response.end(JSON.stringify(objectResponse))

        },function(){

            error(response)
            
        })
    }
}

module.exports = {
    getProdutos,
    getProdutoById,
    createProduto,
    deleteProdutoById,
    updateProdutoById

}