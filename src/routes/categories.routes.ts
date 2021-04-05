import { request, response, Router } from 'express';
import { CategoriesRepositories } from '../modules/cars/repositories/implementations/CategoriesRepositories';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';


const categires_routes = Router();

categires_routes.post("/", (request, response)=>{
    return createCategoryController.handle(request, response)
});

categires_routes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
});

export { categires_routes };