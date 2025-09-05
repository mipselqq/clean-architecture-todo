import { describe, it } from "node:test";
import assert from "node:assert";
import { Task } from "./task.entity.js";
import { ValidationError } from "../errors/validation.error.js";

describe("Task Entity", () => {
    it("should create a new task with a title", () => {
        const task = Task.create("My new task");

        assert.strictEqual(task.title, "My new task");
        assert.strictEqual(task.isCompleted, false);
        assert.ok(task.id, "Task ID should be generated");
        assert.ok(task.creationDate instanceof Date, "Creation date should be a Date object");
    });

    it("should throw a ValidationError if title is empty", () => {
        assert.throws(
            () => Task.create(""),
            ValidationError,
            "Should throw a ValidationError for empty title"
        );
    });

    it("should mark the task as completed", () => {
        const task = Task.create("A task to complete");
        
        assert.strictEqual(task.isCompleted, false, "Initially should be not completed");
        
        task.complete();
        
        assert.strictEqual(task.isCompleted, true, "Should be marked as completed");
    });
});
