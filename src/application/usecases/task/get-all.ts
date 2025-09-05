import { Task } from "domain/entities";
import { TaskRepository } from "application/repositories";

export class GetAllTasksUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(): Promise<Task[]> {
        return this.taskRepository.findAll();
    }
}
