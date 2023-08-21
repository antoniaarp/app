import proveedores from "../models/ProveedoresModel.js";

export const getProveedores= async(req, res)=>{
    try{
        const response = await proveedores.findAll({
            attributes:['id','nombre','email','contacto']
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}
export const getProveedoresById=(req,res)=>{
    /*try {
        const response=await proveedores.findOne({
            attributes:['id','nombre','email','contacto'],
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }*/
}
export const crearProveedor = async (req, res) => {
    const {nombre,email,contacto}=req.body;
    //const usuarioId=req.userId;
    
    try{
        const nuevoProveedor= await proveedores.create({
            nombre:nombre,
            email:email,
            contacto:contacto
            //usuarioId:usuarioId
            
            
        });
        if (!nuevoProveedor) {
            return res.status(500).json({ msg: "Error al crear el Proveedor" });
        }

        res.status(201).json({msg:"Registro exitoso"})

    }catch(error){
        res.status(500).json({msg: error.message});
    }
    
}