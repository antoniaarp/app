import { Sequelize } from "sequelize";
import db from "../config/db.js";
const{DataTypes}=Sequelize;
const Users=db.define('usuarios',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        validate:{
            notEmpty:true,
        }
    },
    usuario:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
            len: [3,50]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
            isEmail:true
        }
    },
    contrasenia:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    },
    rol:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    }
    },{
        freezeTableName:true
    });

    export default Users;