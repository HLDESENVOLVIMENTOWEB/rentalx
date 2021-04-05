import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryServiceUseCase } from "./CreateCategoryServiceUseCase";

const categoriesRepositories = CategoriesRepositories.getInstance();
const createCategoryUseCase = new CreateCategoryServiceUseCase(categoriesRepositories)
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }