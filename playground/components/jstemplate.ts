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
import { FormCode, FormExampleCode } from './jstemplate'
import Form from './Form.vue'

const formRef = ref<any>(null)

const [register, { openModal, setSubLoading, setProps }] = useModal({
  title: '表单示例',
  style: 'width: 40%',
})

const exampleCode = ref(FormExampleCode)

const handleOk = () => {
  formRef.value.handleValidateButtonClick()

  setTimeout(() => {
    setSubLoading(false)
  }, 1000)
}

const validateFormValue = () => {
  setProps({
    title: '表单校验',
  })

  openModal()
}

const setFormValue = async () => {
  setProps({
    title: '表单数据设置',
  })

  const form = {
    inputValue: 'input input input',
    textareaValue: 'textarea textarea textarea',
    selectValue: 'veli good',
    multipleSelectValue: ['groode', 'veli good', 'emazing', 'lidiculous'],
    datetimeValue: +new Date(),
  }

  // await 保证了弹框打开后
  await openModal()

  formRef.value.handleSetFormValue(form)
}
</script>

<template>
  <div id="form" class="flex flex-col items-center justify-center pt-5">
    <div class="my-5 w-full xl:w-1/2">
      <div class="flex flex-col border border-dashed border-gray-200 rounded p-5 mb-5">
        <div class="text-base pb-5">
          表单校验与设置
        </div>
        <n-space>
          <n-button type="primary" style="width: 100px;" @click="validateFormValue">
            表单校验
          </n-button>
          <n-button type="primary" @click="setFormValue">
            表单数据设置
          </n-button>
        </n-space>
      </div>

      <div class="text-base py-2 px-5" style="background: #4A8479">
        <span class="border-r pr-5 mr-5">
          <span
            class="cursor-pointer hover:opacity-70 active:opacity-50"
            @click="exampleCode = FormExampleCode"
          >index.vue</span>
        </span>
        <span
          class="cursor-pointer hover:opacity-70 active:opacity-50"
          @click="exampleCode = FormCode"
        >Form.vue</span>
      </div>

      <highlightjs language="javascript" :code="exampleCode" />
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
