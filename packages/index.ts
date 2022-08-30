import ModalHook from './Modal'

// 按需引入
export { ModalHook }

const components = [ModalHook]

const install = (App: any) => {
  components.forEach((item) => {
    App.component(item.__name, item)
  })
}

export default {
  install,
}
