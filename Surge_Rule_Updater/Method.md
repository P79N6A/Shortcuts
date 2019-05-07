## 自定义配置规则的操作步骤

首先点击快捷指令右上角的 `⋯` 然后找到 "词典" 的项目块
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules.jpeg)


然后进入词典的 "Ruleset" 列表 `添加"新项目"`
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_01.jpeg)


类型选择 "词典" ，键可以随意输入一个名称
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_02.jpeg)


进入刚刚添加的项目中再添加一个新项目，类型选择 "文本"
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_03.jpeg)


这里的键可以不填，直接在后面的文本中输入规则内容（每个项目只能添加一条规则，建议使用 `.list` 规则集。）

规则集的写法如下所示：
```
RULE-SET,https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Media/Netflix.list,🎬 Media,update-interval=3600
```
[获取更多媒体规则集](https://github.com/linzx91/Shortcuts/tree/master/Surge_Rule_Updater/Ruleset/Media)

最后再将自定义添加的项目全部拖到列表顶部。
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_04.jpeg)


替换规则的话就只需要把原来的 `规则地址` 替换成相应的规则地址即可，需注意策略名称，否则会导致配置错误。

RULE-SET,`规则地址`,`策略组或代理服务器名称`,update-interval=`自动更新间隔时间 (秒)`
![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_05.png)


如有其它问题或建议请在我的 [GitHub/Issues](https://github.com/linzx91/Shortcuts/issues) 中留言。