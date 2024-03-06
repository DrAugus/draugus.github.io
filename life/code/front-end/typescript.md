# TypeScript

## 运行 ts

要在Visual Studio Code (VSCode)中直接执行TypeScript (TS)代码，您不需要配置JSON文件来运行单个TS文件。不过，为了能够将TS代码编译为JavaScript并随后执行，需要确保已正确安装了TypeScript环境和适当的VSCode扩展，并且有一个基本的`tsconfig.json`配置文件。

以下是步骤：

1. **安装TypeScript**：
   - 打开终端（在VSCode中按`Ctrl +`或`Cmd + ``打开集成终端）
   - 运行以下命令以全局安装TypeScript（如果尚未安装）：

     ```bash
     npm install -g typescript
     ```

2. **创建TypeScript配置文件**：
   - 在项目根目录下生成一个`tsconfig.json`文件：

     ```bash
     tsc --init
     ```

   - 默认生成的`tsconfig.json`通常已经包含了基本的编译设置。

3. **编写TypeScript代码**：
   - 创建一个`.ts`文件，例如：`script.ts`。

4. **编译和运行TypeScript代码**：
   - 使用终端，首先编译`.ts`文件：

     ```bash
     tsc script.ts
     ```

   - 编译完成后，会生成相应的`.js`文件（如`script.js`）。
   - 然后运行生成的JavaScript文件：

     ```bash
     node script.js
     ```

另外，为了提升开发体验，可以安装VSCode中的TypeScript扩展，它提供了语法高亮、错误检测以及编译支持等功能。只需在VSCode中搜索“TypeScript”并安装官方的Microsoft TypeScript扩展即可。

若想实现直接在VSCode中点击运行TypeScript代码的功能，可以结合使用Tasks（任务）和Launch（启动）配置：

- 创建一个`tasks.json`文件用于定义构建任务，该任务将负责编译TypeScript代码。
- 创建一个`launch.json`文件用于调试配置，其中可以添加一个“运行程序”类型的配置项，其预设命令指向刚刚通过构建任务生成的JavaScript文件。

这样一来，可以直接从VSCode界面点击运行按钮执行编译后的JavaScript代码。但请注意，直接运行TypeScript源码并不常见，大多数情况下是通过构建流程将其转换为JavaScript后再执行。

## 代码参考

```ts
function removeSubArrayWithDuplicates<T>(source: T[], toRemove: T[]): T[] {
    let tmpSource: T[] = source.slice(0);
    toRemove.forEach(item => {
        const index = tmpSource.indexOf(item);
        if (index > -1) {
            tmpSource.splice(index, 1);
        }
    });
    return tmpSource;
}

function getEnumKey(enumObj: any, enumValue: any): string | undefined {  
    return Object.keys(enumObj).find(key => enumObj[key] === enumValue);  
}
```
