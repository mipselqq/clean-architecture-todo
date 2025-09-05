import { Task } from "domain/entities";
import { TaskRepository } from "application/repositories";

interface CreateTaskDTO {
    title: string;
}

export class CreateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(input: CreateTaskDTO): Promise <Task> {
        const task = Task.create(input.title);
        await this.taskRepository.save(task);
        return task;
    }
}
