import { CategoryRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoryUseCase } from './ListCategoryUseCase';

const categoriesRepository = CategoryRepository.getInstance();

const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController }