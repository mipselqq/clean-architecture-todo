import { Request, Response } from "express";

import { CompleteTaskUseCase } from "../../../application/usecases/complete-task.usecase";
import { CreateTaskUseCase } from "../../../application/usecases/create-task.usecase";
import { GetAllTasksUseCase } from "../../../application/usecases/get-all-tasks.usecase";
import { ensureErrorBase } from "../../errors/base-error-ensurance";

// TODO: revisit error handling
// TODO: use IOC?
export class TaskController {
    constructor(
        private readonly crateTaskUseCase: CreateTaskUseCase,
        private readonly getAllTasksUseCase: GetAllTasksUseCase,
        private readonly completeTaskUseCase: CompleteTaskUseCase,
    ) {}

    createTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const title  = (req as any).body.title as string | undefined;
            if (!title) {
                throw new Error("No title provided")
            }

            const task = await this.crateTaskUseCase.execute({ title });
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ message: ensureErrorBase(error).message })
            throw error;
        } 
    }

    getAllTasks = async (_: Request, res: Response): Promise<void> => {
        try {
            const tasks = await this.getAllTasksUseCase.execute();
            
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: ensureErrorBase(error).message });
            throw error;
        }
    }

    completeTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = (req as any).params.id as string | undefined;
            if (!id) {
                throw new Error("Invalid id provided")
            }
            
            const tasks = await this.completeTaskUseCase.execute({ id });
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: ensureErrorBase(error).message });
            throw error;
        }
    }
}
