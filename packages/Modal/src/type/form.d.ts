import type { CSSProperties } from 'vue';
import type { GridItemProps, GridProps } from 'naive-ui/lib/grid';
import type { ButtonProps } from 'naive-ui/lib/button';
import type { ComponentType } from './index';
export interface FormSchema {
    field: string;
    label: string;
    labelMessage?: string;
    labelMessageStyle?: object | string;
    defaultValue?: any;
    component?: ComponentType;
    componentProps?: object;
    slot?: string;
    rules?: object | object[];
    giProps?: GridItemProps;
    isFull?: boolean;
    suffix?: string;
}
export interface FormProps {
    model?: Recordable;
    labelWidth?: number | string;
    schemas?: FormSchema[];
    inline: boolean;
    layout?: string;
    size: string;
    labelPlacement: string;
    isFull: boolean;
    showActionButtonGroup?: boolean;
    showResetButton?: boolean;
    resetButtonOptions?: Partial<ButtonProps>;
    showSubmitButton?: boolean;
    showAdvancedButton?: boolean;
    submitButtonOptions?: Partial<ButtonProps>;
    submitButtonText?: string;
    resetButtonText?: string;
    gridProps?: GridProps;
    giProps?: GridItemProps;
    resetFunc?: () => Promise<void>;
    submitFunc?: () => Promise<void>;
    submitOnReset?: boolean;
    baseGridStyle?: CSSProperties;
    collapsedRows?: number;
}
export interface FormActionType {
    submit: () => Promise<any>;
    setProps: (formProps: Partial<FormProps>) => Promise<void>;
    setFieldsValue: <T>(values: T) => Promise<void>;
    clearValidate: (name?: string | string[]) => Promise<void>;
    getFieldsValue: () => Recordable;
    resetFields: () => Promise<void>;
    validate: (nameList?: any[]) => Promise<any>;
}
