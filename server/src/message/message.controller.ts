import { Controller, Get, Inject } from '@nestjs/common';
import { IMessageService, MessageModel } from './structure';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(
    @Inject(MessageService) private readonly messageService: IMessageService,
  ) {}

  @Get()
  async findAll(): Promise<MessageModel[]> {
    return this.messageService.returnAllMessages();
  }
}
