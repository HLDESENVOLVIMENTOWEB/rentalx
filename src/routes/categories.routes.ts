import { request, response, Router } from 'express';
import { CategoriesRepositories } from '../modules/cars/repositories/CategoriesRepositories';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categires_routes = Router();
const CategoriesRepository = new CategoriesRepositories();

categires_routes.post("/", (request, response)=>{
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(CategoriesRepository);

    createCategoryService.execute({name, description});
   
    return response.status(201).send();
});

categires_routes.get("/", (request, response) => {
    const all = CategoriesRepository.list();

    return response.json(all);
});

export { categires_routes };