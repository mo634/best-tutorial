import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    // define tasks array "with type of tasks array "
    private tasks : Task[] = [];

    // define a method to get all tasks
    getAllTasks(): Task[] {
        return this.tasks;
    }

    //define create task 
    createTask(CreateTaskDto):CreateTaskDto{
        const {title,description} = CreateTaskDto;
        // create the task obj 
        const task :Task = {
            id:Math.random().toString(),
            title,
            description,
            status:TaskStatus.OPEN
        }

        // push task obj to tasks array
        this.tasks.push(task);

        return task


    }

    //define getting task by id 
    getTaskById(id:string):Task{
        return this.tasks.find(task => task.id === id)
    }
    
    //define delete tasks by id 
    deleteTaskById(id:string){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}
