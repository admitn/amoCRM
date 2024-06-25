import { Injectable } from '@nestjs/common';
import IResponsibleUser from 'src/types/IResponsibleUser';

@Injectable()
export class UsersService {
    async getResponsibleUsers(): Promise<IResponsibleUser[]> {

        const responsiblesArray = await fetch(`https://${process.env.SUBDOMAIN}.amocrm.ru/api/v4/users`,
        {
            method: 'GET',
            headers: {'Authorization': `Bearer ${process.env.TOKEN}`}
        });
        const normalizedUsers: IResponsibleUser[] = [];

        (await responsiblesArray.json())._embedded.users.forEach(el => {
            normalizedUsers.push({
                id: el.id,
                name: el.name,
                email: el.email
            })
        });
        return normalizedUsers;
    }
}
