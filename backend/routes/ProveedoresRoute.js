import express from 'express';
import {
    getProveedores,
    getProveedoresById,
    crearProveedor,
   /* actualizarUsuario,
    eliminarUsuario*/
}from"../controllers/Proveedores.js";
import { adminOnly,verifyUser } from '../middleware/AuthUser.js';

const router=express.Router();

router.get('/plistar',verifyUser,adminOnly,getProveedores);
router.get('/plistar/:id',verifyUser,adminOnly,getProveedoresById);
router.post('/pcrear',verifyUser,adminOnly,crearProveedor);
//router.patch('/actualizar/:id',actualizarUsuario);
//router.delete('/eliminar/:id',eliminarUsuario);



export default router;