import IResponsibleUser from './IResponsibleUser';
import IContact from './IContact';
import IStatus from './IStatus';

export default interface ILead {
    /**
     * ID сделки
     */
    id: number;

    /**
     * Название сделки
     */
    name: string;

    /**
     * Бюджет сделки
     */
    price: number;

    /**
     * Ответственный за сделку
     */
    responsible_user: IResponsibleUser;

    /**
     * Статус сделки
     */
    status: IStatus;

    /**
     * Дата создания сделки (ISO Date)
     */
    created_at: string;

    /**
     * Связанные контакты
     */
    contacts: IContact[];
}