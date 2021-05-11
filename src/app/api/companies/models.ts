import {IEmployee} from '../employees/models';
import {Service, ServiceCategory} from '../services/models';
import {CompanyConfig} from '../admin-companies/models';
import {IReadModel} from '../common/models/IReadModel';
import {Moment} from 'moment';

export interface Company extends IReadModel {
    id: number;
    name: string;
    address: string;
    // avatar: string;
    about: string;
    instagram: string;
    phoneNumber: string;
    whatsapp: string;
    facebook: string;
    config: CompanyConfig;
}

export interface CompanyDetails extends IReadModel {
    id: number;
    name: string;
    address: string;
    avatar: string;
    about: string;
    employees: IEmployee[];
    services: Service[];
    serviceCategories: ServiceCategory[];
    config: CompanyConfig;
}

export interface Slot {
    start: Moment;
    end: Moment;
    title: string;
}
