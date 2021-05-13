import {CreateAppointmentRequest, SlotRequestParams} from 'src/app/api/companies/requests';
import {RequestModel, requestParser} from 'src/app/api/requests';
import {convertMoment} from '../common/helpers';
import {CompanyDetails, Slot} from './models';
import baseModelRequest from '../common/clients/base-django-api';
import {companyParser, companyDetailsParser, slotParser} from './parsers';
import baseApiAxios from 'src/app/api/common/clients/base-api';



const baseUrl = 'companies/';

export const companyClient = {
    ...baseModelRequest(baseUrl, companyParser),
    fromName: (name: string): Promise<CompanyDetails> => {
        return baseApiAxios.get<CompanyDetails>(baseUrl + name + '/')
            .then(result => companyDetailsParser(result.data));
    },

    slots: (slotsParams: SlotRequestParams): Promise<Slot[]> => {
        const params = convertMoment(slotsParams);
        return baseApiAxios.get<Slot[]>(baseUrl + 'slots/', {params})
            .then(result => result.data.map((slot, id) => slotParser(id, slot)));
    }
};

// const billingUrl = 'billing/';
const requestsUrl = 'requests/';

export const companyRequestClient = {
    ...baseModelRequest(requestsUrl, requestParser),

    createAppointment(data: CreateAppointmentRequest) {
        convertMoment(data);
        return baseApiAxios.post<RequestModel>(requestsUrl + 'add/', data)
            .then(result => requestParser(result.data));
    },

    patch(id: number, customerNotes: string) {
        return baseApiAxios.patch<RequestModel>(`${requestsUrl}${id}/`, {customerNotes})
            .then(
                result => requestParser(result.data)
            );
    },

    complete(id: number) {
        return baseApiAxios.patch<RequestModel>(requestsUrl + id + '/confirm/', {})
            .then(
                result => requestParser(result.data)
            );
    },

    delete(id: number, appointment: string, owner: string) {
        return baseApiAxios.delete<RequestModel>(requestsUrl + id + '/', {params: {appointment, owner}})
            .then(
                result => requestParser(result.data)
            );
    },

    current(owner: number): Promise<RequestModel> {
        return baseApiAxios.get<RequestModel>(requestsUrl + 'current/', {params: {owner}}).then(
            result => requestParser(result.data)
        );
    },

    // payment(requestId: number): Promise<StripePaymentDetails> {
    //     return baseApiAxios.put<StripePaymentDetails>(this.billingUrl + `payment/${requestId}/`, {});
    // }
}
