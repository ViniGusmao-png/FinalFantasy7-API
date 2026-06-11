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


 async findAll(exclude?: string): Promise<Character[]> {
    if (!exclude) return this.characterModel.find().exec();
  
    const excludeNames = exclude.split(',');
    return this.characterModel.find({ name: { $nin: excludeNames } }).exec();
  }

  async findOne(name: string): Promise<Character | null>{
    return this.characterModel.findOne({name}).exec()
  }
}