import { Module } from '@nestjs/common';
import { PhilosophiesController } from './philosophies.controller';
import PhilosophiesService from './philosophies.service';

@Module({
    controllers: [PhilosophiesController],
    providers: [PhilosophiesService],
})
export class PhilosophiesModule {}
