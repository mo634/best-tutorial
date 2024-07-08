import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    //    endpoint for getting all tasks 
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }


    //    endpoint for creating a task

    @Post()
    createTask(@Body() CreateTaskDto:CreateTaskDto) {
 

        return this.tasksService.createTask(CreateTaskDto)


    }



}
