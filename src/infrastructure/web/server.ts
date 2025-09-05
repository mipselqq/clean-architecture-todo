import express from "express";
import { InMemoryTaskRepository } from "infrastructure/persistence";
import { TaskController } from "infrastructure/web/controllers";
import { CompleteTaskUseCase, CreateTaskUseCase, GetAllTasksUseCase } from "application/usecases";

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
