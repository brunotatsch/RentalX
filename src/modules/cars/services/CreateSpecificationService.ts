import { Category } from "../model/Category"
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface iRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {

  constructor(private specificationRepository: ISpecificationsRepository) {

  }

  execute({ name, description }: iRequest) : void {

    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("specification already exists !!!");
    }

    this.specificationRepository.create({ name, description });

  }

}

export { CreateSpecificationService }