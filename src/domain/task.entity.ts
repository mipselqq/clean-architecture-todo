import { randomUUID } from "node:crypto";
import { ValidationError } from "./validation.error.js";

export class Task {
    private constructor(
        public readonly id: string,
        public title: string,
        public isCompleted: boolean,
        public readonly creationDate: Date,
    ) {}

    public static create(title: string): Task {
        if (title === "") {
            throw new ValidationError("Title is required.");
        }

        return new Task(randomUUID(), title, false, new Date())
    }

    public complete(): void {
        this.isCompleted = true;
    }
}
