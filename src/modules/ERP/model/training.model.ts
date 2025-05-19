import { Model, DataTypes, Optional } from "sequelize";
import { TrainingAttributes } from "../../../../interface/ERP/trainingAttributes";
import sequelize from "../../../../database";

type TrainingCreationAttributes = Optional<TrainingAttributes, "id" | 'training_id' | 'create_update'>;

class Training extends Model<TrainingAttributes, TrainingCreationAttributes> implements TrainingAttributes {
  public id!: number;
  public training_id!: string;
  public employee_code!: string;
  public training_type!: number;
  public training_category!: number;
  public training_course!: string;
  public training_institute_name!: string;
  public training_country!: number;
  public training_expense_applicable!: "Yes" | "No";
  public training_fund!: number[];
  public training_from_date!: string;
  public training_end_date!: string;
  public training_duration!: string;
  public training_need_advance!: "Y" | null;
  public training_advance_amount!: string;
  public training_description!: string;
  public create_update!: string

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Training.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    training_id:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    employee_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    training_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    training_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    training_course: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    training_institute_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    training_country: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    training_expense_applicable: {
      type: DataTypes.ENUM("Yes", "No"),
      allowNull: false,
    },
    training_fund: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    training_from_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    training_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    training_duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    training_need_advance: {
      type: DataTypes.ENUM("Y"),
      allowNull: true,
    },
    training_advance_amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    training_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    create_update: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "training",
    modelName: "Training",
  }
);

export default Training;
