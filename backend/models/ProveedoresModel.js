import { Sequelize } from "sequelize";
import db from "../config/db.js";

const{DataTypes}=Sequelize;
const Proveedor=db.define('proveedores',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        validate:{
            notEmpty:true,
        }
    },
    nombre:{
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
    contacto:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
            len: [3,20]
        }
    },
    },{
        freezeTableName:true
    });
    
export default Proveedor;