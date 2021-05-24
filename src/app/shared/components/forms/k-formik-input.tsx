import {ErrorMessage, Field, FieldInputProps, FormikContextType, useFormikContext} from 'formik';
import * as React from 'react';
import {FormFeedback, FormGroup} from 'reactstrap';
import {KFormikInputBaseProps} from 'src/app/shared/components/forms/interfaces';
import KColorInput from 'src/app/shared/components/primitives/inputs/k-color-input';
import KDurationInput from 'src/app/shared/components/primitives/inputs/k-duration-input';
import KMultiSelectInput from 'src/app/shared/components/primitives/inputs/k-multi-select-input';

export interface KFormikInputProps extends KFormikInputBaseProps {
    options?: { id: number, name: string }[];
    multiple?: boolean;
    emptyOption?: boolean;
    as?: string;
}

function inputAs(as: string,
                 options: { id: number; name: string }[] | undefined
): string | React.FunctionComponent<any> | React.ForwardRefExoticComponent<any> {
    switch (as) {
        case 'duration':
            return KDurationInput
        case 'color':
            return KColorInput
        case 'multi-select':
            return (fieldProps: FieldInputProps<any>) =>
                <KMultiSelectInput
                    name={fieldProps.name}
                    value={fieldProps.value}
                    onChange={fieldProps.onChange}
                    onBlur={fieldProps.onBlur}
                    options={options || []}
                />

        default:
            return as;
    }
}

export const KFormikInput: React.FunctionComponent<KFormikInputProps> = (
    {
        name,
        placeholder,
        type,
        options,
        multiple = false,
        emptyOption = true,
        as = 'input'
    }
) => {
    const formik = useFormikContext();
    let className = "form-control";
    const fieldMeta = formik.getFieldMeta(name);
    className += (fieldMeta.error && fieldMeta.touched) ? ' is-invalid' : '';
    className += multiple ? ' form-select form-control' : '';

    return (
        <FormGroup>
            <Field className={className}
                   as={inputAs(as, options)}
                   name={name}
                   type={type}
                   multiple={multiple}
                   onKeyUp={onchange}
                   placeholder={placeholder || name}>
                {options &&
                <>
                    {emptyOption && !multiple && <option value={0}/>}
                    {options.map((option) =>
                        <option key={option.id} value={option.id}>{option.name}</option>)
                    }
                </>
                }
            </Field>
            <FormFeedback>
                <ErrorMessage name={name}/>
            </FormFeedback>
        </FormGroup>
    )
}

