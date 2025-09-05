import { Task } from "domain/entities";
import { TaskRepository } from "application/repositories";

interface CompleteTaskDTO {
    id: string;
}

export class CompleteTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(input: CompleteTaskDTO): Promise<Task> {
        const task = await this.taskRepository.findById(input.id);

        if (task === null) {
            throw new Error("Task not found");
        }

        task.complete();
        await this.taskRepository.save(task);   
        
        return task;
    }
}
