import { Task } from "task/domain/task";
import { TaskRepository } from "task/infrastructure/task.repository";

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
