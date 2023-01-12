# [React Native](https://reactnative.dev/docs/environment-setup)

## sol

### Invariant Violation: "main" has not been registered

```
 ERROR  Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.
```

todo

### error: Unable to load contents of file list: '/Target Support Files/Pods-xxx/Pods-xxx-frameworks-Debug-input-files.xcfilelist' (in target 'xxx')

[refer](https://github.com/rocketinsights/Unity-iOS/issues/1#issuecomment-1191972466)

```shell
pod install
```

### yogakit/yogakit.modulemap' not found React Native

[refer](https://github.com/facebook/react-native/issues/29605)

[useful](https://github.com/facebook/react-native/issues/29605#issuecomment-695197302)

> Maybe u can open `xxx.xcworkspace` instead of `xxx.xcodeproj`

### /xxx/ios/xxx.xcodeproj: error: The linked library 'libPods-xxx.a' is missing one or more architectures required by this target: x86_64. (in target 'xxx' from project 'xxx')

```shell
arch -x86_64 pod install
```
