import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (request, responde) =>{
    return responde.json({menssge:"Aplicação"})
})

app.post("/courses", (resquest, response) => {
    const { name } = resquest.body;
    return response.json({name});
})

app.listen(3333, ()=> console.log("servidor rodando"));