import React, {ChangeEventHandler} from 'react';
import {Input} from 'reactstrap';
import {InputType} from 'reactstrap/es/Input';

interface KInputProps {
    className?: string;
    type?: InputType;
    placeholder?: string;
    value?: string | ReadonlyArray<string> | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const KInput: React.FunctionComponent<KInputProps> = (
    {
        className,
        type,
        placeholder,
        value,
        onChange
    }) => {
    return (
        <Input className={className}
               type={type}
               value={value}
               placeholder={placeholder}
               onChange={onChange}/>
    )
}


export default KInput;
