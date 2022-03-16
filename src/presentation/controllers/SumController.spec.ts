import { HttpResponse } from '../helpers/HttpResponse';
import { SumController } from './SumController';
import { SumUseCase } from './SumUseCase';

const makeSut = () => {
    const sumUseCase = new SumUseCase();
    const sut = new SumController(sumUseCase);
    return { sut, sumUseCase };
}

describe('SumController', () => {

    it('should sum two values', async () => {
        const { sut } = makeSut();
        const request = {
            body: {
                value1: 1,
                value2: 2,
            }
        }
        const response = await sut.handle(request);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 3 });
        expect(response).toBeInstanceOf(HttpResponse);
    })

    it('should return 400 when value1 has not be provided', async () => {
        const { sut } = makeSut();
        const request = {
            body: {
                value2: 2,
            }
        }
        const response = await sut.handle(request);
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'value1 is required' });
        expect(response).toBeInstanceOf(HttpResponse);
    })

    it('should return 400 when value2 has not be provided', async () => {
        const { sut } = makeSut();
        const request = {
            body: {
                value1: 1,
            }
        }
        const response = await sut.handle(request);
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'value2 is required' });
        expect(response).toBeInstanceOf(HttpResponse);
    })
})