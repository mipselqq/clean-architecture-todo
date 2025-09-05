import { Task } from "task/domain/task";
import { TaskRepository } from "./repository";

export class InMemoryTaskRepository implements TaskRepository {
    private tasks: Map<string, Task> = new Map();

    async save(task: Task): Promise<void> {
        this.tasks.set(task.id, task)
    }

    async findById(id: string): Promise<Task | null> {
        return this.tasks.get(id) || null;
    }

    async findAll(): Promise<Task[]> {
        return Array.from(this.tasks.values());
    }
}
