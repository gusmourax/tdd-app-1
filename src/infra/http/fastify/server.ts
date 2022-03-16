import Fastify, { FastifyInstance } from "fastify";
import { SumController } from "../../../presentation/controllers/SumController";
import { SumUseCase } from "../../../presentation/controllers/SumUseCase";

const app: FastifyInstance = Fastify({ logger: false });

app.post('/sum', async (request, reply) => {
    const sumUseCase = new SumUseCase();
    const sumController = new SumController(sumUseCase);
    const result = await sumController.handle({ body: request.body });
    reply.status(result.statusCode || 200).send(result.body);
})

app.listen(3333, () => console.log('Fastify started at port 3333'));