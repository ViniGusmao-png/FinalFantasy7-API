import { Controller,Get, Param, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @Get()
    findAll( @Query('exclude') exclude:string){
        return this.charactersService.findAll(exclude)
    }

    @Get(':name')
    findOne(@Param('name') name:string){
        return this.charactersService.findOne(name)
    }

    
}
