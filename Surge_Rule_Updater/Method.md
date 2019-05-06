## 自定义配置方法

**首先在"Ruleset"目录中添加新项目**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_01.jpeg)


**类型选择"词典"，键可以随意输入一个名称**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_02.jpeg)

**再在刚刚新建的项目中再添加一个新项目，类型选择"文本"**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_03.jpeg)

**键不用填，直接在后面的文本中输入规则，具体如下：**
```
RULE-SET,https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Media/Netflix.list,🎬 Media,update-interval=3600
```
**最后再将拖到列表顶部**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_04.jpeg)

如需替换项目内置规则集，则仅需更改`规则地址`即可，但不要在这里更改策略组信息，否则将可能会导致配置错误。

RULE-SET,`规则地址`,🎬 Media,update-interval=3600

`update-interval=3600`是自动更新间隔时间。

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_05.png)

<br /><br />

**[获取相关媒体规则集](https://github.com/linzx91/Shortcuts/tree/master/Surge_Rule_Updater/Ruleset/Media)** ↵