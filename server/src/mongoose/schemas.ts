import { Schema } from 'mongoose';

export const MessageSchema = new Schema({
  sender: String,
  message: String,
});
