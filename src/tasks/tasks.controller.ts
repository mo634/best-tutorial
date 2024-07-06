import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
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
    createTask(
        @Body("title") title: string,
        @Body("description") description: string
    ) {


        return this.tasksService.createTask(title, description)


    }



}
