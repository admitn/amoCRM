import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { UsersModule } from 'src/users/users.module';
import { StatusesModule } from 'src/statuses/statuses.module';
import { ContactsModule } from 'src/contacts/contacts.module';

@Module({
    providers: [LeadsService],
    controllers: [LeadsController],
    imports: [UsersModule, StatusesModule, ContactsModule]
})
export class LeadsModule {}