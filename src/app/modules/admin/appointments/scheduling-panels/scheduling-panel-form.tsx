import React, {useEffect} from 'react';
import {SchedulingPanel} from 'src/app/api/scheduling-panels/models';
import {upsertSchedulingPanelRequestParser} from 'src/app/api/scheduling-panels/parsers';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {employeeActions, employeeSelectors} from 'src/app/store/admin/employees';

const SchedulingPanelForm: React.FunctionComponent<AdminEditContainerProps<SchedulingPanel>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const employees = useAppSelector(employeeSelectors.selectAll);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(employeeActions.initializeStore());
    }, []);

    return (
        <KFormikForm initialValues={upsertSchedulingPanelRequestParser(entity)}
                     apiError={apiError}
                     onSubmit={onSubmit}
        >
            <KFormikInput name="name"/>
            <KFormikInput name="employees" as="multi-select" options={employees}/>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default SchedulingPanelForm;
