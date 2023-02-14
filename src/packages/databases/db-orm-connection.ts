import { Sequelize } from '../../../layer/nodejs/node_modules/sequelize-typescript';
import  User  from '../models/user.model'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT} from '../../../secrets.json'


export const dbOrmConection = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT || 3306,
    dialect: 'mysql',
    models: [User],
    storage: '',
    pool: {
      max: 3,           
      min: 0,
      idle: 2000,       
      acquire: 10000,   
    },
    repositoryMode:true
  });

