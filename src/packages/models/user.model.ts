import { AutoIncrement, Column, Model, Table, DataType } from "sequelize-typescript";

@Table({
    underscored: true,
    tableName: "user",
    timestamps: false
})

export default class User extends Model {

    @AutoIncrement
    @Column({ primaryKey: true , type: DataType.INTEGER})
    id!: number

    @Column({type: DataType.STRING})
    name!: string 
    
  }




