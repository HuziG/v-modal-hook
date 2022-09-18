import type { DialogOptions } from 'naive-ui/lib/dialog';
/**
 * @description: 弹窗对外暴露的方法
 */
export interface ModalMethods {
    setProps: (props: ModalProps) => void;
    openModal: () => void;
    closeModal: () => void;
    setSubLoading: (status: boolean) => void;
    setSubDisabled: (status: boolean) => void;
    setModalLoading: (status: boolean) => void;
    getInsideRef?: (status: any) => void;
    getCurrentChangeValue?: (status: boolean) => void;
}
/**
 * 支持修改，DialogOptions 參數
 */
export declare type ModalProps = DialogOptions;
export declare type RegisterFn = (ModalInstance: ModalMethods) => void;
export declare type UseModalReturnType = [RegisterFn, ModalMethods];
export declare type ComponentType = 'NInput' | 'NInputGroup' | 'NInputPassword' | 'NInputSearch' | 'NInputTextArea' | 'NInputNumber' | 'NInputCountDown' | 'NSelect' | 'NTreeSelect' | 'NRadioButtonGroup' | 'NRadioGroup' | 'NCheckbox' | 'NCheckboxGroup' | 'NAutoComplete' | 'NCascader' | 'NDatePicker' | 'NMonthPicker' | 'NRangePicker' | 'NWeekPicker' | 'NTimePicker' | 'NSwitch' | 'NStrengthMeter' | 'NUpload' | 'NIconPicker' | 'NRender' | 'NSlider' | 'NRate';
