import { Inject, Injectable } from '@nestjs/common';
import { IMessageRepository, IMessageService, MessageModel } from './structure';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService implements IMessageService {
  constructor(
    @Inject(MessageRepository)
    private readonly messageRepository: IMessageRepository,
  ) {}

  async returnAllMessages(): Promise<MessageModel[]> {
    try {
      const allMessage = await this.messageRepository.getAll();
      return allMessage;
    } catch (error) {
      console.log(error);
    }
  }

  async newMessage(data: MessageModel): Promise<any> {
    try {
      const newMessage = await this.messageRepository.create(data);
      return newMessage;
    } catch (error) {
      console.log(error);
    }
  }
}
