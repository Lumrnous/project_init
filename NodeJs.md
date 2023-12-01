# NodeJS、nvm、npm、yarn、pnpm的安装和使用

## 安装NodeJS

官方地址：https://nodejs.org/zh-cn

安装完成，打开终端

```
node -v
```

![1701343217915](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701343217915.png)

安装NodeJS的时候，会自动集成npm包管理工具，此时就可以正常使用npm了；

## nvm的安装和使用

官方地址：https://nvm.uihtm.com/

安装教程：https://juejin.cn/post/7305413717310865427?searchId=2023113019223507F4D65A7F9FFFB1A16F

使用nvm

```
nvm list
```

![1701343423780](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701343423780.png)

nvm相关命令

```
nvm -h //查看nvm的指令
nvm list //查看本地已经安装的node版本列表
nvm list available //查看可以安装的node版本
nvm install latest //安装最新版本的node
nvm install [version][arch] //安装指定版本的node 例如：nvm install 10.16.3 安装node v10.16.3 arch表示电脑的位数 如果电脑需要安装32位的， 则运行：nvm install 10.16.3 32
nvm use [version] //使用node 例如：nvm use 10.16.3
nvm uninstall [version] //卸载node
```

## npm相关命令

```
//安装所有的包
npm i
//全局安装包
npm i -g 包名
//安装指定版本的包
npm i 包名@版本号
//安装最新的包名
npm i 包名@latest
//更新npm
npm i -g npm
//卸载包
npm uninstall 包名
```

## yarn的安装和使用

安装yarn

```
npm i yarn -g
//检查是否安装成功
yarn -v
```

![1701343813178](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701343813178.png)

yarn的使用

```
// 安装包
// 会自动安装最新版本，并且会覆盖指定版本的包
yarn add <package_name>

// 安装指定版本的包
yarn add <package_name>@版本号

// 一次性安装多个包（包与包之间用空格隔开）
yarn add <package_name> <package_name> <package_name>

//不指定依赖类型默认安装到dependencies里，你也可以指定依赖类型：
yarn add <package_name> --dev / -D // 加到 devDependencies
yarn add <package_name> --peer / -P // 加到 peerDependencies
yarn add <package_name> --optional / -O  // 加到 optionalDependencies

// 安装所有的包
yarn

// 更新包
yarn upgrade <package_name>  // 更新到最新版本
yarn upgrade <package_name>@版本号  // 更新到指定版本

// 移除包
yarn remove <package_name>

// 查询当前设置的镜像
yarn config get registry

// 切换淘宝镜像
yarn config set registry https://registry.npm.taobao.org
```

## pnpm的安装和使用

安装pnpm

```
npm i pnpm -g
```

pnpm的常用命令

```
// 安装所有的包
pnpm install

// 安装某一个包
pnpm add axios

// 安装到指定环境
pnpm add webpack -D

// 运行项目
pnpm dev
```

## npm,yarn,pnpm命令对比

![1701344361042](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701344361042.png)