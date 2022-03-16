import { HttpRequest } from "../helpers/HttpRequest";
import { HttpResponse } from "../helpers/HttpResponse";

export class SumController {

    constructor(private readonly sumUseCase: any) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { value1, value2 } = httpRequest.body;
        if (!value1) return HttpResponse.badRequest({ error: 'value1 is required' });
        if (!value2) return HttpResponse.badRequest({ error: 'value2 is required' });
        const result = await this.sumUseCase.execute(value1, value2);
        return HttpResponse.ok({ result });
    }

}