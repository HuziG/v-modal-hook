<script lang="ts" setup>
import { useModal } from 'v-modal-hook'

const [register, { openModal }] = useModal({
  title: 'Modal!',
})
</script>

<template>
  <div class="flex items-center justify-center my-5">
    <n-button type="primary" @click="openModal">
      插槽Action
    </n-button>

    <basicModal @register="register">
      <template #action>
        这里是自定义底部插槽
      </template>
    </basicModal>
  </div>
</template>

  <style>

  </style>

