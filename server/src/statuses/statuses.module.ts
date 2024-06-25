import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';

@Module({
    providers: [StatusesService],
    exports: [StatusesService]
})
export class StatusesModule {}
