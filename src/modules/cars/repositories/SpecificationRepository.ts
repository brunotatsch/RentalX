import { Specification } from "../model/Specification";
import { ISpecificationsRepository , ICreateSpecificationDTO} from "./ISpecificationsRepository";


class SpecificationRepository implements ISpecificationsRepository {
  private Specifications: Specification[];

  constructor() {
    this.Specifications = [];
  }

  create({name, description } : ICreateSpecificationDTO) : void {
    const specification = new Specification();

  Object.assign(specification, {
    name,
    description,
    created_at: new Date()
  })

  this.Specifications.push(specification);

  }

  list() : Specification[] {
    return this.Specifications;
  }

  findByName(name: string) : Specification {

    const specification = this.Specifications.find(specification => specification.name === name);

    return specification;

  }
}

export { SpecificationRepository }