<script lang="ts" setup>
import { ref } from 'vue'
import { useModal } from 'v-modal-hook'
import { FormCode, FormExampleCode } from './jstemplate'
import Form from './Form.vue'

const formRef = ref<any>(null)

const [register, { openModal, setSubLoading }] = useModal({
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

const setFormValue = async () => {
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
  <div class="flex flex-col items-center justify-center mt-5">
    <div class="my-5 w-full xl:w-1/2">
      <div class="flex flex-col border border-dashed border-gray-200 rounded p-5 mb-5">
        <div class="text-base pb-5">
          表单校验与设置
        </div>
        <n-space>
          <n-button type="primary" style="width: 100px;" @click="openModal">
            表单校验
          </n-button>
          <n-button type="primary" style="width: 100px;" @click="setFormValue">
            表单设置
          </n-button>
        </n-space>
      </div>

      <div class="text-base py-2 px-5" style="background: #005883">
        <span class="border-r pr-5 mr-5">
          <span class="cursor-pointer hover:opacity-70 active:opacity-50" @click="exampleCode = FormExampleCode">index.vue</span>
        </span>
        <span class="cursor-pointer hover:opacity-70 active:opacity-50" @click="exampleCode = FormCode">Form.vue</span>
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

  <style>

  </style>

