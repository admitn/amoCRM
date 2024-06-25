export default interface IContact {
    /**
     * ID контакта
     */
    id: number;

    /**
     * Имя контакта
     */
    name: string;

    /**
     * Электронная почта контакта
     */
    email?: string;

    /**
     * Номер телефона контакта
     */
    phone?: string;
}