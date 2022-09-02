import {
  NButton,
  NButtonGroup,
  NModal,
  NSpace,
  create,
} from 'naive-ui'

const naive = create({
  components: [
    NModal,
    NButton,
    NButtonGroup,
    NSpace,
  ],
})

export function setupNaive(app: any) {
  app.use(naive)
}
