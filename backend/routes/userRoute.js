import express from 'express';
import {
    getUsuarios,
    getUsuariosById,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}from"../controllers/Users.js";
import { verifyUser,adminOnly } from '../middleware/AuthUser.js';

const router=express.Router();

router.get('/listar',verifyUser,adminOnly,getUsuarios);
router.get('/listar/:id',verifyUser,adminOnly,getUsuariosById);
router.post('/crear',verifyUser,adminOnly,crearUsuario);
router.patch('/actualizar/:id',verifyUser,adminOnly,actualizarUsuario);
router.delete('/eliminar/:id',verifyUser,adminOnly,eliminarUsuario);



export default router;
