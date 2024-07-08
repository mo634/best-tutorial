import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
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
    createTask(@Body() CreateTaskDto: CreateTaskDto) {


        return this.tasksService.createTask(CreateTaskDto)


    }

    //   endpoint for getting task by id
    @Get('/getTaskById/:id')
    getTaskById(@Param('id') id: string): Task {

        return this.tasksService.getTaskById(id)
    }

    //    endpoint for deleting task by id
    @Delete('/deleteTaskById/:id')
    deleteTaskById(@Param('id') id: string) {
        this.tasksService.deleteTaskById(id)
        return this.tasksService.getAllTasks()
    }

    //    endpoint for updating task by id
    @Patch('/updateTaskById/:id')
    updateTaskById(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
        return this.tasksService.updateTaskById(id, status)
    }

}
