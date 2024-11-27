import { Service } from "typedi";
import { appDataSource } from "../config/typeorm.config";
import { User } from "../entities/user.entity";

@Service()
export class UserService {
  private userRepository = appDataSource.getRepository(User);

  async createUser(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }
}
