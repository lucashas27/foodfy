const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require("./data")
const server = express()



// configurar o nunjucks
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})



//paginas

server.get("/", function(req, res){
    return res.render("about", {items: recipes})
})

server.get("/informations", function(req, res){
    return res.render("informations", {items: recipes})
})

server.get("/receitas", function(req, res){
    return res.render("receitas", {items: recipes})
})

server.get("/sobre", function(req, res){
    return res.render("sobre", {items: recipes})
})


// pegando o id das recipes

server.get("/details/:id", function(req, res) { 
    
    const recipeIndex = req.params.id
    console.log(req.params)
    console.log(recipeIndex)    
    console.log(recipes[recipeIndex])

    return res.render("details", {items: recipes[recipeIndex]} )
})

  



// error 404

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

  


server.listen(5000, function() {
    console.log("server is running")
})

