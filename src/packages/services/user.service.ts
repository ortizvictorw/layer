import User from '../models/user.model'
import userRepository from '../repositories/user.repository';

export interface IUserService {
    findAll: ()=> Promise<User[]>
}

class UserService implements IUserService{
    async findAll(): Promise<User[]> {
        return userRepository.findAll()
    }

    async findOne(): Promise<User | null> {
        return userRepository.findOne()
    }
}

const userService = new UserService()



export { userService }

