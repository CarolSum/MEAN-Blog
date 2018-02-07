# MEAN-Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Build

use npm install && npm start to run the project.

如果不想重新build，可以直接运行node ./bin/www
执行npm start的话angular cli会重新编译打包文件到dist目录。

## 功能

###发表博客

用户登录后可以发表博客，目前只是简单文本展示，后面将加入markdown语法编辑

###评论博客

添加用户评论功能，尚未对评论表单进行验证
评论可以删除但无法修改，参考csdn评论功能

## ToDo

 1. 登录之后进行了一次页面刷新，登出时也是。
 2. 权限机制： 添加管理员权限
 3. mongoose populate √
 4. 页面UI美化
 5. 文本编辑输入，（markdown组件）
 6. 评论增加引用功能
 7. 全局消息通知
 8. 评论框未登录是否可用
 9. 完善express路由
