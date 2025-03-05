import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bilapplication", "postgres", "postgres", {
  host: "localhost", // Replace with your DB host
  dialect: "postgres", // Replace with your DB type if different
  logging: false, // Set to true to enable query logging
});

export default sequelize;
