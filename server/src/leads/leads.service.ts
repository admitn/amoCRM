import { Injectable } from '@nestjs/common';
import { ContactsService } from 'src/contacts/contacts.service';
import { StatusesService } from 'src/statuses/statuses.service';
import ILead from 'src/types/ILead';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LeadsService {
    constructor(
        private contactsService: ContactsService,
        private statusesService: StatusesService,
        private usersService: UsersService
    ) {}
    async getLeads(query: string): Promise<ILead[]> {
        const leadsArray = await fetch(`https://${process.env.SUBDOMAIN}.amocrm.ru/api/v4/leads?query=${query}&with=contacts`,
            {
              method: 'GET',
              headers: {'Authorization': `Bearer ${process.env.TOKEN}`}
            });
        
            const normalizedLeads: ILead[] = [];
            const allResponsibles = await this.usersService.getResponsibleUsers();
            const allStatuses = await this.statusesService.getAllStatuses();
            const allContacts = await this.contactsService.getAllContacts();
            (await leadsArray.json())._embedded.leads.forEach(lead => {
              const leadContacts = lead._embedded.contacts.map(contact => allContacts.find(c => contact.id === c.id));
              const leadStatus = allStatuses.find(status => status.id === lead.status_id);
              const leadResponsible = allResponsibles.find(user => user.id === lead.responsible_user_id);
        
              normalizedLeads.push({
                id: lead.id,
                name: lead.name,
                price: lead.price,
                responsible_user: leadResponsible,
                status: leadStatus,
                created_at: new Date(lead.created_at * 1000).toISOString(),
                contacts: leadContacts
              })
            });
        
        return normalizedLeads;
    }
}
