## 自定义配置规则

**首先点击本项目右上角的 `⋯` 然后找到"词典"的项目块**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules.jpeg)


**在词典的"Ruleset"列表中添加新项目**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_01.jpeg)


**类型选择"词典"，键可以随意输入一个名称**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_02.jpeg)


**进入刚刚添加的词典中再添加一个新项目，类型选择"文本"**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_03.jpeg)


**这里的键可以不填，直接在后面的文本中输入如下内容**
```
RULE-SET,https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Media/Netflix.list,🎬 Media,update-interval=3600
```


**最后再把它拖到列表顶部**
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_04.jpeg)


替换规则的话就只需要把 `规则地址` 替换成你的规则地址即可，但需要注意对应的策略组信息，否则会导致配置错误。

RULE-SET,`规则地址`,🎬 Media,update-interval=3600

`update-interval=3600`是自动更新的间隔时间。

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_05.png)


如有其它问题或建议请在我的 [GitHub/Issues](https://github.com/linzx91/Shortcuts/issues) 中留言。


**[获取更多媒体规则](https://github.com/linzx91/Shortcuts/tree/master/Surge_Rule_Updater/Ruleset/Media) ↵**