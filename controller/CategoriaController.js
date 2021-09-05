/*

1031820016 - Bianca Tramontin
1031820011 - Dhiessica Moreira

*/ 

const categoria = require('../model/Categoria')
const categorias = []

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

const getCategorias = function(request, response){

    categoria.getAllCategorias(function(categorias){

        successResponseWithObject(categorias,response)

    }, function(){
        error(response)
    })

}

const getCategoriaById = function(request,response){
    let id = request.params.id
    
    if(id ==null){

        error(response)

    }else{
        categoria.getCategoriaById(id,function(categoria){
            
            if(categoria == null){
                error
            }else{
                successResponseWithObject(categoria,response)
            }

        }, function(){

            error(response)
        })
    }
}

const createCategoria = function(request,response){

    let body = request.body

    if(body == null || body.nome == null){
        error(response)
    
    }else{
        categoria.createCategoria(body,
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

const deleteCategoriaById = function(request,response){
    let id = request.params.id

    if(id == null){

        error(response)

    }else{

        categoria.deleteCategoriaById(id,function(){

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

const updateCategoriaById = function(request,response){
    
    let id = request.params.id
    let body = request.body

    if(id == null || body == null || body.nome == null){
        
        error(response)

    }else{
        
        categoria.updateCategoriaById(id,body,function(){

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
    getCategorias,
    getCategoriaById,
    createCategoria,
    deleteCategoriaById,
    updateCategoriaById

}