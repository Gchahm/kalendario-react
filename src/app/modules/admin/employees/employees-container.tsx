import React from 'react';
import EmployeeUpsertForm from 'src/app/modules/admin/employees/employee-upsert-form';
import EmployeesTable from 'src/app/modules/admin/employees/employees-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {employeeActions, employeeSelectors} from 'src/app/store/admin/employees';


const EmployeesContainer: React.FunctionComponent = () => {
    return (
        <AdminDashboard>
            <AdminListEditContainer baseSelectors={employeeSelectors}
                                    baseActions={employeeActions}
                                    EditContainer={EmployeeUpsertForm}
                                    ListContainer={EmployeesTable}/>
        </AdminDashboard>
    )
}


export default EmployeesContainer;
