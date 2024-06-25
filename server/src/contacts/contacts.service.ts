import { Injectable } from '@nestjs/common';
import IContact from 'src/types/IContact';

@Injectable()
export class ContactsService {
    async getAllContacts(): Promise<IContact[]> {
        const contactsArray = await fetch(`https://${process.env.SUBDOMAIN}.amocrm.ru/api/v4/contacts`,
        {
          method: 'GET',
          headers: {'Authorization': `Bearer ${process.env.TOKEN}`}
        });
        
        const normalizedContacts: IContact[] = [];
        (await contactsArray.json())._embedded.contacts.forEach(el => {
            const email = el.custom_fields_values?.find(f => f.field_code === 'EMAIL');
            const phone = el.custom_fields_values?.find(f => f.field_code === 'PHONE');

            normalizedContacts.push({
                id: el.id,
                name: el.name,
                email: email?.values[0].value,
                phone: phone?.values[0].value
            });
        });
        return normalizedContacts;
    }
}
