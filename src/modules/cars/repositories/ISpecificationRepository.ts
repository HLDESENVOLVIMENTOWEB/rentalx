import { Specification } from "../model/specification";

interface ICreateSpecificationDTO{
   name : string;
   descrition: string;
}

interface ISpecificationRepository{
    create({ descrition , name }: ICreateSpecificationDTO):void;
    findByName(name:string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO }