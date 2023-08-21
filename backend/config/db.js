import { Sequelize } from "sequelize";
const db=new Sequelize('mantenimientoFCN','root','antoniaP1.',{
    host:"LocalHost",
    dialect:"mysql"

});
export default db;