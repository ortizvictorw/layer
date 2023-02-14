

import { Sequelize } from "sequelize";

export interface dbInterface {
  sequelize: Sequelize;
  authenticate: Function;
  //associate: Function;
  //seed: Function;
  //user: User;
}