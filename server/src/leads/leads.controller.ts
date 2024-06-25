import { Controller, Get, Query } from '@nestjs/common';
import ILead from 'src/types/ILead';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
    constructor(private readonly leadsService: LeadsService) {}

    @Get()
    //async getLeads(): Promise<ILead[]> {
    async getLeads(@Query('query') query: string): Promise<ILead[]> {
        return await this.leadsService.getLeads(query);
    }
}