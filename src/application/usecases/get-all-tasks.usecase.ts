import { Task } from "../../domain/task.entity";
import { TaskRepository } from "../repositories/task.repository";

export class GetAllTasksUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(): Promise<Task[]> {
        return this.taskRepository.findAll();
    }
}
