# Search搜索导航

### 项目描述：

**简洁的浏览器主页，采用原生js编写，可选择不同的搜索引擎，展示网址收藏，查看天气，本地设置，无聊时玩玩小游戏以及小工具合集...**

**偏向练手，代码中可能会出现风格混乱、命名不规范、每次推送代码变动过多等问题，欢迎给我提意见优化代码**

**支持二次开发，如果你觉得不错的话请添加上项目地址**

### 最近更换了新设备，可能有助于更新

### 在线地址：

https://search.virs.xyz

### 页面展示：

**主页：**

![](http://imgs.virs.xyz/index.png)

**侧边栏：**

![](http://imgs.virs.xyz/sidebar.png)

**设置：**

![](http://imgs.virs.xyz/setting.png)

**每日更换壁纸：**

![](http://imgs.virs.xyz/bingimg.png)

**弹窗添加数据：**

![](http://imgs.virs.xyz/dialog.png)

**以及更多... ...**

### 使用说明：

建议使用 **VS Code（Visual Studio Code）** 并安装 **Live Server** 插件，否则无法处理json文件

部署服务器无其他要求

### 联系方式：

**qq群：** 859791575

**邮箱：** virs2018@outlook.com

### 近期计划：

1. 针对不同分辨率/浏览器优化

### 版本：

- master：主分支/后续仅同步稳定版本代码

  当前版本：1.0.0

- dev：开发分支

  当前版本：1.0.x（针对浏览器优化）

### 功能：

1. 多引擎搜索（默认必应）

2. 常用网址导航

3. 网站主题色

4. 天气

   调用第三方接口❎

5. 设置

   本地设置（导入，导出）

   - 配色❎

   - 背景❎

   - ......

7. 随机名言✅

8. 启动动画✅，细节动画❎

10. 响应式布局❎

11. 侧边栏返回顶部按钮❎

12. 随机更换Logo❎

13. 多彩样式✅


### 后续计划：

2. 使用vue重写代码（有生之年系列）
3. 使用nodejs部署服务器（有生之年系列）
4. 账号登陆同步书签设置及其他信息功能（有生之年系列）

### 模块说明：

方便二次开发，尽量保持与代码内容同步

**all.data.js**

| 模块     | 说明                     | 参数 |
|----------|--------------------------|------|
| jsonData | 获取index.json中所有数据 | 无   |

**animation.func.js**

| 模块             | 说明     | 参数                                                             |
|------------------|----------|------------------------------------------------------------------|
| toggle           | 淡出动画 | elemt：DOM元素<br />speed：速度                                  |
| setStorageBefore | 加载动画 | set：匿名函数<br />name：本地存储名<br />href：链接/本地存储内容 |

**bg.func.js**

| 模块              | 说明                   | 参数                           |
|-------------------|------------------------|--------------------------------|
| setBingImage      | 设置必应壁纸作为背景   | status：状态                   |
| setCustomizeImage | 设置自定义图片作为背景 | setBackGround：上传图片DOM元素 |
| setdefault        | 恢复默认壁纸           | type：状态                     |
| globalImage       | 设置背景               | url：图片链接                  |
| WoolGlass         | 设置毛玻璃效果         | url：图片链接                  |

**dialog.func.js**

| 模块        | 说明       | 参数                                                                                                                                                                                                                                                                                                                                                           |
|-------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| openDialog  | 开启模态框 | data.id：模态框className<br />data.html：是否显示自定义html内容<br />data.title：模态框标题<br />data.content：模态框内容数组<br />        name：label名<br />         value：label名<br />        type：格式（input：输入框、text：文本）<br />        defaultValue：默认值<br />data.button：模态框按钮<br />        name：按钮名<br />        value：按钮id |
| closeDialog | 关闭模态框 | 无                                                                                                                                                                                                                                                                                                                                                             |

**global.func.js**

| 模块            | 说明                 | 参数            |
|-----------------|----------------------|-----------------|
| stopPropagation | 阻止事件冒泡         | 无              |
| findSettingInfo | 查找选中设置项对应值 | value：选中项   |
| getRandomColor  | 返回随机颜色值       | 无              |
| removeElement   | 删除元素             | element：元素名 |

**message.func.js**

| 模块         | 说明         | 参数                                                                                          |
|--------------|--------------|-----------------------------------------------------------------------------------------------|
| openMessage  | 开启消息提示 | value.title：提示标题<br />value.type：提示类型（success/error）<br />value.content：提示内容 |
| closeMessage | 关闭消息提示 | elemt：弹窗元素                                                                               |

**search.func.js**

| 模块      | 说明             | 参数                      |
|-----------|------------------|---------------------------|
| goSearch  | 跳转搜索         | 无                        |
| setEngine | 渲染搜索引擎选择 | engineValue：搜索引擎数据 |

**setting.func.js**

| 模块          | 说明       | 参数 |
|---------------|------------|------|
| createSetting | 创建设置项 | 无   |

**sideBar.func.js**

| 模块                 | 说明                 | 参数       |
|----------------------|----------------------|------------|
| renderSideBarContent | 根据id渲染侧边栏内容 | id：选项id |

**skin.func.js**

| 模块       | 说明     | 参数                                      |
|------------|----------|-------------------------------------------|
| changeSkin | 更改配色 | skinName：配色名<br />value：配色文件路径 |

**storage.func.js**

| 模块          | 说明             | 参数                                    |
|---------------|------------------|-----------------------------------------|
| setStorage    | 设置本地存储     | name：本地存储名<br />value：本地存储值 |
| getStorage    | 获取本地存储内容 | key：本地存储名                         |
| removeStorage | 删除本地存储     | key：本地存储名                         |

**sug.func.js**

| 模块        | 说明           | 参数                                      |
|-------------|----------------|-------------------------------------------|
| getSugValue | 获取备选项内容 | 无                                        |
| sugValue    | 备选项内容     | href：搜索引擎链接<br />value：备选项数组 |
| changeSug   | 按键选择备选项 | keyCode：按键值                           |

**ui.func.js**

| 模块     | 说明       | 参数                                |
|----------|------------|-------------------------------------|
| changeUI | 更改UI风格 | uiName：ui名<br />value：ui文件路径 |

**website.func.js**

| 模块          | 说明             | 参数                                                                                                                                                                                                                                                                                    |
|---------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| createWebsite | 创建侧边栏内网址 | 无                                                                                                                                                                                                                                                                                      |
| commonWebsite | 记录常用网址     | json.thisWebsite.id：指定网址id<br />json.thisWebsite.name：指定网站名<br />json.thisWebsite.url：指定网址链接<br />json.thisWebsite.color：指定网址颜色<br />json.commonData：数据源<br />json.status：状态<br />json.add：添加网址<br />json.change：修改网址<br />json.del：删除网址 |
| setCommonUse  | 渲染常用网址     | data：数据源<br />status：状态                                                                                                                                                                                                                                                          |



### 配色方案：

- **落日海滩**
  在以灰色作为主色调的画面中加入高纯度的色彩，这种配色方法非常常见，也很容易搭配出出人意料的效果，这个的搭配方法可以使设计主题突出，并其他吸引观者的效果。
  HEX：FFFFFF RGB：255,255,255
  HEX：F0F0F0 RGB：240,240,240
  HEX：E7E7E7 RGB：231,231,231
  HEX：FFC549 RGB：255,197,73
  HEX：FF59AC RGB：255,89,172
- **办公室故事**
  十分素雅的配色，带有一定的日式风格的颜色搭配，当然现在在很多地方都有使用，如商业场合，家庭家居，即使在网页设计中也屡见不鲜，同时也多见于男性服装的色彩搭配上。
  HEX：7C7C7E RGB：124,124,126
  HEX：E9E9E9 RGB：233,233,233
  HEX：90AFC3 RGB：144,175,195
  HEX：303052 RGB：48,48,82
  HEX：A4A7D2 RGB：164,167,210
- **风的色彩**
  风是什么颜色？只有最无聊的人会去考虑这个问题，的确——我很无聊，但是这个色彩带给我们的感觉和微风拂面时候带来的感觉是相似的，同样清凉，舒适，如果你能享受这样简单的愉悦，就能体会这个色彩搭配带来的乐趣。HEX：88C6E5 RGB：136,198,229
  HEX：A6D3E8 RGB：166,211,232
  HEX：C3DFEA RGB：195,223,235
  HEX：E1ECED RGB：225,236,237
  HEX：FEF9EF RGB：254,249,239