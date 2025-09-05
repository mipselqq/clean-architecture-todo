import { Task } from "task/domain/task";
import { TaskRepository } from "task/infrastructure/task.repository";

export class GetAllTasksUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(): Promise<Task[]> {
        return this.taskRepository.findAll();
    }
}
