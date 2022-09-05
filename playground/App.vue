<script lang="ts" setup>
import { NMessageProvider } from 'naive-ui'
import PowerExample from './components/PowerExample.vue'
import SlotExample from './components/SlotExample.vue'
import FormExample from './components/FormExample.vue'
</script>

<template>
  <NMessageProvider>
    <div class="flex items-center flex-col justify-center pt-16 mb-16">
      <div class="relative flex items-center text-center text-5xl">
        v-modal-hook
        <span class="absolute -right-20 rounded px-2 py-1 text-xs" style="background: #19A058;">
          naive-ui
        </span>
      </div>

      <div class="text-gray-200 pt-5">
        以 hook 方式来调取 modal
      </div>
    </div>

    <PowerExample />
    <SlotExample />
    <FormExample />
  </NMessageProvider>
</template>

<style>
  body,
  html {
    background: linear-gradient(180deg, #2980b9 0%,#2c3e50 100%);
    color: #ffffff;
  }

  pre {
    margin: 0 !important;
  }
</style>
