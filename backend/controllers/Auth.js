import Users from "../models/UserModel.js";
import argon2 from"argon2";
export const Login=async(req, res)=>{
    const user = await Users.findOne({
    
        where:{
          email:req.body.email
    }
    });
    if(!user)
    return res.status(404).json({msg:"Usuario no encontrado"});
    const match=await argon2.verify(user.contrasenia, req.body.contrasenia);
    if(!match)
    return res.status(400).json({msg:"Contraseña incorrecta"});
    req.session.userId=user.id;
    const id=user.id;
    const usuario=user.usuario;
    const email=user.email;
    const rol=user.rol;
    res.status(200).json({id,usuario,email,rol});

}
export const Me=async(req,res)=>{
    if(!req.session.userId){
        return res.status(401).json({msg:"Por favor inicie sesion en su cuenta"});
    }
    const user = await Users.findOne({
        attributes:['id','usuario','email','rol'],
        where:{
          id:req.session.userId
    }
    });
    if(!user)
    return res.status(404).json({msg:"Usuario no encontrado"});
    res.status(200).json(user);
}
export const logOut=(req,res)=>{
    req.session.destroy((err)=>{
        if(err)
        return res.status(400).json({msg:"No se puede cerrar la Sesión"});
        res.status(200).json({msg:"Has cerrado Sesión"});
    })
}