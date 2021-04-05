import { ImportCateforyController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCateforyController = new ImportCateforyController(importCategoryUseCase);

export { importCateforyController }