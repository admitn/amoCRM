import { Injectable } from '@nestjs/common';
import IStatus from 'src/types/IStatus';

@Injectable()
export class StatusesService {
    async getAllStatuses(): Promise<IStatus[]> {
        const statusesArray = await fetch(`https://${process.env.SUBDOMAIN}.amocrm.ru/api/v4/leads/pipelines`,
        {
            method: 'GET',
            headers: {'Authorization': `Bearer ${process.env.TOKEN}`}
        });

        const normalizedStatuses: IStatus[] = [];
        (await statusesArray.json())._embedded.pipelines.forEach(el => {
            el._embedded.statuses.forEach(status =>{
                normalizedStatuses.push({
                    id: status.id,
                    name: status.name,
                    color: status.color
                })
            })
        });
        return normalizedStatuses;
    }
}
