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

### 设置节点的可见性     <Badge type="info">[官方文档](https://docs.cocos.com/creator/3.4/manual/zh/concepts/scene/node-component.html#%E8%AE%BE%E7%BD%AE%E8%8A%82%E7%82%B9%E7%9A%84%E5%8F%AF%E8%A7%81%E6%80%A7)</Badge>

引擎采用更加通用的节点，和相机相匹配。当节点设置的 Layer 属性包含在相机的 Visibility 属性 中时，节点便可以被相机看见，同时支持 3D 组件与 2D 组件的混合渲染。以便更灵活地控制节点组件的可见性，使分组显示多样化。

节点的 Layer 属性是全局且唯一的，但是不同的节点可以设置相同的 Layer 属性，使其被同一个相机所观察。开发者可以使用引擎内置的 Layer 属性，也可以使用自定义的 Layer 属性，点击下图中的 Edit 按钮即可前往 项目设置 -> Layers 页面进行设置。详情请参考 层级 文档。

项目实践为，3D 物体在 2D 物体的层级上方。**Canvas** 为 2D 界面，设置其 Layer 为 **UI_2D** ，**Canvas-3d-front** 为 3D 界面，设置其 Layer 为 **Mahjong**，并同时挂载主摄，隐藏所有 canvas 组件子节点中的摄像头。将主摄的 visibility 调整为所有想要显示的 Layer，本次实践中为 Popup、Mahjong、UI_3D、UI_2D、DEFAULT 等。项目的 Layer 层级设置如图所示。

![1](/img/code/cocos/canvas.png)
![1](/img/code/cocos/canvas-front-3d.png)
![1](/img/code/cocos/camera-visibility.png)
![1](/img/code/cocos/layers.png)

## QA

### 加载项目遇到 Loading Resources 卡住不动

新的空项目仍然会出现此问题，怀疑是 Cocos Dashboard(v2.1.1) 使用了自定义安装路径，使用默认安装路径就未出现此问题。  
另外，如果同时下载两个 Creator 版本，会出现“下载失败”的报错。
