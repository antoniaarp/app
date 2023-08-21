import { where } from "sequelize";
import Users from "../models/UserModel.js";
import argon2 from"argon2";

export const getUsuarios= async(req, res)=>{
    try{
        const response = await Users.findAll({
            attributes:['id','usuario','email','rol']
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}
export const getUsuariosById=async(req, res)=>{
    try{
        const response = await Users.findOne({
            attributes:['id','usuario','email','rol'],
            where:{
                id:req.params.id
        }
    });
    res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}
export const crearUsuario=async(req, res)=>{
    const {usuario,email,contrasenia,confContrasenia,rol}=req.body;
    if(contrasenia!==confContrasenia)
    return res.status(400).json({msg:"La contraseña no coincide"})
    const hashContrasenia=await argon2.hash(contrasenia);
    try{
        await Users.create({
            usuario:usuario,
            email:email,
            contrasenia:hashContrasenia,
            rol:rol
        });
        res.status(201).json({msg:"Registro exitoso"})

    }catch(error){
        res.status(500).json({msg: error.message});
    }
    
}
export const actualizarUsuario=async(req, res)=>{
    const user = await Users.findOne({
        attributes:['id','usuario','email','rol'],
        where:{
            id:req.params.id
    }
    });
    if(!user)
    return res.status(404).json({msg:"Usuario no encontrado"});
    const {usuario,email,contrasenia,confContrasenia,rol}=req.body;
    let hashContrasenia;
    if(contrasenia===""||contrasenia===null){
        hashContrasenia=user.contrasenia
    }else{
        hashContrasenia=await argon2.hash(contrasenia)   
    }
    if(contrasenia!==confContrasenia)
    return res.status(400).json({msg:"La contraseña no coincide"});
    try{
        await Users.update({
            usuario:usuario,
            email:email,
            contrasenia:hashContrasenia,
            rol:rol
        },{
            where:{
                id:user.id
            }
                
        });
        res.status(200).json({msg:"Usuario Actualizado"})

    }catch(error){
        res.status(500).json({msg: error.message});
    }

}
export const eliminarUsuario=async(req, res)=>{
    const user = await Users.findOne({
        attributes:['id','usuario','email','rol'],
        where:{
            id:req.params.id
    }
    });
    if(!user)
    return res.status(404).json({msg:"Usuario no encontrado"});
    const {usuario,email,contrasenia,confContrasenia,rol}=req.body;
    let hashContrasenia;
    if(contrasenia===""||contrasenia===null){
        hashContrasenia=user.contrasenia
    }else{
        hashContrasenia=await argon2.hash(contrasenia)   
    }
    if(contrasenia!==confContrasenia)
    return res.status(400).json({msg:"La contraseña no coincide"});
    try{
        await Users.destroy({
            where:{
                id:user.id
            }
                
        });
        res.status(200).json({msg:"Usuario eliminado correctamente"})

    }catch(error){
        res.status(500).json({msg: error.message});
    }
    
}