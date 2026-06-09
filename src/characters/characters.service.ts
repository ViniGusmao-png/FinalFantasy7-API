import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character, CharacterDocument } from './dto/character.schema';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Character.name)
    private characterModel: Model<CharacterDocument>,
  ) {}


  async findAll(): Promise<Character[]>{
    return this.characterModel.find().exec();
  }

  async findOne(name: string): Promise<Character | null>{
    return this.characterModel.findOne({name}).exec()
  }
}