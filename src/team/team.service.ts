import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Team, TeamDocument} from './dto/team.schema'


@Injectable()
export class TeamService {
    constructor(
        @InjectModel(Team.name)
        private teamModel: Model<TeamDocument>,
    ) {}


    async findAll(): Promise<Team[]>{
        return this.teamModel.find().exec()
    }
}
