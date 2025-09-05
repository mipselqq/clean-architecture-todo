export const ensureErrorBase = (error: unknown): Error => {
    if (error instanceof Error) {
        return error;
    }

    throw new Error("Expected builtin error, got something else");
}
