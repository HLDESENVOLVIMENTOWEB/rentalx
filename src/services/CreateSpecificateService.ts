import { ISpecificationRepository } from "../modules/cars/repositories/ISpecificationRepository";

interface IRequest {
    name:string;
    descrition:string;
}

class CreateSpecificateService {
    constructor(private specificaitonsRepository: ISpecificationRepository){

    }

    execute({ name, descrition }:IRequest):void{
       const specificationAlreadyExists = this.specificaitonsRepository.findByName(name);        

       if(specificationAlreadyExists){
           throw new Error("Specification already exists!");
       }

       this.specificaitonsRepository.create({
           name,
           descrition
       })
    }
}

export { CreateSpecificateService };