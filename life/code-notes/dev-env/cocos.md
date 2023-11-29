# Cocos Creator

## 重要链接

- 编辑器界面操作：[场景编辑器](https://docs.cocos.com/creator/3.4/manual/zh/editor/scene/)（可以参考下方[技巧](#技巧)）
- [3D 相机文档](https://docs.cocos.com/creator/3.4/manual/zh/editor/components/camera-component.html)
- [MeshRenderer 组件参考](https://docs.cocos.com/creator/3.4/manual/zh/engine/renderable/model-component.html)
- [加载资源](https://docs.cocos.com/creator/3.4/manual/zh/asset/dynamic-load-resources.html)
- 关于重力：[物理世界和元素](https://docs.cocos.com/creator/3.4/manual/zh/physics/physics.html#%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%E5%92%8C%E5%85%83%E7%B4%A0) —— 物理世界中的每个元素都可以理解为一个独立的**刚体**，在 Cocos Creator 3.x 中可以通过为游戏对象添加 [Collider 碰撞组件](https://docs.cocos.com/creator/3.4/manual/zh/physics/physics-collider.html) 或者 [RigidBody 刚体组件](https://docs.cocos.com/creator/3.4/manual/zh/physics/physics-rigidbody.html) 让物理元素具备物理特性。物理系统将为这些元素进行物理计算，比如计算各物体是否产生碰撞，以及物体的受力情况。当计算完成后，物理系统会将物理世界更新到场景世界中，仿真还原真实世界中的物理行为。

## 技巧

在 3D 视图下，可以通过以下操作来移动和定位 场景编辑器 的视图：

- 鼠标左键 + Alt：以视图中心点为中心旋转。
- 鼠标中键：平移视图。
- 鼠标滚轮：以视图中心点为中心缩放视图。
- 鼠标右键 + WASD：摄像机漫游。
- Ctrl+Shift+F：摄像机聚焦到当前选中节点。

## QA

### 加载项目遇到 Loading Resources 卡住不动

新的空项目仍然会出现此问题，怀疑是 Cocos Dashboard(v2.1.1) 使用了自定义安装路径，使用默认安装路径就未出现此问题。  
另外，如果同时下载两个 Creator 版本，会出现“下载失败”的报错。
