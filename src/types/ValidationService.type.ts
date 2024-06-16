export type ValidationService<T> = {
    validate(data: unknown): T;
}