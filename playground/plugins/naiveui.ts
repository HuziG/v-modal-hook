import {
  create,
  NModal,
  NButton
} from 'naive-ui';

const naive = create({
  components: [
    NModal,
    NButton
  ],
});

export function setupNaive(app) {
  app.use(naive);
}
