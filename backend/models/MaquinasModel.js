import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Users from "./UserModel.js";
const{DataTypes}=Sequelize;
const Maquinas=db.define('maquina',{
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
Users.hasMany(Maquinas,{foreignKey:'usuarioId'});
Maquinas.belongsTo(Users,{foreignKey:'usuarioId'});

    export default Maquinas;