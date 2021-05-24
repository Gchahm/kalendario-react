import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Employee, upsertEmployeeRequestParser, UpsertEmployeeRequestValidation} from 'src/app/api/employees';
import {AdminEditContainerProps} from 'src/app/shared/admin/interfaces';
import {KFormikForm, KFormikInput} from 'src/app/shared/components/forms';
import KFormikStandardButtons from 'src/app/shared/components/forms/k-formik-standard-buttons';
import {KFormikState} from 'src/app/shared/components/forms/KFormikState';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
import {KFlexColumn} from 'src/app/shared/molecules/flex';
import {useAppDispatch} from 'src/app/store';
import {scheduleActions, scheduleSelectors} from 'src/app/store/admin/schedules';
import {serviceActions, serviceSelectors} from 'src/app/store/admin/services';

const EmployeeUpsertForm: React.FunctionComponent<AdminEditContainerProps<Employee>> = (
    {
        entity,
        apiError,
        onSubmit,
        onCancel
    }) => {
    const schedules = useSelector(scheduleSelectors.selectAll)
    const services = useSelector(serviceSelectors.selectAll)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(scheduleActions.initializeStore());
        dispatch(serviceActions.initializeStore());
    }, []);

    return (
        <KFormikForm initialValues={upsertEmployeeRequestParser(entity)}
                     apiError={apiError}
                     onSubmit={onSubmit}
                     validationSchema={UpsertEmployeeRequestValidation}
        >
            {entity?.photoUrl &&
            <KFlexColumn className="mb-2" justify={'center'} align={'center'}>
                <AvatarImg size={3} src={entity.photoUrl}/>
            </KFlexColumn>
            }
            <KFormikState/>
            <KFormikInput name="firstName"/>
            <KFormikInput name="lastName"/>
            <KFormikInput name="email"/>
            <KFormikInput name="phone"/>
            <KFormikInput name="instagram"/>
            <KFormikInput name="schedule" as={'select'} options={schedules}/>
            <KFormikInput name="services" as={'multi-select'} options={services} multiple={true}/>
            <KFormikStandardButtons onCancel={onCancel}/>
        </KFormikForm>
    )
}


export default EmployeeUpsertForm;
