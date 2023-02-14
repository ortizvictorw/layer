import { IUserService, userService } from '../../../packages/services/user.service'

export interface IServices {
    userService: IUserService ,
    sqs:string
}

const sqs = "TEXTO SQS"

const services:IServices = {
    userService,
    sqs
}

export default services;
