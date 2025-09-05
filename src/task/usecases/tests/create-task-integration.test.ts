import { describe, it } from "node:test";
import assert from "node:assert";
import { CreateTaskUseCase } from "../create";
import { Task } from "task/domain/task";
import { InMemoryTaskRepository } from "task/infrastructure/in-memory-task.repository";

describe("CreateTaskUseCase", () => {
  it("should create a task", async () => {
    const taskRepository = new InMemoryTaskRepository();
    const createTaskUseCase = new CreateTaskUseCase(taskRepository);
    const taskTitle = "My new task";

    const createdTask = await createTaskUseCase.execute({ title: taskTitle });

    assert(createdTask instanceof Task);
    assert.strictEqual(createdTask.title, taskTitle);
    assert.strictEqual(createdTask.isCompleted, false);

    const tasks = await taskRepository.findAll();
    assert.strictEqual(tasks.length, 1);
    assert.deepStrictEqual(tasks[0], createdTask);
  });
});
