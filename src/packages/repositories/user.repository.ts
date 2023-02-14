import { dbOrmConection } from '../databases/db-orm-connection'
import User from '../models/user.model'

class UserRepository {
  protected getRepo = () => dbOrmConection.getRepository(User);

  async findAll(): Promise<User[]>{
    const repo = this.getRepo();
    return repo.findAll();
  }


  async findOne(): Promise<User | null>{
    const repo = this.getRepo();
    return repo.findByPk(1);
  }
}

const userRepository = new UserRepository();
export default userRepository;

