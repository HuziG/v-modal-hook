<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useModal } from 'v-modal-hook'
import { PowerExampleCode } from './jstemplate'
import Form from './Form.vue'

const message = useMessage()
const formRef = ref<any>(null)

const [register, { openModal, closeModal, setSubDisabled, setSubLoading }] = useModal({
  title: '表单示例',
  style: 'width: 50%',
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

  <style>

  </style>

