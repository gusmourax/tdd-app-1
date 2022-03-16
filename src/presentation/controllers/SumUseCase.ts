export class SumUseCase {
    async execute(value1: number, value2: number): Promise<number> {
        return value1 + value2;
    }
}