import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    // define tasks array "with type of tasks array "
    private tasks : Task[] = [];

    // define a method to get all tasks
    getAllTasks(): Task[] {
        return this.tasks;
    }

    //define create task 
    createTask(title:string,description:string):Task{
        
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
}
