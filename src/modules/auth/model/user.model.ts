import { DataTypes, Model } from "sequelize";
import {
  UserAttributes,
  UserCreationAttributes,
} from "../../../../interface/auth/LoginAttributes";
import sequelize from "../../../../database";
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public employee_code!: string;
  public id!: number;
  public name!: string;
  public email!: string;
  public employee_id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Users",
    modelName: "User",
    timestamps: true,
  }
);

export default User;
