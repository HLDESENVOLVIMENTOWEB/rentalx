import { Category } from '../model/category';


interface ICategoriesRepositoriesDTO{
    name: string;
    description: string;
}

interface ICategoriesRepositories {
    findByName(name: string): Category;
    list(): Category[];
    create({name , description}:ICategoriesRepositoriesDTO):void;
}

export {ICategoriesRepositories,ICategoriesRepositoriesDTO};