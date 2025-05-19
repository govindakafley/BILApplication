import { DataTypes, Model } from "sequelize";
import { SalaryAdvanceAttributes, SalaryCreationAttributes } from "../../../../interface/ERP/salaryAdvance";
import sequelize from "../../../../database";

class SalaryAdvance extends Model<SalaryAdvanceAttributes, SalaryCreationAttributes> implements SalaryAdvanceAttributes {
    public id!: number;
    public employee_code!: string;
    public gross_salary!: string;
    public applicable_advance_amt!: number;
    public monthly_installment_amt!: number;
    public salary_advance_amt!: number;
    public salary_purpose!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

SalaryAdvance.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    advance_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    employee_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gross_salary: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    applicable_advance_amt: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    monthly_installment_amt: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    salary_advance_amt: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    salary_purpose: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "SalaryAdvance",
    tableName: "salary_advance",
    timestamps: true,
});

export default SalaryAdvance;
