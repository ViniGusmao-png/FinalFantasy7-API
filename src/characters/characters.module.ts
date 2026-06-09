import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { Character, CharacterSchema } from './dto/character.schema';
import {MongooseModule} from '@nestjs/mongoose'
@Module({
  imports:[
    MongooseModule.forFeature([{name: Character.name, schema: CharacterSchema}])
  ],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule {}
