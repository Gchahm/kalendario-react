import React from 'react';
import {FlexAlign, FlexJustify} from 'src/app/shared/molecules/flex/types';


interface KFlexBoxProps {
    children: React.ReactNode;
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
}


const KFlexColumn: React.FunctionComponent<KFlexBoxProps> = (
    {
        children,
        justify,
        align,
        className = '',
    }) => {
    className += ` d-flex flex-column`;
    if (align) {
        className += ` align-items-${align}`;
    }
    if (justify) {
        className += ` justify-content-${justify}`;
    }
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default KFlexColumn;
