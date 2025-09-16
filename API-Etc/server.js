const express = require("express");
const app = express(); 
const PORT = 3000;
//lista de palavras 
const palavras = require(`./palavras.json`); 
//rota principal 
app.get("/random", (req, res) => { const qtd = parseInt(req.query.qtd) || 1; 
//Sorteio 
const sorteadas = [] ; for (let i = 0; i<qtd; i++) { 
const aleatoria = palavras[Math.floor(Math.random() * palavras.length)]; sorteadas.push(aleatoria) } 
res.json({ palavras:sorteadas}); }); 
//iniciar servidor 
app.listen(PORT, () =>{ console.log(`API rodando em https://localhost:${PORT}`); 
});