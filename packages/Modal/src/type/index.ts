import type { DialogOptions } from 'naive-ui/lib/dialog'

/**
 * @description: 弹窗对外暴露的方法
 */
export interface ModalMethods {
  setProps: (props: ModalProps) => void
  openModal: () => void
  closeModal: () => void
  setSubLoading: (status: boolean) => void
  setSubDisabled: (status: boolean) => void
  setModalLoading: (status: boolean) => void
  // 获取 modal 中的组件 ref
  getInsideRef?: (status: any) => void
  // 获取当前修改的变量
  getCurrentChangeValue?: (status: boolean) => void
}

/**
 * 支持修改，DialogOptions 參數
 */
export type ModalProps = DialogOptions

export type RegisterFn = (ModalInstance: ModalMethods) => void

export type UseModalReturnType = [RegisterFn, ModalMethods]

export type ComponentType =
  | 'NInput'
  | 'NInputGroup'
  | 'NInputPassword'
  | 'NInputSearch'
  | 'NInputTextArea'
  | 'NInputNumber'
  | 'NInputCountDown'
  | 'NSelect'
  | 'NTreeSelect'
  | 'NRadioButtonGroup'
  | 'NRadioGroup'
  | 'NCheckbox'
  | 'NCheckboxGroup'
  | 'NAutoComplete'
  | 'NCascader'
  | 'NDatePicker'
  | 'NMonthPicker'
  | 'NRangePicker'
  | 'NWeekPicker'
  | 'NTimePicker'
  | 'NSwitch'
  | 'NStrengthMeter'
  | 'NUpload'
  | 'NIconPicker'
  | 'NRender'
  | 'NSlider'
  | 'NRate'

