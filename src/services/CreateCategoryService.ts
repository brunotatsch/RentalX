import { Category } from "../model/Category"
import { CategoryRepository } from "../repositories/CategoriesRepository";

interface iRequest {
  name: string;
  description: string;
}

class CreateCategoryService {

  constructor(private categoryRepository: CategoryRepository) {

  }

  execute({ name, description }: iRequest) : void {

    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists !!!");
    }

    this.categoryRepository.create({ name, description });

  }

}

export { CreateCategoryService }