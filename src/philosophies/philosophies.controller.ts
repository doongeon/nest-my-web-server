import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import PhilosophiesService from './philosophies.service';

@Controller('philosophies')
export class PhilosophiesController {
    constructor(private readonly philosophiesService: PhilosophiesService) {}

    @Get()
    findAll() {
        return this.philosophiesService.findAll();
    }

    @Get(':id') // GET /philosophies/id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.philosophiesService.findOne(id);
    }
}
