<script lang="ts" setup>
import { NMessageProvider } from 'naive-ui'
import PowerExample from './components/PowerExample.vue'
import SlotExample from './components/SlotExample.vue'
</script>

<template>
  <NMessageProvider>
    <PowerExample />
    <SlotExample />
  </NMessageProvider>
</template>

<style>
  body,
  html {
    background-color: #333333;
    color: #ffffff;
  }
</style>
