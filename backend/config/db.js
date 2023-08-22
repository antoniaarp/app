import { Sequelize } from "sequelize";
const db = new Sequelize("mantenimientofcn", "root", "@Borges22.", {
  host: "LocalHost",
  dialect: "mysql",
});
export default db;
