import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Maquinas from "./MaquinasModel.js";
const{DataTypes}=Sequelize;
const orden =db.define('orden',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        validate:{
            notEmpty:true,
        }
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNulll: false,
        validate:{
            notEmpty:true,
            len: [3,100]
        }
    },
    registro:{
        type:DataTypes.STRING,
        allowNulll:false,
        validate:{
            notEmpty:true,
            len: [3,20]
        }
    },
  


    },{
        freezeTableName:true
    });
    Maquinas.hasMany(Maquinas,{foreignKey:'maquinaId'});
    orden.belongsTo(Maquinas,{foreignKey:'maquinaId'});

    export default orden;