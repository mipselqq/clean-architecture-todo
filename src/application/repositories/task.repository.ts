import { Task } from "../../domain/task.entity";

export interface TaskRepository {
    save(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
    findAll(): Promise<Task[]>;
}
