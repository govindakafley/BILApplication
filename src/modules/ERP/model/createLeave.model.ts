import { DataTypes, Model } from "sequelize";
import { LeaveAttributes, LeaveCreationAttributes } from "../../../../interface/ERP/leaveAttributes";
import sequelize from "../../../../database";

class CreateLeave extends Model<LeaveCreationAttributes> implements LeaveAttributes {
  public employee_code!: string;
  public employee_id!: string;
  public email!: string;
  public leave_type!: number;
  public leave_from_date!: Date;
  public leave_to_date!: Date;
  public leave_half_day!: string[];
  public leave_day_shift!: string[];
  public no_of_leave_day!: number;
  public leave_total_days!: number;
  public leave_reason!: string;
}

CreateLeave.init(
  {
    employee_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leave_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    leave_from_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    leave_to_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    leave_half_day: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    leave_day_shift: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    no_of_leave_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    leave_total_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    leave_reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "leaves", // Typically plural
    modelName: "CreateLeave", // Match class name
    timestamps: true,
  }
);

export default CreateLeave;
