import { Request, Response } from "express";
import { CreateCategoryServiceUseCase } from "../createCategory/CreateCategoryServiceUseCase";

class createSpecificateController {
     constructor(private createSpecificationUseCase: CreateCategoryServiceUseCase){

     }
    
     handle(request: Request, response: Response): Response{
        const { name, descrition } = request.body;
       
        this.createSpecificationUseCase.execute({name, descrition});
  
        return response.setMaxListeners(201).send();
     }
}

export { createSpecificateController }