import 'reflect-metadata'
import express from 'express';
import "./database";

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

 //http://localhost:3333/users
 app.get("/",(request, response) => {
     return response.json({message:"Hello Word - NLW04"});
 });

 // 1 param => Rota(Recurso API)
 // 2 param => resquest, response

 app.post("/",(request, response)=>{

    return response.json({
        message:"os dados foram salvos!"
    });

 });

 app.listen(3333,() => console.log("Server is running!"));



