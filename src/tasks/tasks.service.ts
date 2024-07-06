import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = ["mohamed" , "ahmed","manar"];
    getAllTasks() {
        return this.tasks;
    }
}
