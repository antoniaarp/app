import Maquinas from "../models/MaquinasModel.js";
import Users from "../models/UserModel.js";

export const getMaquinas=async(req, res)=>{
    try {
        const response = await Maquinas.findAll({
            attributes: ['id', 'descripcion', 'registro'],
            include: [
                {
                    model: Users, // Cambia 'Usuarios' por el nombre de tu modelo de usuarios
                    attributes: [ 'usuario'], // Ajusta los atributos que deseas mostrar del usuario
                   // Ajusta el alias de la relación si es necesario
                },
            ],
        });
    
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const getMaquinaById=async(req, res)=>{
    try{
        const response = await Maquinas.findOne({
            attributes:['id','descripcion','registro'],
            where:{
                id:req.params.id
        }
    });
    res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}
export const crearMaquina = async (req, res) => {
    const {descripcion,registro}=req.body;
    const usuarioId=req.userId;
    
    try{
        const nuevaMaquina= await Maquinas.create({
            descripcion:descripcion,
            registro:registro,
            usuarioId:usuarioId
            
            
        });
        if (!nuevaMaquina) {
            return res.status(500).json({ msg: "Error al crear la máquina" });
        }

        res.status(201).json({msg:"Registro exitoso"})

    }catch(error){
        res.status(500).json({msg: error.message});
    }
    
}

export const actualizarMaquina=(req, res)=>{
    
}
export const eliminarMaquina=(req, res)=>{
    
}