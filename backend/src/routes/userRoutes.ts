import { Router } from "express";

const router = Router();

router.get('/', async(req, res ) =>{
    return res.json({message: 'Rota /users funcionando'});
});

export default router;