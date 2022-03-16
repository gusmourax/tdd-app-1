import { Router } from "express";
import { SumController } from "../../../presentation/controllers/SumController";
import { SumUseCase } from "../../../presentation/controllers/SumUseCase";

const router = Router();
const sumUseCase = new SumUseCase();
const sumController = new SumController(sumUseCase);

router.post('/sum', async (req, res) => {
    const response = await sumController.handle({ body: req.body });
    res.status(response.statusCode || 200).json(response.body);
});

export { router };