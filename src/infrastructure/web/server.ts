import express from "express";
import { InMemoryTaskRepository } from "../persistence/in-memory-task.repository";
import { CreateTaskUseCase } from "../../application/usecases/create-task.usecase";
import { GetAllTasksUseCase } from "../../application/usecases/get-all-tasks.usecase";
import { CompleteTaskUseCase } from "../../application/usecases/complete-task.usecase";
import { TaskController } from "./controllers/task.controller";

const app = express();

app.use(express.json());

const taskRepository = new InMemoryTaskRepository();

const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const getAllTasksUseCase = new GetAllTasksUseCase(taskRepository);
const completeTaskUseCase = new CompleteTaskUseCase(taskRepository);

const taskController = new TaskController(
    createTaskUseCase,
    getAllTasksUseCase,
    completeTaskUseCase,
)

app.post("/tasks", taskController.createTask);
app.get("/tasks", taskController.getAllTasks);
app.patch("/tasks/:id/complete", taskController.completeTask)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
});
