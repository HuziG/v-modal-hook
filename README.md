# 📺 v-modal-hook

- 🔥 Built with **Vue** Composition API
- 👂 Support **naive-ui** about modal component
- ✅ Only supports **Vue 3**
- ✨ Built with **TypeScript**

This is demo url:[🌍 **demo**]().

About the npm url is here: [🌍 **demo**](https://www.npmjs.com/package/v-modal-hook).

## Installation

```bash
npm install v-modal-hook
```

## Examples

the basic modal using

```js
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { useModal } from 'v-modal-hook'

const message = useMessage()

const [register, { openModal, closeModal, setSubDisabled, setSubLoading }] = 
  useModal({
    title: 'Modal!',
  })

const handleOk = () => {
  message.info('this is ok callback')

  setTimeout(() => {
    setSubLoading(false)
  }, 1000)
}
</script>
```

```html
<div class="flex flex-col items-center justify-center my-5">
  <div>
    <n-button type="primary" @click="openModal">
      Open
    </n-button>
  </div>

  <basicModal @register="register" @on-ok="handleOk">
    this is modal content
  </basicModal>
</div>
```
