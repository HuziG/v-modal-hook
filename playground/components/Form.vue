<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { FormInst } from 'naive-ui'
import { useMessage } from 'naive-ui'

interface FormModel {
  inputValue: number | null
  textareaValue: string | null
  selectValue: number | null
  multipleSelectValue: number | null
  datetimeValue: number | null
}

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null)
    const message = useMessage()

    const model = ref<FormModel>({
      inputValue: null,
      textareaValue: null,
      selectValue: null,
      multipleSelectValue: null,
      datetimeValue: null,
    })

    const handleSetFormValue = (value: FormModel) => {
      model.value = value
    }

    return {
      formRef,
      size: ref('medium'),
      model,
      generalOptions: ['groode', 'veli good', 'emazing', 'lidiculous'].map(
        v => ({
          label: v,
          value: v,
        }),
      ),
      rules: {
        inputValue: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入 inputValue',
        },
        textareaValue: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入 textareaValue',
        },
        selectValue: {
          required: true,
          trigger: ['blur', 'change'],
          message: '请选择 selectValue',
        },
        multipleSelectValue: {
          type: 'array',
          required: true,
          trigger: ['blur', 'change'],
          message: '请选择 multipleSelectValue',
        },
        datetimeValue: {
          type: 'number',
          required: true,
          trigger: ['blur', 'change'],
          message: '请输入 datetimeValue',
        },
      },
      handleSetFormValue,
      handleValidateButtonClick() {
        formRef.value?.validate((errors) => {
          if (!errors) {
            message.success('验证成功')
          }
          else {
            console.error(errors)
            message.error('验证失败')
          }
        })
      },
    }
  },
})
</script>

<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    label-placement="left"
    label-width="auto"
    require-mark-placement="right-hanging"
    :size="size"
    :style="{
      maxWidth: '640px',
    }"
  >
    <n-form-item label="Input" path="inputValue">
      <n-input v-model:value="model.inputValue" placeholder="Input" />
    </n-form-item>
    <n-form-item label="Textarea" path="textareaValue">
      <n-input
        v-model:value="model.textareaValue"
        placeholder="Textarea"
        type="textarea"
        :autosize="{
          minRows: 3,
          maxRows: 5,
        }"
      />
    </n-form-item>
    <n-form-item label="Select" path="selectValue">
      <n-select
        v-model:value="model.selectValue"
        placeholder="Select"
        :options="generalOptions"
      />
    </n-form-item>
    <n-form-item label="Multiple Select" path="multipleSelectValue">
      <n-select
        v-model:value="model.multipleSelectValue"
        placeholder="Select"
        :options="generalOptions"
        multiple
      />
    </n-form-item>
    <n-form-item label="Datetime" path="datetimeValue">
      <n-date-picker v-model:value="model.datetimeValue" type="datetime" />
    </n-form-item>
  </n-form>
</template>
