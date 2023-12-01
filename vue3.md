# 创建vue3项目

## 环境准备

脚手架必须是4.5.0以上

## vue3项目搭建

创建项目

```js
vue create 项目名
```

选择创建模式

![1701341982204](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701341982204.png)

键盘上下选择，空格选中和取消，选好之后，按下回车

![1701342040210](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701342040210.png)

![1701342075121](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701342075121.png)

是否使用es6类的语法来创建组件，输入n，因为使用这个需要写很多修饰符，一般是vue2中为了兼容Ts才使用。

![1701342197319](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701342197319.png)

是否使用babel，是（直接回车默认就是yes）；

![1701342258141](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701342258141.png)

是否用history路由模式，是；

![1701342279602](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701342279602.png)选择写样式的方法，我选的less;

![1701342306009](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701342306009.png)

一些配置是放在package.json还是单独的文件里面，选择单独的文件，就是dedicated config files；

![1701342340978](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701342340978.png)

在之后的项目中是否保留这些设置，我选n，不保留。等待项目创建。

![1701342375405](C:\Users\29006\AppData\Roaming\Typora\typora-user-images\1701342375405.png)

完成了，坐等项目生成，根据提示运行即可。

```
//进入项目
cd 项目名
//启动项目
yarn serve
```

