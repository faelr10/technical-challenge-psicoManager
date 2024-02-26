import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { ChatModule } from './chat/chat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MessageModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
