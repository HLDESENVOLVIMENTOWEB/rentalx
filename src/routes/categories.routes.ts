import { request, response, Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCateforyController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const upload = multer({
    dest:"./tmp"
})

const categires_routes = Router();

categires_routes.post("/", (request, response)=>{
    return createCategoryController.handle(request, response)
});

categires_routes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
});

categires_routes.post("/import", upload.single("file"),(request, response)=>{
   return importCateforyController.handle(request, response);
})

export { categires_routes };