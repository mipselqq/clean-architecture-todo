import { describe, it } from "node:test";
import assert from "node:assert";
import { GetAllTasksUseCase } from "../get-all-tasks.usecase";
import { CreateTaskUseCase } from "../create-task.usecase";
import { InMemoryTaskRepository } from "infrastructure/persistence/in-memory-task.repository";

describe("GetAllTasksUseCase", () => {
  it("should get all tasks", async () => {
    const taskRepository = new InMemoryTaskRepository();
    const createTaskUseCase = new CreateTaskUseCase(taskRepository);
    const getAllTasksUseCase = new GetAllTasksUseCase(taskRepository);

    await createTaskUseCase.execute({ title: "Task 1" });
    await createTaskUseCase.execute({ title: "Task 2" });

    const tasks = await getAllTasksUseCase.execute();

    assert.strictEqual(tasks.length, 2);
    assert.strictEqual(tasks[0].title, "Task 1");
    assert.strictEqual(tasks[1].title, "Task 2");
  });
});
