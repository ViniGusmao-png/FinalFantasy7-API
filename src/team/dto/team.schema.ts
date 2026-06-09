import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema({ collection: 'team' })export class Team {

    @Prop({ type: [] })
    team!: {
        name: string;
        level: number;
        hp: number;
        mp: number;
        nextlevel: number;
        limitelevel: number;
        img: string;
        materias: [];
    }[];

}
export const TeamSchema = SchemaFactory.createForClass(Team);