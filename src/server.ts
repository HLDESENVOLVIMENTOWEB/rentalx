import express from 'express';

const app = express();


app.get('/', (request, responde) =>{
    return responde.json({menssge:"Aplicação"})
})

app.listen(3333, ()=> console.log("servidor rodando"));