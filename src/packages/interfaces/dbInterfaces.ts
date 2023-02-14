

import { Sequelize } from "sequelize";
import { User } from "../models";

export interface dbInterface {
  sequelize: Sequelize;
  authenticate: Function;
  //associate: Function;
  //seed: Function;
  //user: User;
}