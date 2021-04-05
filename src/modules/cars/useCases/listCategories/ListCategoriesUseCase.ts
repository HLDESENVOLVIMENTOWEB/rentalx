import { Category } from "../../model/category";
import { ICategoriesRepositories } from "../../repositories/ICategoriesRepositories";


class ListCategoriesUseCase{

    constructor(private categoriesRepository: ICategoriesRepositories){

    }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }

}

export { ListCategoriesUseCase }