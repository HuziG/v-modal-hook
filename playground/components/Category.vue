<script lang="ts">
export default {
  name: 'Category',
}
</script>

<script lang="ts" setup>
const handleClick = (id: string) => {
  location.hash = `#${id}`
}
</script>

<template>
  <div>
    <div
      v-for="item in [
        { label: '基本示例', id: 'base' },
        { label: '插槽', id: 'slot' },
        { label: '表单校验与设置', id: 'form' },
      ]"
      :key="item.id"
      class="mb-3 text-md cursor-pointer hover:opacity-70 active:opacity-50 !select-none"
      @click="handleClick(item.id)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<style>

</style>
