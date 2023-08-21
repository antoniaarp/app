import express from 'express';
import {
    getMaquinas,
    getMaquinaById,
    crearMaquina,
    actualizarMaquina,
    eliminarMaquina
}from"../controllers/Maquinas.js";
import { verifyUser,adminOnly } from '../middleware/AuthUser.js';

const router=express.Router();
router.get('/mlistar',verifyUser,getMaquinas);
router.get('/mlistar/:id',verifyUser,getMaquinaById);
router.post('/mcrear',verifyUser,adminOnly,crearMaquina);
router.patch('/mactualizar/:id',verifyUser,adminOnly,actualizarMaquina);
router.delete('/meliminar/:id', verifyUser,adminOnly,eliminarMaquina);



export default router;
