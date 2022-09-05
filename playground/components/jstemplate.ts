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
