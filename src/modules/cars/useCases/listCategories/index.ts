import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoryRepository = CategoriesRepositories.getInstance();
const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(listCategoryUseCase);


export { listCategoriesController }