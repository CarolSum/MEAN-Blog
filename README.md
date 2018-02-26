# MEAN-Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Build

use npm install && npm start to run the project.

如果不想重新build，可以直接运行node ./bin/www
执行npm start的话angular cli会重新编译打包文件到dist目录。

## 功能

###发表博客

用户登录后可以发表博客，支持markdown书写

###评论博客

添加用户评论功能，尚未对评论表单进行验证
评论可以删除但无法修改，参考csdn评论功能

###管理员权限

管理员可以对博客及评论进行屏蔽、删除操作

## ToDo

 1. 登录之后进行了一次页面刷新，登出时也是。
 2. 权限机制： 添加管理员权限
 
    -管理博客权限 ------√
    -管理评论权限 ------√

    分页机制    √ (最左最右两端的按钮未完成)
 3. mongoose populate   √

    post详情页获取该博客发布的时间与作者,作者的简介----即填充作者的相关信息    √

    填充的安全性问题？

 4. 页面UI美化  √
 5. 文本编辑输入，（markdown组件） √ 博客发布及阅读支持markdown渲染

    Todo：发布编辑博客时加入实时渲染

 6. 评论增加回复功能
 7. 全局消息通知
 8. 评论框未登录是否可用
 9. 完善express路由     ————目前将其他路径重定向至根目录
 10. 评论数、阅读量
 11. 页面搜索功能     √ 搜索功能待加入分页

## bug
用户详情页之间无法直接跳转，疑似angular不会销毁再重建同一个组件，导致组件数据更新不了 ____ √ 已解决：subscribe消息订阅模型