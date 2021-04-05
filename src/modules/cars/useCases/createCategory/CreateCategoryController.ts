import { Response, Request } from 'express';
import { CreateCategoryServiceUseCase } from './CreateCategoryServiceUseCase';

class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryServiceUseCase){

    }

   handle(request: Request , response: Response) : Response{
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({name, description});
   
    return response.status(201).send();
   }
}

export { CreateCategoryController }