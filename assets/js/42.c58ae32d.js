(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{379:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"codeql-uboot练习项目-下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codeql-uboot练习项目-下"}},[s._v("#")]),s._v(" CodeQL - UBoot练习项目（下）")]),s._v(" "),a("blockquote",[a("p",[s._v("在上一篇《CodeQL - Uboot练习（上）》介绍了Gitlab提供的一个用于熟悉CodeQL用法的练手项目CodeQL-uboot，同时也按照项目的要求搭建了CodeQL的基础使用环境。在这一篇中，就开始根据项目的要求，完成查询语句的编写。")])]),s._v(" "),a("h2",{attrs:{id:"_3-第一个查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-第一个查询"}},[s._v("#")]),s._v(" 3. 第一个查询")]),s._v(" "),a("p",[s._v("上一篇中，我们克隆了uboot项目代码，并且将其添加到了vscode-starter中。这一篇中的所有代码都在这个项目中进行编写和提交。第三节的目的是完成一个最简单的查询语句的编写，并提交到github仓库中，由机器人判断你的代码是否正确。")]),s._v(" "),a("p",[s._v("编辑"),a("code",[s._v("3_function_definitions.ql")]),s._v("，输入以下内容：")]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nfrom Function f\nwhere f.getName() = "strlen"\nselect f, "a function named strlen"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("最好是自己输入这些内容，而不是直接复制粘贴。在输入的过程中，可以看到vscode的自动提示。")]),s._v(" "),a("p",[s._v("右击，点击"),a("code",[s._v("CodeQL: Run Query")]),s._v("，你会发现程序在右侧展示了运行的结果。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220404221714270.png",alt:"image-20220404221714270"}})]),s._v(" "),a("p",[s._v("这个查询可以找出程序中的所有名为"),a("code",[s._v("strlen")]),s._v("方法，并将其显示到结果中，我们点击结果中的方法名，可以定位到代码的位置。")]),s._v(" "),a("p",[s._v("以上内容就是第三节的查询内容了，第三节的后面部分提供了两种代码提交的方式，代码提交在后续的每一节都会用得到，如果不熟悉的话，建议多看看。")]),s._v(" "),a("h3",{attrs:{id:"通过-pull-request提交你的请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-pull-request提交你的请求"}},[s._v("#")]),s._v(" 通过 Pull Request提交你的请求")]),s._v(" "),a("p",[s._v("通过PR提交往往应用在多人共同维护一个代码仓库时。通过PR的方式提交可以直接在PR中跟踪检查器的执行情况。")]),s._v(" "),a("p",[s._v("但是这种方式要比直接提交到main分支上更复杂。提交的流程如下：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("刷新主分支的内容，将代码提交到该分支，然后推送")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" step-3\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"First Query"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin step-3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("发起一个PR")])]),s._v(" "),a("li",[a("p",[s._v("等待检查完毕，并在PR的过程中显示进度。")])]),s._v(" "),a("li",[a("p",[s._v("检查完成之后，如果显示绿色则代表通过。")])])]),s._v(" "),a("h3",{attrs:{id:"提交到main分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交到main分支"}},[s._v("#")]),s._v(" 提交到main分支")]),s._v(" "),a("p",[s._v("这种方式比PR的方式简单很多，我们在后续的提交中都会使用这种方式：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("将代码推送到课程的远程仓库中")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Any message here - why not step 3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[s._v("2.等待检查完成，检查完成后进入下一节。检查失败则可以编辑我们的查询语句，再次提交。")]),s._v(" "),a("h2",{attrs:{id:"_4-解析查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-解析查询"}},[s._v("#")]),s._v(" 4. 解析查询")]),s._v(" "),a("h3",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[s._v("#")]),s._v(" 解析")]),s._v(" "),a("p",[s._v("这一节中，对上一节我们编写的查询语句做了一个分析，并且让我们简单改写一下上面的查询完成相应的查询任务。")]),s._v(" "),a("p",[s._v("CodeQL中的查询一般都有如下的结构：")]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import 引入一个CodeQL库\n\nfrom 变量的声明部分\nwhere 查询的逻辑\nselect 输出的结果\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("再回顾一下我们上一课的查询语句：")]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nfrom Function f\nwhere f.getName() = "strlen"\nselect f, "a function named strlen"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("第一句是"),a("code",[s._v("import cpp")]),s._v("，这是一个导入的语句，后续我们在查询中使用的所有的声明等，都是通过这个语句导入的。")]),s._v(" "),a("p",[s._v("第二句是"),a("code",[s._v("from Function f")]),s._v("，声明了一个变量f，其中Function是一个类，该类是C/C++中的所有的函数的集合。")]),s._v(" "),a("p",[s._v("在where后面接着的是我们查询的谓词，谓词这个概念在后面也常被提到，可以简单理解为一个函数，像这里面的"),a("code",[s._v("getName")]),s._v("就是一个谓词，这个为此有一个返回值，当这个返回值满足等于"),a("code",[s._v("strlen")]),s._v("条件时，就按照selct的要求显示结果。")]),s._v(" "),a("h3",{attrs:{id:"找到名为memcpy的函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#找到名为memcpy的函数"}},[s._v("#")]),s._v(" 找到名为memcpy的函数")]),s._v(" "),a("ol",[a("li",[s._v("编辑"),a("code",[s._v("4_memcpy_definitions.ql")])]),s._v(" "),a("li",[s._v("按照第三部的查询中的查询语句，将查询的条件修改为查询名字为"),a("code",[s._v("memcpy")]),s._v("。")]),s._v(" "),a("li",[s._v("运行查询语句，查看查询的结果")]),s._v(" "),a("li",[s._v("提交你的查询到远程仓库")])]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nfrom Function f \nwhere f.getName() = "memcpy"\nselect f, "function named memcpy"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_5-使用不同的类和谓词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用不同的类和谓词"}},[s._v("#")]),s._v(" 5. 使用不同的类和谓词")]),s._v(" "),a("p",[s._v("在第四节中，我们使用了Function类并使用了"),a("code",[s._v("getName")]),s._v("获取了所有的方法名。而在这一节中，我们需要查询给出的三个转换字节序的宏（宏是C语言中的一个重要的定义，不熟悉C的朋友也不用担心，这里只是用来引入其他的一些查询的类）。这次的查询代码和上次的类似：")]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nfrom Macro m\nwhere m.getName() = "ntohl" \n        or m.getName() = "ntohll"\n        or m.getName() = "ntohs"\nselect m,"macro named ntoh*"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("由于查询的条件有三个，"),a("code",[s._v("ntohl、ntohll、ntohs")]),s._v("，我们可以使用or来并列多个查询条件。也可以使用正则表达式的写法：")]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('where m.getName().regexpMatch("ntoh(s|l|ll)")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者使用in的方式：")]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('where m.getName() in ["ntohs","ntohl","ntohll"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以上三种方式均可。")]),s._v(" "),a("h2",{attrs:{id:"_6-使用并关联两个变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-使用并关联两个变量"}},[s._v("#")]),s._v(" 6. 使用并关联两个变量")]),s._v(" "),a("p",[s._v("以上的几节中，在from后面我们只声明了一个变量，在这一节我们需要声明两个变量，并使用两个变量之间的关系联合完成相关的查询。这种方式有助于帮我们找出函数的调用。")]),s._v(" "),a("ol",[a("li",[s._v("编辑"),a("code",[s._v("6_memcpy_calls.ql")])]),s._v(" "),a("li",[s._v("使用代表函数调用的类并声明变量")]),s._v(" "),a("li",[s._v("使用函数调用类的相关谓词查找函数的调用位置")]),s._v(" "),a("li",[s._v("和第四步中的函数查找结合，找出函数memcpy的调用位置")]),s._v(" "),a("li",[s._v("完成并运行查询，没有问题后，提交查询")])]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nfrom Function f, FunctionCall call\n\nwhere call.getTarget() = f \n    and f.getName() = "memcpy"\nselect call\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_7-继续关联两个变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-继续关联两个变量"}},[s._v("#")]),s._v(" 7. 继续关联两个变量")]),s._v(" "),a("p",[s._v("在第五节中，编写了一个查询，查找所有的名为"),a("code",[s._v("ntoh*")]),s._v("的宏。在第六节中编写了一个查询，查找所有名为"),a("code",[s._v("memcpy")]),s._v("的函数的调用位置。而在这一节中，需要找到以上名为"),a("code",[s._v("ntoh*")]),s._v("的宏的调用位置。")]),s._v(" "),a("ol",[a("li",[s._v("编辑"),a("code",[s._v("7_macro_invocations.ql")])]),s._v(" "),a("li",[s._v("使用自动补全，找出查找宏调用的类")]),s._v(" "),a("li",[s._v("找出代表宏调用的谓词")]),s._v(" "),a("li",[s._v("查询宏的名称和宏的调用位置")]),s._v(" "),a("li",[s._v("运行查询，提交代码")])]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nfrom Macro m, MacroInvocation mi\nwhere m.getName().regexpMatch("ntoh(s|l|ll)")\n    and mi.getMacro() = m\nselect m,mi\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_8-更改输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-更改输出"}},[s._v("#")]),s._v(" 8. 更改输出")]),s._v(" "),a("p",[s._v("在上一节我们找到了所有名为"),a("code",[s._v("ntoh*")]),s._v("的定义，并且查找了所有的调用位置，而在这一节中，通过 "),a("code",[s._v("MacroInvocation")]),s._v(' 这个类来查询 "ntohs" 等宏的调用，并通过 '),a("code",[s._v("getExpr()")]),s._v(" 这个方法进行宏的展开，得到相应的代码片段。")]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nfrom MacroInvocation mi\nwhere mi.getMacroName().regexpMatch("ntoh(s|l|ll)")\nselect mi.getExpr()\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_9-编写自己的类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-编写自己的类"}},[s._v("#")]),s._v(" 9. 编写自己的类")]),s._v(" "),a("p",[s._v("在上面的查询中，我们使用过"),a("code",[s._v("Function、FunctionCall、Marco、MarcoInvocation")]),s._v("等类，这些类都是CodeQL提供给我们调用的。我们也可以定义一个自己的类，在本节中，通过实现一个自己的类，能自定义一个自己想要的数据集合。如果有点懵可以看看 CodeQL 关于类的"),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//help.semmle.com/QL/ql-handbook/types.html%23classes",target:"_blank",rel:"noopener noreferrer"}},[s._v("相关文档"),a("OutboundLink")],1),s._v("。查询语句中的类中，先通过 "),a("code",[s._v("exists")]),s._v(" 量词创建一个临时变量 "),a("code",[s._v("mi")]),s._v(" 来表示被调用的宏的名字，如果被调用的的宏展开后和当前代码片段相等，则这个表达式属于这个集合。")]),s._v(" "),a("p",[s._v("在这一节中，我们编写的类将上一节的内容进行一个封装，封装完成之后，只需要调用相应的类即可查询出结果。")]),s._v(" "),a("ol",[a("li",[s._v("编辑"),a("code",[s._v("9_class_network_byteswap.ql")])]),s._v(" "),a("li",[s._v("编写一个类，继承Expr，Expr是所有表达式的类")]),s._v(" "),a("li",[s._v("使用exists，完成我们需要的查询，并返回相应的结果")]),s._v(" "),a("li",[s._v("修改如下的模版")])]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nclass NetworkByteSwap extends Expr {\n  NetworkByteSwap () {\n    // TODO: replace <class> and <var>\n    exists(<class> <var> |\n      // TODO: <condition>\n    )\n  }\n}\n\nfrom NetworkByteSwap n\nselect n, "Network byte swap"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("5. 完成查询，运行并提交\n")])])]),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import cpp\n\nclass NetworkByteSwap extends Expr {\n  NetworkByteSwap() {\n    exists(MacroInvocation mi |\n      mi.getMacroName().regexpMatch("ntoh(s|l|ll)") and\n      this = mi.getExpr()\n    )\n  }\n}\n\nfrom NetworkByteSwap n\nselect n, "Network byte swap"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_10-数据流和污点追踪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-数据流和污点追踪"}},[s._v("#")]),s._v(" 10. 数据流和污点追踪")]),s._v(" "),a("p",[s._v("第十节是这个项目的最后一节。在第九步，我们在代码中发现了一些可以远程输入的表达式。他们可以被认为是远程输入的 "),a("strong",[s._v("源")]),s._v("。源这个概念是污点分析的重要概念，简单理解就是用户输入恶意代码的位置。在第六步中，我们发现了memcpy的调用，这些调用可能是不安全的，因为他们的长度是被远程用户可以控制的。这些可以称为汇聚点，汇聚点是产生不安全操作的位置。这里的memcpy接受可控制的长度的值。")]),s._v(" "),a("p",[s._v("通过组合上面的信息，我们知道当数据流从一个用户可控的source流向到存在风险的sink位置的时候，一个程序是存在安全风险的。但是我们是怎么知道数据从一个source流向sink的呢？这里提到了**数据流、污点分析技术。**因为可能存在不同的source和sink，这样组合起来，如果使用人工的方式，可能产生大量的工作量。CodeQL替我们进行分析。你只需要编写一个查询，就可以发现9个真实存在的安全风险。")]),s._v(" "),a("p",[s._v("为了达到这个目标，我们使用CodeQL污点分析库，这个库可以定义source和sink，当对应的数据从source流转到sink时，hashFlowPath成立。")]),s._v(" "),a("p",[s._v("在这一节中，我们需要编写一个污点分析的查询。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("编辑"),a("code",[s._v("10_taint_tracking.ql")])])]),s._v(" "),a("li",[a("p",[s._v("使用如下的模板文件")]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/**\n * @kind path-problem\n */\n\nimport cpp\nimport semmle.code.cpp.dataflow.TaintTracking\nimport DataFlow::PathGraph\n\nclass NetworkByteSwap extends Expr {\n  // TODO: copy from previous step\n}\n\nclass Config extends TaintTracking::Configuration {\n  Config() { this = "NetworkToMemFuncLength" }\n\n  override predicate isSource(DataFlow::Node source) {\n    // TODO\n  }\n  override predicate isSink(DataFlow::Node sink) {\n    // TODO\n  }\n}\n\nfrom Config cfg, DataFlow::PathNode source, DataFlow::PathNode sink\nwhere cfg.hasFlowPath(source, sink)\nselect sink, source, sink, "Network byte swap flows to memcpy"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("复制第九步的自定义类，编写is Source和isSink定义源和汇聚。")]),s._v(" "),a("ul",[a("li",[s._v("在第九步已经编写了识别"),a("code",[s._v("ntoh*")]),s._v("的类，这里只需要使用instance关键字进行判断即可")]),s._v(" "),a("li",[s._v("注意"),a("code",[s._v("source")]),s._v("变量是类型的"),a("code",[s._v("DataFlow::Node")]),s._v("，而你的"),a("code",[s._v("NetworkByteSwap")]),s._v("类是的子类"),a("code",[s._v("Expr")]),s._v("，所以我们不能只写"),a("code",[s._v("source instanceof NetworkByteSwap")]),s._v("。")])])]),s._v(" "),a("li",[a("p",[s._v("运行查询，提交。")])])]),s._v(" "),a("div",{staticClass:"language-ql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\n/**\n * @kind path-problem\n */\n\nimport cpp\nimport semmle.code.cpp.dataflow.TaintTracking\nimport DataFlow::PathGraph\n\nclass NetworkByteSwap extends Expr {\n  NetworkByteSwap() {\n    exists(MacroInvocation mi |\n      mi.getMacroName().regexpMatch("ntoh(s|l|ll)") and\n      this = mi.getExpr()\n    )\n  }\n}\n\nclass Config extends TaintTracking::Configuration {\n  Config() { \n      this = "NetworkToMemFuncLength" \n    }\n\n  override predicate isSource(DataFlow::Node source) { \n      source.asExpr() instanceof NetworkByteSwap \n    }\n  override predicate isSink(DataFlow::Node sink) {\n    exists(FunctionCall call |\n      call.getTarget().getName() = "memcpy" and\n      sink.asExpr() = call.getArgument(2) and\n      not call.getArgument(1).isConstant()\n    )\n  }\n}\n\nfrom Config cfg, DataFlow::PathNode source, DataFlow::PathNode sink\nwhere cfg.hasFlowPath(source, sink)\nselect sink, source, sink, "Network byte swap flows to memcpy"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("p",[s._v("新定义的 "),a("code",[s._v("Config")]),s._v(" 类继承于 "),a("code",[s._v("TaintTracking::Configuration")]),s._v("。在这个类中，对 "),a("code",[s._v("isSource")]),s._v(" 和"),a("code",[s._v("isSink")]),s._v("进程重载，"),a("code",[s._v("isSource")]),s._v("谓语定义为污点的源头，而 "),a("code",[s._v("isSink")]),s._v(" 定义为污点的去处。")]),s._v(" "),a("p",[s._v("有时候，远程输入的数据可能经过 "),a("code",[s._v("ntoh")]),s._v(" 函数处理，通过转换字节序得到相应的数字。而 "),a("code",[s._v("memcpy")]),s._v(" 的第 2 个参数如果控制不当，可造成数据溢出。将上面两个结论结合起来，如果有一个远程输入的数据通过字节序变换得到的数字，在未经过校验的情况下，作为了 "),a("code",[s._v("memcpy")]),s._v(" 的第二个参数，那么就有可能造成数据溢出。")]),s._v(" "),a("p",[s._v("照着 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//securitylab.github.com/research/cve-2018-4259-macos-nfs-vulnerability",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github 安全团队的文章"),a("OutboundLink")],1),s._v("，可以照猫画虎的补全数据查询语句。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("isSource")]),s._v(" 中，我们通过判断 "),a("code",[s._v("source")]),s._v(" 的 "),a("code",[s._v("Expr")]),s._v(" 是否是 "),a("code",[s._v("NetworkByteSwap")]),s._v(" 这个类，来判断污点的源头。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("isSink")]),s._v(" 中，我们使用了辅助类 "),a("code",[s._v("FunctionCall")]),s._v(" 判断函数调用是否为 "),a("code",[s._v("memcpy")]),s._v(" 且 "),a("code",[s._v("sink")]),s._v(" 的代码片段是否为 "),a("code",[s._v("memcpy")]),s._v(" 的第二个参数；最后一句则是判断函数的第一个参数是否为常量，如果为常量的话基本不可能出现问题，所有忽略。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220405002009580.png",alt:"image-20220405002009580"}})]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ol",[a("li",[s._v("https://zhuanlan.zhihu.com/p/137569940")]),s._v(" "),a("li",[s._v("https://codeql.github.com/docs/ql-language-reference")])])])}),[],!1,null,null,null);a.default=t.exports}}]);