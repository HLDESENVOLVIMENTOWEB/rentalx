import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateCategoryController } from "../createCategory/CreateCategoryController";
import { CreateCategoryServiceUseCase } from "../createCategory/CreateCategoryServiceUseCase";


const specificaitonsRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateCategoryServiceUseCase(specificaitonsRepository);
const createSpecificationController = new CreateCategoryController(createSpecificationUseCase);

export { createSpecificationController }