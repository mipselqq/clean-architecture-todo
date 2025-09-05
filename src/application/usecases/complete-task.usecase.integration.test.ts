import { describe, it } from "node:test";
import assert from "node:assert";
import { CompleteTaskUseCase } from "./complete-task.usecase";
import { CreateTaskUseCase } from "./create-task.usecase";
import { InMemoryTaskRepository } from "infrastructure/persistence/in-memory-task.repository";

describe("CompleteTaskUseCase", () => {
  it("should complete a task", async () => {
    const taskRepository = new InMemoryTaskRepository();
    const createTaskUseCase = new CreateTaskUseCase(taskRepository);
    const completeTaskUseCase = new CompleteTaskUseCase(taskRepository);
    const taskTitle = "My new task";

    const createdTask = await createTaskUseCase.execute({ title: taskTitle });
    const completedTask = await completeTaskUseCase.execute({ id: createdTask.id });

    assert(completedTask);
    assert.strictEqual(completedTask.isCompleted, true);

    const taskFromRepo = await taskRepository.findById(createdTask.id);
    assert.strictEqual(taskFromRepo!.isCompleted, true);
  });
});
