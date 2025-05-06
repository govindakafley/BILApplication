import { DataTypes, Model } from "sequelize";
import { TravelAttributes, TravelCreationAttributes } from "../../../../interface/ERP/travelAttributes";
import sequelize from "../../../../database";


class Travel extends Model<TravelCreationAttributes> implements TravelAttributes {
  public id!: number;
  public employee_code!: string;
  public travel_type!: number;
  public travel_purpose!: number;
  public travel_expense_applicable!: string; // Yes or No
  public travel_funding!: number;
  public travel_mode!: number;
  public travel_from_date!: Date;
  public travel_to_date!: Date;
  public travel_duration!: number;
  public travel_advance_amount!: number;
  public travel_from_place!: string;
  public travel_to_place!: string;
  public travel_description!: string;
  public create_Update!: string;
}

Travel.init(
    {
       id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        },
        travel_id:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        employee_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        travel_type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        travel_purpose: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        travel_expense_applicable: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        travel_funding: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        travel_mode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        travel_from_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        travel_to_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        travel_duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        travel_advance_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        travel_from_place: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        travel_to_place: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        travel_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        create_Update: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        tableName: "travel", // Typically plural
        modelName: "Travel", // Match class name
        timestamps: true,
      }
)

export default Travel;