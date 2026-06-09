import { Controller,Get, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @Get()
    findAll(){
        return this.charactersService.findAll()
    }

    @Get(':name')
    findOne(@Param('name') name:string){
        return this.charactersService.findOne(name)
    }

    
}
