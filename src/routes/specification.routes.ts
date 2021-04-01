import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificateService } from '../services/CreateSpecificateService';

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response)=>{
      const { name, descrition } = request.body;
      const createSpecificateService = new CreateSpecificateService(specificationRepository);

      createSpecificateService.execute({name, descrition});

      return response.setMaxListeners(201).send();
 })

 export {specificationsRoutes};