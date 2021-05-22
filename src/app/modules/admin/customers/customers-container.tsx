import React from 'react';
import {customerParser} from 'src/app/api/customers';
import EditCustomer from 'src/app/modules/admin/customers/edit/edit-customer';
import CustomersTable from 'src/app/modules/admin/customers/table/customers-table';
import AdminDashboard from 'src/app/shared/admin/admin-dashboard';
import AdminListEditContainer from 'src/app/shared/admin/admin-list-edit-container';
import {useAppDispatch} from 'src/app/store';
import {customerActions, customerSelectors} from 'src/app/store/admin/customers';


const CustomersContainer: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()

    const filter = (value: string | undefined) => {
        dispatch(customerActions.fetchEntities({search: value}));
    }

    return (
        <AdminDashboard>
            <AdminListEditContainer baseSelectors={customerSelectors}
                                    baseActions={customerActions}
                                    entityParser={customerParser}
                                    filter={filter}
                                    EditContainer={EditCustomer}
                                    ListContainer={CustomersTable}/>
        </AdminDashboard>
    )
}


export default CustomersContainer;


