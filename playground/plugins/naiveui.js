import { NButton, NButtonGroup, NCheckbox, NCheckboxGroup, NDatePicker, NForm, NFormItem, NFormItemGi, NGrid, NInput, NInputNumber, NModal, NRadio, NRadioButton, NRadioGroup, NSelect, NSpace, NTransfer, create, } from 'naive-ui';
const naive = create({
    components: [
        NButton,
        NButtonGroup,
        NCheckbox,
        NCheckboxGroup,
        NDatePicker,
        NForm,
        NFormItem,
        NFormItemGi,
        NGrid,
        NInput,
        NInputNumber,
        NModal,
        NRadio,
        NRadioButton,
        NRadioGroup,
        NSelect,
        NSpace,
        NTransfer,
    ],
});
export function setupNaive(app) {
    app.use(naive);
}
