import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CharacterDocument = Character & Document;

@Schema()
export class Character {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  level!: number;

  @Prop({ required: true })
  hp!: number;

  @Prop({ required: true })
  mp!: number;

  @Prop()
  nextlevel!: number;

  @Prop()
  limitelevel!: number;

  @Prop()
  image!: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);