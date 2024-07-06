// nest g module tasks  --> create tasks module

import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
})
export class TasksModule {}
