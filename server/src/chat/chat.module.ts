import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { MessageService } from 'src/message/message.service';
import { MessageRepository } from 'src/message/message.repository';
import { MessageSchema } from 'src/mongoose/schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
  providers: [ChatGateway, MessageService, MessageRepository],
})
export class ChatModule {}
