import { ICategoriesRepositories } from "../../repositories/ICategoriesRepositories";


interface IRequest {
    name: string;
    description: string;
}



class CreateCategoryServiceUseCase{

    constructor(private CategoriesRepository: ICategoriesRepositories){}

    execute({ description, name }: IRequest):void{
    
        const CategoriesAllExists = this.CategoriesRepository.findByName(name);

        if(CategoriesAllExists){
          throw  Error("Category Already Exist!");
        }
    
        this.CategoriesRepository.create({name, description})
    }
}

export { CreateCategoryServiceUseCase };