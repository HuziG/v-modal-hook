export const PowerExampleCode = `<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { useModal } from 'v-modal-hook'

const message = useMessage()

const [register, { openModal, closeModal, setSubDisabled, setSubLoading }] = 
  useModal({
    title: 'Modal!',
  })

const handleOk = () => {
  message.info('这是确定回调')

  setTimeout(() => {
    setSubLoading(false)
  }, 1000)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center my-5">
    <div>
      <n-button type="primary" @click="openModal">
        Open
      </n-button>
    </div>

    <basicModal @register="register" @on-ok="handleOk">
      <n-space>
        <n-button @click="closeModal">
          关闭弹框
        </n-button>

        <n-button-group>
          <n-button @click="setSubDisabled(true)">
            禁用提交按钮
          </n-button>
          <n-button @click="setSubDisabled(false)">
            激活提交按钮
          </n-button>
        </n-button-group>

        <n-button-group>
          <n-button @click="setSubLoading(true)">
            加载提交按钮
          </n-button>
          <n-button @click="setSubLoading(false)">
            关闭加载
          </n-button>
        </n-button-group>
      </n-space>
    </basicModal>
  </div>
</template>
`

export const SlotExampleCode = `<script lang="ts" setup>
import { useModal } from 'v-modal-hook'

const [register, { openModal }] = 
  useModal({
    title: 'Modal!',
  })
</script>

<template>
  <div class="flex items-center justify-center my-5">
    <n-button type="primary" @click="openModal">
      插槽Action
    </n-button>

    <basicModal @register="register">
      <template #default>
        这里是自定义内容插槽
      </template>

      <template #action>
        这里是自定义底部插槽
      </template>
    </basicModal>
  </div>
</template>
`

export const FormExampleCode = `<script lang="ts" setup>
import { ref } from 'vue'
import { useModal } from 'v-modal-hook'
import { PowerExampleCode } from './jstemplate'
import Form from './Form.vue'

const formRef = ref<any>(null)

const [register, { openModal, setSubLoading }] = useModal({
  title: '表单示例',
  style: 'width: 40%',
})

const handleOk = () => {
  formRef.value.handleValidateButtonClick()

  setTimeout(() => {
    setSubLoading(false)
  }, 1000)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-5">
    <div>
      <n-button type="primary" @click="openModal">
        表单示例
      </n-button>
    </div>

    <div class="my-5 w-full xl:w-1/2">
      <div class="text-base py-2 px-5" style="background: #005883">
        code 🌰：
      </div>

      <highlightjs language="javascript" :code="PowerExampleCode" />
    </div>

    <basicModal @register="register" @on-ok="handleOk">
      <template #default>
        <Form ref="formRef" />
      </template>
    </basicModal>
  </div>
</template>
`

export const FormCode = `<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { FormInst } from 'naive-ui'
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null)
    const message = useMessage()

    return {
      formRef,
      size: ref('medium'),
      model: ref({
        inputValue: null,
        textareaValue: null,
        selectValue: null,
        multipleSelectValue: null,
        datetimeValue: null,
      }),
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

`
