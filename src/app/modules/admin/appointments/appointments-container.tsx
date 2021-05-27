import React from 'react';
import SchedulingDateSelector from 'src/app/modules/admin/appointments/date-selector/scheduling-date-selector';
import AppointmentUpsertForm from 'src/app/modules/admin/appointments/forms/appointment-upsert-form';
import SchedulingPanelsSelector from 'src/app/modules/admin/appointments/scheduling-panels/scheduling-panels-selector';
import {useEditModal, useInitializeEffect} from 'src/app/shared/admin/hooks';
import {KFlexColumn} from 'src/app/shared/components/flex';
import {appointmentActions, appointmentSelectors} from 'src/app/store/admin/appointments';
import {employeeActions} from 'src/app/store/admin/employees';
import {
    EmployeePanelHeadersContainer,
    EmployeePanelsBodyContainer,
    useReloadAppointmentsEffect
} from './employee-panel';


const AppointmentsContainer: React.FunctionComponent = () => {
    useInitializeEffect(employeeActions);
    useReloadAppointmentsEffect();
    const [openModal, formModal] = useEditModal(appointmentSelectors, appointmentActions, AppointmentUpsertForm);

    return (
        <KFlexColumn className="w-100">
            {formModal}
            <KFlexColumn className="sticky-top bg-white-gray">
                <SchedulingPanelsSelector/>
                <SchedulingDateSelector/>
                <EmployeePanelHeadersContainer onCreateClick={openModal}/>
            </KFlexColumn>
            <EmployeePanelsBodyContainer onSelect={openModal}/>
        </KFlexColumn>
    )
}


export default AppointmentsContainer;
