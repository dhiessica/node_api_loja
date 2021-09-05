/*

1031820016 - Bianca Tramontin
1031820011 - Dhiessica Moreira

*/ 
const bodyParser = require('body-parser')
const { static } = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('loja','root','',{
    host:'localhost',
    dialect:'mysql'

})


sequelize.authenticate()

const Categoria = sequelize.define('categoria',{
    nome:{
        type: Sequelize.STRING
    }
})

const createCategoria = function(categoria,callback,callbackError){
    Categoria.create(categoria).then(callback).catch(callbackError)
}

const getAllCategorias = function(callback,callbackError){
    Categoria.findAll().then(callback).catch(callbackError)
}

const getCategoriaById = function(id, callback, callbackError){
    Categoria.findOne({
        where : {
            id : id
        }
    }).then(callback).catch(callbackError)
}

const deleteCategoriaById = function(id, callback,callbackError){
    Categoria.destroy({
        where : {
            id : id
        }
    }).then(callback).catch(callbackError)
}

const updateCategoriaById = function(id, categoria, callback,callbackError){
    Categoria.update({
        nome : categoria.nome,
      
    },{
        where : {
            id : id
        }
    }).then(callback).catch(callbackError)
}
Categoria.sync({force: true})

module.exports = {
    createCategoria,
    getAllCategorias,
    getCategoriaById,
    deleteCategoriaById,
    updateCategoriaById

}