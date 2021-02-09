# markdown图片自动上传

## 起因

发现自己文章里的图片链接失效了，是因为使用的图床问题。修改替换新图片折腾一圈下来感觉要哭了。

![image-20200805104236996](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114939.png)

## 动机 

懒，自己想偷懒。。。

## 方案介绍

- `Typora` + `PicGo` + `Github图床`

> 一套组合拳，实现从剪切板粘贴图片保存到当前文件夹，通过设置Github图床自动上传并替换文章中的本地图片链接。

### 1. [Typora](https://www.typora.io/)

非常好用的markdown编辑器,很多介绍文章。
[让 Markdown 写作更简单，免费极简编辑器：Typora](https://sspai.com/post/30292)


### 2. [PicGo](https://github.com/Molunerfinn/PicGo)

**应用概述**

- PicGo: 一个用于快速上传图片并获取图片 URL 链接的工具

**PicGo 本体支持如下图床：**
- 七牛图床 v1.0
- 腾讯云 COS v4\v5 版本 v1.1 & v1.5.0
- 又拍云 v1.2.0
- GitHub v1.5.0
- SM.MS V2 v2.3.0-beta.0
- 阿里云 OSS v1.6.0
- Imgur v1.6.0


### 3. Github图床

使用github仓库作为图片存储


## 实现

1. 设置Typora，通过打开 `格式`->`图像`->`全局图像设置`

![image-20200805111648880](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114940.png)

2. 按照以上设置，下载安装PicGo，找到github图床设置

![image-20200805111853815](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114941.png)

- 设定仓库名： githubName/项目名称
- 分支： master即可
- 设定token 
  - 打开[github tokens](https://github.com/settings/tokens),新增token
  - ![image-20200805112436882](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114942.png)
  - 点击Generate token 获取
  - ![image-20200805112623748](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114943.png)
  - 填写到设定token中

3. 测试 打开Typora，点击验证图片

![image-20200805112834605](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114944.png)

- 成功结果

![image-20200805114228535](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114945.png)

- 失败结果，有时候提示失败但是picGo是可以上传到github的

![image-20200805113738386](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114946.png)


4. 文章写完后，批量替换为github 图床链接

- 现在文章中图片引用的为本地图片

![image-20200805114632981](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114947.png)

- 选择 `格式`->`图像`->`上传本地所有图片` 开始上传。 也可以设置图像插入是自动上传 

![image-20200805114719782](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805114948.png)

- 上传成功后，文章图片自动替换为github地址了

![image-20200805115048575](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/20200805115317.png)


> 至此大功告成

![](https://raw.githubusercontent.com/FearlessMa/FENotes-pic/master/js/FENotes.png)