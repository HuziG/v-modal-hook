<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { useModal } from 'v-modal-hook'

const message = useMessage()

const [register, { openModal, closeModal, setSubDisabled, setSubLoading }] = useModal({
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
  <div class="flex items-center justify-center my-5">
    <n-button type="primary" @click="openModal">
      Open
    </n-button>

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
