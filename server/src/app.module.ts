import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './contacts/contacts.module';
import { StatusesModule } from './statuses/statuses.module';
import { UsersModule } from './users/users.module';
import { LeadsModule } from './leads/leads.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client/dist')
    }),
    ConfigModule.forRoot(),
    LeadsModule,
    StatusesModule,
    ContactsModule,
    UsersModule
]
})
export class AppModule {}
