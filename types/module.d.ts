declare module "*.vue" {
  import { DefineComponent } from "vue";

  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module "virtual:*" {
  const result: any;
  export default result;
}

declare module "v-modal-hook" {
  export {
    useModal
  };
}

declare module "v-modal-hook" {
  const content: any;
  export default content;
}

declare module "*.less" {
  const content: any;
  export default content;
}
// 声明第三方库
declare module "dedent";
