import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMessageRepository, MessageModel } from './structure';

@Injectable()
export class MessageRepository implements IMessageRepository {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<MessageModel>,
  ) {}

  getAll(): Promise<MessageModel[]> {
    return this.messageModel.find().exec();
  }

  create(data: MessageModel): Promise<MessageModel> {
    return this.messageModel.create(data);
  }
}
