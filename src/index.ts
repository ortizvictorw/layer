import { createHandlerPlugin, createHandlerOrm } from "./lambdas/user/";
import {dbConnectionPlugin} from './packages/databases/db-plugin-conection'
import userService from './lambdas/user/services/index'

const createService = createHandlerPlugin({ dbConnectionPlugin });

const createServiceTwo = createHandlerOrm( userService );

export { createService, createServiceTwo };
