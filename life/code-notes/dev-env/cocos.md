# Cocos Creator

## 重要链接

- 编辑器界面操作：[场景编辑器](https://docs.cocos.com/creator/3.4/manual/zh/editor/scene/)（可以参考下方[技巧](#场景编辑快捷键)）
- [3D 相机文档](https://docs.cocos.com/creator/3.4/manual/zh/editor/components/camera-component.html)
- [MeshRenderer 组件参考](https://docs.cocos.com/creator/3.4/manual/zh/engine/renderable/model-component.html)
- [加载资源](https://docs.cocos.com/creator/3.4/manual/zh/asset/dynamic-load-resources.html)
- 关于重力：[物理世界和元素](https://docs.cocos.com/creator/3.4/manual/zh/physics/physics.html#%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%E5%92%8C%E5%85%83%E7%B4%A0) —— 物理世界中的每个元素都可以理解为一个独立的**刚体**，在 Cocos Creator 3.x 中可以通过为游戏对象添加 [Collider 碰撞组件](https://docs.cocos.com/creator/3.4/manual/zh/physics/physics-collider.html) 或者 [RigidBody 刚体组件](https://docs.cocos.com/creator/3.4/manual/zh/physics/physics-rigidbody.html) 让物理元素具备物理特性。物理系统将为这些元素进行物理计算，比如计算各物体是否产生碰撞，以及物体的受力情况。当计算完成后，物理系统会将物理世界更新到场景世界中，仿真还原真实世界中的物理行为。
- [生命周期](https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html)
- [节点时间系统](https://docs.cocos.com/creator/3.4/manual/zh/engine/event/event-node.html)：`Event.EventMouse`，`Event.EventTouch`
- [着色器相关语法](https://docs.cocos.com/creator/3.4/manual/zh/shader/effect-syntax.html): 即材质 materials 里面的 mesh
- [缓动系统](https://docs.cocos.com/creator/3.4/manual/zh/tween/): tween

## 技巧

### 场景编辑快捷键

在 3D 视图下，可以通过以下操作来移动和定位 场景编辑器 的视图：

- 鼠标左键 + Alt：以视图中心点为中心旋转。
- 鼠标中键：平移视图。
- 鼠标滚轮：以视图中心点为中心缩放视图。
- 鼠标右键 + WASD：摄像机漫游。
- Ctrl+Shift+F：摄像机聚焦到当前选中节点。

### 控制台不同颜色输出

使用原生 `console.log` 函数

```ts
console.log("%c Hello %s", "color: #999; font-size: 2em;", " World");
```

参考：<https://forum.cocos.org/t/topic/50436/7>

### 世界坐标转换

```ts
// 找到其他节点下父节点的坐标，建议找到坐标在 (0, 0, 0) 的 parent 节点
let worldPos = someNode.parent.parent.getComponent(UITransform).convertToWorldSpaceAR(someNode.position);
// 转化到当前坐标系下
let startPos = curNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
```

### 代码控制更新尺寸

`updateRenderData`: 立即刷新 **Label** <Badge type="info">[官方文档（并没有解释）](https://docs.cocos.com/creator/3.4/api/zh/ui/Class/Label?id=updaterenderdata)</Badge>

```ts
updateSprite() {
    const padding = 10;
    const lenBG = 61;
    let label = this.node.getChildByName('Label').getComponent(Label);
    let sprite = this.node.getComponent(Sprite);
    if (label && sprite) {
        this.textHuCondition.updateRenderData(true);
        let labelSize = label.node.getComponent(UITransform).contentSize;
        sprite.node.getComponent(UITransform).setContentSize(lenBG + labelSize.width + padding * 2,
            sprite.node.getComponent(UITransform).contentSize.height);
    }
}
```

`updateLayout`: 立即刷新 **Layout** <Badge type="info">[官方文档](https://docs.cocos.com/creator/3.4/api/zh/ui/Class/Layout?id=updatelayout)</Badge>

```ts
let layout = this.node.getComponent(Layout);
layout.updateLayout();
```

### 动画相关

#### 物体跳动

```ts
let aniNode = this.node;
let pos = aniNode.position;
let x = pos.x;
let y = pos.y;
let z = pos.z;
let offset = 1;
tween(aniNode)
    .sequence(
        tween(aniNode).to(0.018, { position: v3(x + (5 + offset), y + (offset + 7), z) }).start(),
        tween(aniNode).to(0.018, { position: v3(x - (6 + offset), y + (offset + 7), z) }).start(),
        tween(aniNode).to(0.018, { position: v3(x - (13 + offset), y + (offset + 3), z) }).start(),
        tween(aniNode).to(0.018, { position: v3(x + (3 + offset), y - (6 + offset), z) }).start(),
        tween(aniNode).to(0.018, { position: v3(x - (5 + offset), y + (offset + 5), z) }).start(),
        tween(aniNode).to(0.018, { position: v3(x + (2 + offset), y - (8 + offset), z) }).start(),
        tween(aniNode).to(0.018, { position: v3(x - (8 + offset), y - (10 + offset), z) }).start(),
        tween(aniNode).to(0.018, { position: v3(x + (3 + offset), y + (offset + 10), z) }).start(),
        tween(aniNode).to(0.018, { position: v3(x + (0 + offset), y + (offset + 0), z) }).start()
    ).repeatForever()
    .start();
```

#### 物体碰撞

```ts
const separateMergeAni = () => {
    // 剔除最后一个元素，可能有值
    let count = arr.slice(0, -1).filter(ctrl => ctrl).length;
    let mid = Math.ceil(count / 2);
    // console.log("separateMergeAni", count, arr);
    for (let index = 0; index < arr.length; ++index) {
        let ctrl = arr[index];
        if (!ctrl) {
            // 不考虑最后一个，遇到空就退出
            // console.log("movefinish");
            // movefinish();
            break;
        }
        console.log(ctrl);
        let oldPos = ctrl.node.position.clone();
        if (index < mid) {
            tween(ctrl.node)
                .to(moveTime / 3, { position: v3(oldPos.x - 100, oldPos.y, oldPos.z) }, { easing: "cubicIn" })
                .to(moveTime / 3, { position: v3(oldPos.x - 150, oldPos.y, oldPos.z) })
                .to(moveTime / 24, { position: oldPos }, { easing: "cubicOut" })
                .call(() => {
                    if (index == count - 1) {
                        // movefinish();
                    }
                })
                .start();
        } else {
            tween(ctrl.node)
                .to(moveTime / 3, { position: v3(oldPos.x + 100, oldPos.y, oldPos.z) }, { easing: "cubicIn" })
                .to(moveTime / 3, { position: v3(oldPos.x + 150, oldPos.y, oldPos.z) })
                .to(moveTime / 24, { position: oldPos }, { easing: "cubicOut" })
                .call(() => {
                    if (index == count - 1) {
                        // movefinish();
                    }
                })
                .start();
        }
    }
};
//
```

#### 修改位置后随着动画一起乱飘

```ts
protected updateArrow(active: boolean, count: number = 0) {        
    let aniNode = this.node;
    if (!active) {
        Tween.stopAllByTarget(aniNode);
        return;
    }
    let oldPos = aniNode.position.clone();
    if (active) {
        if (!count) {
            oldPos.x = 0;
        } else {
            if (count % 2) {
                oldPos.x = 0;
            } else {
                oldPos.x = 1.5;
            }
        }
    }
    oldPos = v3(oldPos.x, 3.8, oldPos.z);
    aniNode.setPosition(oldPos); // 如果不设置位置就会随着动画乱飘，是不是可以当作其他需求的 feature？
    let aniTime = 0.7;
    tween(aniNode)
        .sequence(
            tween(aniNode)
                .to(aniTime, { position: v3(oldPos.x, oldPos.y - 0.2, oldPos.z), scale: v3(0.9, 0.9, 0.9) })
                .start(),
            tween(aniNode)
                .to(aniTime, { position: v3(oldPos.x, oldPos.y, oldPos.z), scale: v3(1, 1, 1) })
                .start())
        .repeatForever()
        .start();
}            
```

### 设置节点的可见性     <Badge type="info">[官方文档](https://docs.cocos.com/creator/3.4/manual/zh/concepts/scene/node-component.html#%E8%AE%BE%E7%BD%AE%E8%8A%82%E7%82%B9%E7%9A%84%E5%8F%AF%E8%A7%81%E6%80%A7)</Badge>

有很多文档

- [设置节点的可见性](https://docs.cocos.com/creator/3.4/manual/zh/concepts/scene/node-component.html#%E8%AE%BE%E7%BD%AE%E8%8A%82%E7%82%B9%E7%9A%84%E5%8F%AF%E8%A7%81%E6%80%A7)
- [相机分组渲染](https://docs.cocos.com/creator/3.4/manual/zh/editor/components/camera-component.html#%E7%9B%B8%E6%9C%BA%E5%88%86%E7%BB%84%E6%B8%B2%E6%9F%93)
- [渲染排序规则](https://docs.cocos.com/creator/3.4/manual/zh/ui-system/components/engine/priority.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

引擎采用更加通用的节点，和相机相匹配。当节点设置的 Layer 属性包含在相机的 Visibility 属性 中时，节点便可以被相机看见，同时支持 3D 组件与 2D 组件的混合渲染。以便更灵活地控制节点组件的可见性，使分组显示多样化。

节点的 Layer 属性是全局且唯一的，但是不同的节点可以设置相同的 Layer 属性，使其被同一个相机所观察。开发者可以使用引擎内置的 Layer 属性，也可以使用自定义的 Layer 属性，点击下图中的 Edit 按钮即可前往 项目设置 -> Layers 页面进行设置。详情请参考 层级 文档。

**项目实践**为，3D 物体在 2D 物体的层级上方。**Canvas** 为 2D 界面，设置其 Layer 为 **UI_2D** 并且所有子节点都为 **UI_2D**。**Canvas-3d-front** 为 3D 界面，设置其 Layer 为 **Mahjong**，其所有子节点也为 **Mahjong** Layer。不启用主摄。项目的 Layer 层级设置如图所示。最关键的是要调整好 **Priority** 属性，值越小越优先渲染，将最外层的数值调到最大。

:::tip 需要注意
如果有动态生成的节点或者子节点，需要在代码里控制写入对应的 Layer，否则无法显示。其会按照 **Default** Layer 进行显示。本项目实践中，在 **Canvas-3d-front** 中有大量自动生成的节点，故而在其内的摄像头 **Visibility** 中将 **Default** layer 也进行了勾选（如下图）。
:::

Project Layers
![1](/img/code/cocos/layers.png)

**Canvas** Layer **UI_2D**
![1](/img/code/cocos/canvas.png)

**Canvas-3d-front** Layer **Mahjong**
![1](/img/code/cocos/canvas-front-3d.png)

**Canvas** camera **Visibility** and **ClearFlags**
![1](/img/code/cocos/canvas-2d-camera.png)

**Canvas-3d-front** camera **Visibility** and **ClearFlags**
![1](/img/code/cocos/canvas-3d-camera.png)

## QA

### ScrollView 中的 scrollbar 不显示

摘要：ScrollView 中的 scrollbar 不显示的问题 从 3.4 开始到 3.7 一直没修复。3.7 修复了。  
详细问题描述：<https://forum.cocos.org/t/topic/138245>  
修复链接：<https://github.com/cocos/cocos-engine/pull/13343> <https://github.com/cocos/cocos-engine/pull/13840>

### AssertionError [ERR_ASSERTION]

报错详细信息：AssertionError [ERR_ASSERTION]: Something went wrong: module A depends on B, but B is not correctly generated.  
版本：v3.4.2  
出现诱因：移动 prefab 和 脚本  

修复：重启 cocos 无效。删除本地自动生成的文件夹即可修复，比如`temp/`，`local/`，`library/`之类的目录

### 加载项目遇到 Loading Resources 卡住不动

新的空项目仍然会出现此问题，怀疑是 Cocos Dashboard(v2.1.1) 使用了自定义安装路径，使用默认安装路径就未出现此问题。  
另外，如果同时下载两个 Creator 版本，会出现“下载失败”的报错。

### 打出的包出现代码错误

论坛有相关问题：<https://forum.cocos.org/t/topic/115270>

[es6 to es5](https://github.com/cocos/cocos-engine/issues/16697)

## 问题

```ts
let oneScript: oneScript = node.getComponent(oneScript);
oneScript.drawIndex = this.drawIndex;
```

这两行执行完的时候，oneScript 脚本中的哪些生命周期函数会调用？
