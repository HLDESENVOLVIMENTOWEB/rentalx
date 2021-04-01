import { Specification } from "../model/specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";


class SpecificationRepository  implements ISpecificationRepository{
    private specifications: Specification[];
    
    constructor(){
        this.specifications = [];
    }
   

    create({ descrition, name }: ICreateSpecificationDTO): void {
         const specifications = new Specification();

         Object.assign(specifications ,{
             name,
             descrition,
             created_at:new Date()
         })

         this.specifications.push(specifications)
    }

    findByName(name: string): Specification {
        const specification =  this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}

export { SpecificationRepository };