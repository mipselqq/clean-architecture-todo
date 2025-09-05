import { describe, it } from "node:test";
import assert from "node:assert";
import { Task } from "./domain/task";
import { ValidationError } from "./domain/errors/validation.error";

describe("Task Entity", () => {
    it("should create a new task with a title", () => {
        const task = Task.create("Test Task");
        assert.strictEqual(task.title, "Test Task");
        assert.strictEqual(task.isCompleted, false);
    });

    it("should throw a ValidationError if title is empty", () => {
        assert.throws(() => Task.create(""), ValidationError);
    });

    it("should mark the task as completed", () => {
        const task = Task.create("Test Task");
        task.complete();
        assert.strictEqual(task.isCompleted, true);
    });
});
