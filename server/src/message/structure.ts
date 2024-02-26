export interface MessageModel {
  sender: string;
  message: string;
}

export interface IMessageService {
  returnAllMessages(): Promise<MessageModel[]>;
  newMessage(data: MessageModel): Promise<MessageModel>;
}

export interface IMessageRepository {
  create(data: MessageModel): Promise<MessageModel>;
  getAll(): Promise<MessageModel[]>;
}
