# 创建vue2项目

## 环境准备

## 创建vue2项目及配置

### 创建项目

```js
vue create 项目名称
```

选择创建模式

![1701336382416](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701336382416.png)

键盘上下选择，空格选中和取消，选好之后，按下回车

![1701336511270](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701336511270.png)

![1701336545617](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701336545617.png)

是否使用history路由模式，可以修改

![1701336697818](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701336697818.png)

CSS预处理器

![1701336825958](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701336825958.png)

具体在项目中可以选择对某个文件忽略检查或对直接禁用eslint

![1701336954202](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701336954202.png)

选择额外的 lint 功能（Ctrl + S的时候检查代码是否符合规范）

![1701337033570](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701337033570.png)

把第三方插件的配置选项放到那个配置文件中（建议选择 In dedicated config files，表示：独立的文件）

![1701337084536](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701337084536.png)

是否把刚才所有的操作保存为预设，方便一次直接基于预设，一件生成项目（建议Y，如果是N，每次都要这样，很麻烦）

![1701337136254](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701337136254.png)

如果上一步选择了 Y，就需要给预设提供一个名字（全英文）

![1701337186891](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701337186891.png)

完成了，坐等项目生成，根据提示运行即可。

```
//进入项目
cd 项目名
//启动项目
yarn serve
```

### 添加配置

禁用ESLint:

目标文件：vue.config.js

![1701337806061](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701337806061.png)

对 功能模块 或 文件 禁用ESLint：

```
/* eslint-disable no-eval */
```

功能模块：

![1701338101227](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701338101227.png)

文件：

![1701338140094](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701338140094.png)

单行禁用：

![1701338190586](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701338190586.png)

配置端口、host、是否自启动等

```
module.exports = {
    devServer: {
        // 端口号
        port: 8080,
        // 基本不同配置，了解即可
        host: 'localhost',
        // 是否自启动
        open: true
    }
}
```

![1701338363650](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701338363650.png)

路由配置

目标文件：src/router/index.js

- hash：地址栏有#号（开发环境的选择）
- history：地址栏无#号（上线打包的选择）

![1701341469441](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701341469441.png)

