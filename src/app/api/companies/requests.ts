import {Moment} from 'moment';
import {IConfigWriteModel} from '../admin-companies/models';


export interface CompanyDetailsRequest {
    name: string;
}

export interface ICompanyWriteModel {
    id: number;
    name: string;
    address: string;
    about: string;
    instagram: string;
    phoneNumber: string;
    whatsapp: string;
    facebook: string;
    config?: IConfigWriteModel;
}

export interface SlotRequestParams {
    employee?: number;
    service: number;
    start: Moment;
    end: Moment;
}

export interface CreateAppointmentRequest {
    start: string;
    employee?: number;
    service: number;
}


export interface AddNotesRequest {
    id: number;
    notes: string;
}

export interface RequestModelGetParams {
    start: Moment,
    end: Moment;
}
