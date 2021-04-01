import express from 'express';
import { categires_routes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use("/categories", categires_routes);
app.use("/specifications", categires_routes);

app.listen(3333, ()=> console.log("servidor rodando"));