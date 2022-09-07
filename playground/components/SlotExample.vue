<script lang="ts" setup>
import { useModal } from 'v-modal-hook'
import { SlotExampleCode } from './jstemplate'

const [register, { openModal }] = useModal({
  title: '自定义内容',
})
</script>

<template>
  <div id="slot" class="flex flex-col items-center justify-center pt-5">
    <n-button type="primary" size="large" @click="openModal">
      插槽Action
    </n-button>

    <div class="my-5 w-full xl:w-1/2 mt-5">
      <div class="text-base py-2 px-5" style="background: #4A8479">
        index.vue
      </div>

      <highlightjs language="javascript" :code="SlotExampleCode" />
    </div>

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

  <style>

  </style>

