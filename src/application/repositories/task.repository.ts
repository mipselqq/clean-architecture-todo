import { Task } from "../../domain/entities/task";

export interface TaskRepository {
    save(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
    findAll(): Promise<Task[]>;
}
