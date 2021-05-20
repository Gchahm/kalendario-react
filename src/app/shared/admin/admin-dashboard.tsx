import React from 'react';
import {useIntl} from 'react-intl';
import {ADMIN_ROUTES} from 'src/app/modules/admin/urls';
import KDashboardContainer from 'src/app/shared/components/dashboard/k-dashboard-container';
import {SideBarLinks} from 'src/app/shared/components/dashboard/k-dashboard-sidebar';

interface AdminDashboardProps {
    children: React.ReactNode;
}

const AdminDashboard: React.FunctionComponent<AdminDashboardProps> = (
    {
        children
    }) => {
    const intl = useIntl();
    const links: SideBarLinks = ({
        'Main': [
            [intl.formatMessage({id: 'ADMIN.SIDEBAR.HOME'}), ADMIN_ROUTES.HOME, 'home'],
            [intl.formatMessage({id: 'ADMIN.SIDEBAR.SERVICES'}), ADMIN_ROUTES.SERVICES, 'magic'],
            [intl.formatMessage({id: 'ADMIN.SIDEBAR.SCHEDULES'}), ADMIN_ROUTES.SCHEDULES, 'calendar-alt'],
            [intl.formatMessage({id: 'ADMIN.SIDEBAR.EMPLOYEES'}), ADMIN_ROUTES.EMPLOYEES, 'people-carry'],
            [intl.formatMessage({id: 'ADMIN.SIDEBAR.CUSTOMERS'}), ADMIN_ROUTES.CUSTOMERS, 'address-card'],
            [intl.formatMessage({id: 'ADMIN.SIDEBAR.APPOINTMENTS'}), ADMIN_ROUTES.APPOINTMENTS, 'address-book'],
        ]
    });
    return (
        <>
            {links &&
            <KDashboardContainer links={links}>
                {children}
            </KDashboardContainer>
            }
        </>
    )
}


export default AdminDashboard;
