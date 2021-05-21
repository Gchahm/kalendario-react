import React from 'react';
import {Shift} from 'src/app/api/shifts';
import {KFlexColumn} from 'src/app/shared/molecules/flex';

interface ShiftCellProps {
    shift: Shift;
}

const ShiftCell: React.FunctionComponent<ShiftCellProps> = (
    {
        shift
    }) => {
    return (
        <KFlexColumn>
            {shift.frames.map(f => <div>{f.name}</div>)}
        </KFlexColumn>
    )
}


export default ShiftCell;
