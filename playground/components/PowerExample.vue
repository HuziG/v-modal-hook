<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { useModal } from 'v-modal-hook'
import { PowerExampleCode } from './jstemplate'

const message = useMessage()

const [register, { openModal, closeModal, setSubDisabled, setSubLoading }] = useModal({
  title: '基本示例',
})

const handleOk = () => {
  message.info('这是确定回调')

  setTimeout(() => {
    setSubLoading(false)
  }, 1000)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-5">
    <div>
      <n-button type="primary" size="large" @click="openModal">
        基本示例
      </n-button>
    </div>

    <div class="my-5 w-full xl:w-1/2">
      <div class="text-base py-2 px-5" style="background: #005883">
        index.vue
      </div>

      <highlightjs language="javascript" :code="PowerExampleCode" />
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

<style>

</style>
