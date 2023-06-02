import { Schema, Types, model } from 'mongoose';

const chatSchema = new Schema(
	{
		_id: { type: new Types.ObjectId(), unique: true },
		users: [{ type: Types.ObjectId, ref: 'user' }],
		createdAt: { type: Date },
		updatedAt: { type: Date },
	},
	{
		_id: false,
	},
);

export const ChatModel = model('chat', chatSchema);
