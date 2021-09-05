/*

1031820016 - Bianca Tramontin
1031820011 - Dhiessica Moreira

*/ 
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('loja','root','',{
    host:'localhost',
    dialect:'mysql'

})

sequelize.authenticate()

const Produto = sequelize.define('produto',{
    nome:{
        type: Sequelize.STRING
    },
    marca:{
        type: Sequelize.STRING
    },
    estoque:{
        type: Sequelize.STRING
    },
    categoria:{
        type: Sequelize.INTEGER
    }
})

const Categoria = sequelize.define('Categoria')

Produto.hasOne(Categoria, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey: 'categoria',
    as: 'Categoria'
  })

const createProduto = function(produto,callback,callbackError){
    Produto.create(produto).then(callback).catch(callbackError)
}

const getAllProdutos = function(callback,callbackError){
    Produto.findAll().then(callback).catch(callbackError)
}

const getProdutoById = function(id, callback, callbackError){
    Produto.findOne({
        where : {
            id : id
        }
    }).then(callback).catch(callbackError)
}

const getProdutoByCategoria = function(categoria, callback, callbackError){
    Produto.findAll({
        where : {
            categoria : categoria
        }
    }).then(callback).catch(callbackError)
}

const deleteProdutoById = function(id, callback,callbackError){
    Produto.destroy({
        where : {
            id : id
        }
    }).then(callback).catch(callbackError)
}

const updateProdutoById = function(id, produto, callback,callbackError){
    Produto.update({
        nome : produto.nome,
        marca : produto.marca,
        estoque : produto.estoque,
        categoria : produto.categoria
    },{
        where : {
            id : id
        }
    }).then(callback).catch(callbackError)
}
Produto.sync({force: true})

module.exports = {
    createProduto,
    getAllProdutos,
    getProdutoById,
    getProdutoByCategoria,
    deleteProdutoById,
    updateProdutoById,

}