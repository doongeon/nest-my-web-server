import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Get()
    findAll() {
        return this.gamesService.findAllGames();
    }

    @Get(':id') // GET /users/:id or
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.gamesService.findOne(id);
    }
}
