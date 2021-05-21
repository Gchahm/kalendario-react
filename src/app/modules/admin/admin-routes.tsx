import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CustomersContainer from 'src/app/modules/admin/customers/customers-container';
import EmployeesContainer from 'src/app/modules/admin/employees/employees-container';
import ServicesContainer from 'src/app/modules/admin/services/services-container';
import {ADMIN_ROUTES} from 'src/app/modules/admin/urls';

const AdminRoutes: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route path={ADMIN_ROUTES.SERVICES} component={ServicesContainer}/>
            <Route path={ADMIN_ROUTES.EMPLOYEES} component={EmployeesContainer}/>
            <Route path={ADMIN_ROUTES.CUSTOMERS} component={CustomersContainer}/>
            <Route path={ADMIN_ROUTES.ROOT} component={ServicesContainer}/>
        </Switch>
    )
}


export default AdminRoutes;
