<script lang="ts" setup>
import {
  computed,
  defineEmits,
  defineProps,
  getCurrentInstance,
  nextTick,
  ref,
  unref,
  useAttrs,
} from 'vue'
import { NSpace } from 'naive-ui'
import { basicProps } from './props'
import type { ModalMethods, ModalProps } from './type'
import type { FormProps } from './type/form'
import startDrag from '@/utils/Drag'
import { deepMerge } from '@/utils'

const props = defineProps({ ...basicProps })
const emit = defineEmits(['on-close', 'on-ok', 'register'])
const attrs = useAttrs()
const propsRef = ref<Partial<ModalProps> | null>(null)

const isModal = ref(false)
const subLoading = ref(false)
const modalLoading = ref(false)
const subSubDisabled = ref(false)

const getProps = computed((): FormProps => {
  return { ...props, ...(unref(propsRef) as any) }
})

const subBtuText = computed(() => {
  const { subBtuText } = propsRef.value as any
  return subBtuText || props.subBtuText
})

async function setProps(modalProps: Partial<ModalProps>): Promise<void> {
  propsRef.value = deepMerge(unref(propsRef) || ({} as any), modalProps)
}

const getBindValue = computed(() => {
  return {
    ...attrs,
    ...unref(getProps),
    ...unref(propsRef),
  }
})

function setSubLoading(status: boolean) {
  subLoading.value = status
}

function setSubDisabled(status: boolean) {
  subSubDisabled.value = status
}

function setModalLoading(status: boolean) {
  modalLoading.value = status
}

function openModal() {
  return new Promise<void>((resolve) => {
    isModal.value = true
    nextTick(() => {
      const oBox = document.getElementById('basic-modal')
      const oBar = document.getElementById('basic-modal-bar')
      startDrag(oBar, oBox)
      resolve()
    })
  })
}

function closeModal() {
  isModal.value = false
  subLoading.value = false
  emit('on-close')
}

function onCloseModal() {
  isModal.value = false
  emit('on-close')
}

function handleSubmit() {
  subLoading.value = true
  emit('on-ok')
}

const modalMethods: ModalMethods = {
  setProps,
  openModal,
  closeModal,
  setSubLoading,
  setModalLoading,
  setSubDisabled,
}

const instance = getCurrentInstance()
if (instance)
  emit('register', modalMethods)
</script>

<template>
  <n-modal
    id="basic-modal"
    v-bind="getBindValue"
    v-model:show="isModal"
    @close="onCloseModal"
  >
    <template #header>
      <div id="basic-modal-bar" class="w-full cursor-move">
        {{ getBindValue.title }}
      </div>
    </template>
    <template #default>
      <slot name="default" />
    </template>
    <template v-if="!$slots.action" #action>
      <NSpace>
        <n-button @click="closeModal">
          取消
        </n-button>
        <n-button
          type="primary"
          :disabled="subSubDisabled"
          :loading="subLoading"
          @click="handleSubmit"
        >
          {{ subBtuText }}
        </n-button>
      </NSpace>
    </template>
    <template v-else #action>
      <n-spin :show="modalLoading">
        <slot name="action" />
      </n-spin>
    </template>
  </n-modal>
</template>

<style>
.cursor-move {
  cursor: move;
}
</style>
