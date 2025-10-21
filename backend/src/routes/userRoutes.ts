import { Router } from "express";
import { PrismaClient} from "@prisma/client";
import { error } from "console";

const router = Router();
const prisma = new PrismaClient();

//Listar todos
router.get("/", async (req, res) => {
    try {
        const users = await prisma.user.findMany({
        orderBy:{id:"desc"},
        select:{ id:true, name:true, email:true, createdAt: true},
    });
    res.json(users);
    } catch (error) {
        res.status(500).json({error : "Erro ao listar usuários"});
        
    }
});

//Criar novo usuario
router.post("/", async (req, res) =>{
    const {name, email, password} = req.body;

    if(!name || !email || !password) 
        return res.status(400).json({ error: "Campos obrigatórios"});

    try {
        const userExists = await prisma.user.findUnique({ where: {email}});
        
        if (userExists)
            return res.status(400).json({ error: "Email já cadastrado"});

        const newUser = await prisma.user.create({
            data:{ name, email, password },
             select:{ id:true, name:true, email:true, createdAt: true},
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuario"});
    }
});

//Atualizar o usuario
router.put("/:id", async (req, res) =>{
    const { id } = req.params;
    const { name, email} = req.body;

    try {
        const update = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, email},
            select:{ id:true, name:true, email:true, createdAt: true},
        });

        res.json(update);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar usuário"});
    }
});


//Deletar usuário
router.delete("/:id", async (req, res) =>{
    const {id} = req.params;

    try {
        await prisma.user.delete({ where: {id: Number(id)}});
        res.json({message : "Usuário excluido com sucesso"})
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir usuário"})        
    }
})




export default router;