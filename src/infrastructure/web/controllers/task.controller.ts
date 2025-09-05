import { Request, Response } from "express";
import { ensureErrorBase } from "infrastructure/errors";
import { CreateTaskUseCase, GetAllTasksUseCase, CompleteTaskUseCase } from "application/usecases";

interface CreateTaskBody {
    title: string | undefined;
}

interface CompleteTaskParams {
    id: string | undefined;
}

export class TaskController {
    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        private readonly getAllTasksUseCase: GetAllTasksUseCase,
        private readonly completeTaskUseCase: CompleteTaskUseCase,
    ) {}

    createTask = async (req: Request<{}, {}, CreateTaskBody>, res: Response): Promise<void> => {
        try {
            const { title } = req.body;
            if (!title) {
                throw new Error("No title provided");
            }

            const task = await this.createTaskUseCase.execute({ title });
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ message: ensureErrorBase(error).message });
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

    completeTask = async (req: Request<CompleteTaskParams>, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            if (!id) {
                throw new Error("Invalid id provided");
            }
            
            const task = await this.completeTaskUseCase.execute({ id });
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ message: ensureErrorBase(error).message });
            throw error;
        }
    }
}
