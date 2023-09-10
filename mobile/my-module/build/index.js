import { NativeModulesProxy, EventEmitter } from 'expo-modules-core';
// Import the native module. On web, it will be resolved to MyModule.web.ts
// and on native platforms to MyModule.ts
import MyModule from './MyModule';
import MyModuleView from './MyModuleView';
// Get the native constant value.
export const PI = MyModule.PI;
export function hello() {
    return MyModule.hello();
}
export async function setValueAsync(value) {
    return await MyModule.setValueAsync(value);
}
const emitter = new EventEmitter(MyModule ?? NativeModulesProxy.MyModule);
export function addChangeListener(listener) {
    return emitter.addListener('onChange', listener);
}
export { MyModuleView };
//# sourceMappingURL=index.js.map