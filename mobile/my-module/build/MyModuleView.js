import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
const NativeView = requireNativeViewManager('MyModule');
export default function MyModuleView(props) {
    return React.createElement(NativeView, { ...props });
}
//# sourceMappingURL=MyModuleView.js.map