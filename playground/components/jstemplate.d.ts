export declare const PowerExampleCode = "<script lang=\"ts\" setup>\nimport { useMessage } from 'naive-ui'\nimport { useModal } from 'v-modal-hook'\n\nconst message = useMessage()\n\nconst [register, { openModal, closeModal, setSubDisabled, setSubLoading }] = \n  useModal({\n    title: 'Modal!',\n  })\n\nconst handleOk = () => {\n  message.info('\u8FD9\u662F\u786E\u5B9A\u56DE\u8C03')\n\n  setTimeout(() => {\n    setSubLoading(false)\n  }, 1000)\n}\n</script>\n\n<template>\n  <div class=\"flex flex-col items-center justify-center my-5\">\n    <div>\n      <n-button type=\"primary\" @click=\"openModal\">\n        Open\n      </n-button>\n    </div>\n\n    <basicModal @register=\"register\" @on-ok=\"handleOk\">\n      <n-space>\n        <n-button @click=\"closeModal\">\n          \u5173\u95ED\u5F39\u6846\n        </n-button>\n\n        <n-button-group>\n          <n-button @click=\"setSubDisabled(true)\">\n            \u7981\u7528\u63D0\u4EA4\u6309\u94AE\n          </n-button>\n          <n-button @click=\"setSubDisabled(false)\">\n            \u6FC0\u6D3B\u63D0\u4EA4\u6309\u94AE\n          </n-button>\n        </n-button-group>\n\n        <n-button-group>\n          <n-button @click=\"setSubLoading(true)\">\n            \u52A0\u8F7D\u63D0\u4EA4\u6309\u94AE\n          </n-button>\n          <n-button @click=\"setSubLoading(false)\">\n            \u5173\u95ED\u52A0\u8F7D\n          </n-button>\n        </n-button-group>\n      </n-space>\n    </basicModal>\n  </div>\n</template>\n";
export declare const SlotExampleCode = "<script lang=\"ts\" setup>\nimport { useModal } from 'v-modal-hook'\n\nconst [register, { openModal }] = \n  useModal({\n    title: 'Modal!',\n  })\n</script>\n\n<template>\n  <div class=\"flex items-center justify-center my-5\">\n    <n-button type=\"primary\" @click=\"openModal\">\n      \u63D2\u69FDAction\n    </n-button>\n\n    <basicModal @register=\"register\">\n      <template #default>\n        \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49\u5185\u5BB9\u63D2\u69FD\n      </template>\n\n      <template #action>\n        \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49\u5E95\u90E8\u63D2\u69FD\n      </template>\n    </basicModal>\n  </div>\n</template>\n";
export declare const FormExampleCode = "<script lang=\"ts\" setup>\nimport { ref } from 'vue'\nimport { useModal } from 'v-modal-hook'\nimport { FormCode, FormExampleCode } from './jstemplate'\nimport Form from './Form.vue'\n\nconst formRef = ref<any>(null)\n\nconst [register, { openModal, setSubLoading, setProps }] = useModal({\n  title: '\u8868\u5355\u793A\u4F8B',\n  style: 'width: 40%',\n})\n\nconst exampleCode = ref(FormExampleCode)\n\nconst handleOk = () => {\n  formRef.value.handleValidateButtonClick()\n\n  setTimeout(() => {\n    setSubLoading(false)\n  }, 1000)\n}\n\nconst validateFormValue = () => {\n  setProps({\n    title: '\u8868\u5355\u6821\u9A8C',\n  })\n\n  openModal()\n}\n\nconst setFormValue = async () => {\n  setProps({\n    title: '\u8868\u5355\u6570\u636E\u8BBE\u7F6E',\n  })\n\n  const form = {\n    inputValue: 'input input input',\n    textareaValue: 'textarea textarea textarea',\n    selectValue: 'veli good',\n    multipleSelectValue: ['groode', 'veli good', 'emazing', 'lidiculous'],\n    datetimeValue: +new Date(),\n  }\n\n  // await \u4FDD\u8BC1\u4E86\u5F39\u6846\u6253\u5F00\u540E\n  await openModal()\n\n  formRef.value.handleSetFormValue(form)\n}\n</script>\n\n<template>\n  <div id=\"form\" class=\"flex flex-col items-center justify-center pt-5\">\n    <div class=\"my-5 w-full xl:w-1/2\">\n      <div class=\"flex flex-col border border-dashed border-gray-200 rounded p-5 mb-5\">\n        <div class=\"text-base pb-5\">\n          \u8868\u5355\u6821\u9A8C\u4E0E\u8BBE\u7F6E\n        </div>\n        <n-space>\n          <n-button type=\"primary\" style=\"width: 100px;\" @click=\"validateFormValue\">\n            \u8868\u5355\u6821\u9A8C\n          </n-button>\n          <n-button type=\"primary\" @click=\"setFormValue\">\n            \u8868\u5355\u6570\u636E\u8BBE\u7F6E\n          </n-button>\n        </n-space>\n      </div>\n\n      <div class=\"text-base py-2 px-5\" style=\"background: #4A8479\">\n        <span class=\"border-r pr-5 mr-5\">\n          <span\n            class=\"cursor-pointer hover:opacity-70 active:opacity-50\"\n            @click=\"exampleCode = FormExampleCode\"\n          >index.vue</span>\n        </span>\n        <span\n          class=\"cursor-pointer hover:opacity-70 active:opacity-50\"\n          @click=\"exampleCode = FormCode\"\n        >Form.vue</span>\n      </div>\n\n      <highlightjs language=\"javascript\" :code=\"exampleCode\" />\n    </div>\n\n    <basicModal @register=\"register\" @on-ok=\"handleOk\">\n      <template #default>\n        <Form ref=\"formRef\" />\n      </template>\n    </basicModal>\n  </div>\n</template>\n";
export declare const FormCode = "<script lang=\"ts\">\nimport { defineComponent, ref } from 'vue'\nimport type { FormInst } from 'naive-ui'\nimport { useMessage } from 'naive-ui'\n\nexport default defineComponent({\n  setup() {\n    const formRef = ref<FormInst | null>(null)\n    const message = useMessage()\n\n    return {\n      formRef,\n      size: ref('medium'),\n      model: ref({\n        inputValue: null,\n        textareaValue: null,\n        selectValue: null,\n        multipleSelectValue: null,\n        datetimeValue: null,\n      }),\n      generalOptions: ['groode', 'veli good', 'emazing', 'lidiculous'].map(\n        v => ({\n          label: v,\n          value: v,\n        }),\n      ),\n      rules: {\n        inputValue: {\n          required: true,\n          trigger: ['blur', 'input'],\n          message: '\u8BF7\u8F93\u5165 inputValue',\n        },\n        textareaValue: {\n          required: true,\n          trigger: ['blur', 'input'],\n          message: '\u8BF7\u8F93\u5165 textareaValue',\n        },\n        selectValue: {\n          required: true,\n          trigger: ['blur', 'change'],\n          message: '\u8BF7\u9009\u62E9 selectValue',\n        },\n        multipleSelectValue: {\n          type: 'array',\n          required: true,\n          trigger: ['blur', 'change'],\n          message: '\u8BF7\u9009\u62E9 multipleSelectValue',\n        },\n        datetimeValue: {\n          type: 'number',\n          required: true,\n          trigger: ['blur', 'change'],\n          message: '\u8BF7\u8F93\u5165 datetimeValue',\n        },\n      },\n      handleValidateButtonClick() {\n        formRef.value?.validate((errors) => {\n          if (!errors) {\n            message.success('\u9A8C\u8BC1\u6210\u529F')\n          }\n          else {\n            console.error(errors)\n            message.error('\u9A8C\u8BC1\u5931\u8D25')\n          }\n        })\n      },\n    }\n  },\n})\n</script>\n\n<template>\n  <n-form\n    ref=\"formRef\"\n    :model=\"model\"\n    :rules=\"rules\"\n    label-placement=\"left\"\n    label-width=\"auto\"\n    require-mark-placement=\"right-hanging\"\n    :size=\"size\"\n    :style=\"{\n      maxWidth: '640px',\n    }\"\n  >\n    <n-form-item label=\"Input\" path=\"inputValue\">\n      <n-input v-model:value=\"model.inputValue\" placeholder=\"Input\" />\n    </n-form-item>\n    <n-form-item label=\"Textarea\" path=\"textareaValue\">\n      <n-input\n        v-model:value=\"model.textareaValue\"\n        placeholder=\"Textarea\"\n        type=\"textarea\"\n        :autosize=\"{\n          minRows: 3,\n          maxRows: 5,\n        }\"\n      />\n    </n-form-item>\n    <n-form-item label=\"Select\" path=\"selectValue\">\n      <n-select\n        v-model:value=\"model.selectValue\"\n        placeholder=\"Select\"\n        :options=\"generalOptions\"\n      />\n    </n-form-item>\n    <n-form-item label=\"Multiple Select\" path=\"multipleSelectValue\">\n      <n-select\n        v-model:value=\"model.multipleSelectValue\"\n        placeholder=\"Select\"\n        :options=\"generalOptions\"\n        multiple\n      />\n    </n-form-item>\n    <n-form-item label=\"Datetime\" path=\"datetimeValue\">\n      <n-date-picker v-model:value=\"model.datetimeValue\" type=\"datetime\" />\n    </n-form-item>\n  </n-form>\n</template>\n\n";