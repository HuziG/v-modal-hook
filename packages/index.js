import ModalHook from './Modal/src/basicModal.vue';
export { useModal } from './Modal/src/hooks/useModal';
export * from './Modal/src/type';
const components = [ModalHook];
const install = (App) => {
    components.forEach((item) => {
        App.component(item.__name, item);
    });
};
export default {
    install,
};
