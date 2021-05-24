import React, {useMemo} from 'react';
import {AdminTableContainerProps} from 'src/app/shared/admin/interfaces';
import KTable from 'src/app/shared/molecules/tables/k-table';
import KTextColumnFilter from 'src/app/shared/molecules/tables/k-text-column-filter';
import ShiftCell from './shift-cell';

const SchedulesTable: React.FunctionComponent<AdminTableContainerProps> = (
    {
        entities,
        buttonsColumn,
    }) => {
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
                Filter: KTextColumnFilter
            },
            ...['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(day => (
                {
                    Header: day.toUpperCase(),
                    accessor: day,
                    Cell: (value: any) => <ShiftCell shift={value.cell.value}/>
                }
            )),
            buttonsColumn
        ],
        []
    )

    return (
        <KTable columns={columns} data={entities}/>
    )
}


export default SchedulesTable;
