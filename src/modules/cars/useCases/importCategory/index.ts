import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepositories";
import { ImportCateforyController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository =  CategoriesRepositories.getInstance();  
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCateforyController = new ImportCateforyController(importCategoryUseCase);

export { importCateforyController }