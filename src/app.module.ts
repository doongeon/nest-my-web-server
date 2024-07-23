import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { PhilosophiesModule } from './philosophies/philosophies.module';

@Module({
    imports: [GamesModule, PhilosophiesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
