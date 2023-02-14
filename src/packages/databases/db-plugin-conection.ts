import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER} from '../../../secrets.json'
// Require and initialize outside of your main handler
const dbConnectionPlugin = require('serverless-mysql')({
  config: {
    host     : DB_HOST,
    database : DB_NAME,
    user     : DB_USER,
    password : DB_PASSWORD,
  }
})
 
// Main handler function
export {
  dbConnectionPlugin 
}