import { unref } from 'vue';
import { isObject } from './is/index';
// dynamic use hook props
export function getDynamicProps(props) {
    const ret = {};
    Object.keys(props).forEach((key) => {
        ret[key] = unref(props[key]);
    });
    return ret;
}
export function deepMerge(src = {}, target = {}) {
    let key;
    for (key in target) {
        src[key] = isObject(src[key])
            ? deepMerge(src[key], target[key])
            : (src[key] = target[key]);
    }
    return src;
}
