 

## [++javascript获取选中的文本/html++](http://www.cnblogs.com/ArthurPatten/p/3317263.html)

首先来谈一下Selection对象和Range对象。

　　Selection是window.getSelection()方法返回的一个对象，用于表示用户选中的文本区域。Selection对象表现为一组Range对象。而Range对象表示文档的连续范围区域，例如用户在浏览器窗口中用鼠标拖动选中的区域。通常情况下，Selection对象只有一个Range对象，如下：

　　var selectionObj = window.getSelection();　

　　var rangeObj = selectionObj.getRangeAt(0);

selectionObj为Selection对象，rangeObj为Range对象。

　来个例子:

　　var selectionObj = window.getSelection();

　　var selectedText = selectionObj.toString();

　selectedText即为用户选中区域的文本。

　　如果想获取选中部分的html代码，就需要用到Range对象的cloneContents方法，cloneContents方法把Range对象的内容复制到一个DocumentFragment对象。

　　　　var selectionObj = window.getSelection();

　　　　var rangeObj = selectionObj.getRangeAt(0);

　　　　var docFragment = rangeObj.cloneContents();

　然后将docFragment渲染出来，获取其innerHTML即可。

　　　　var testDiv = document.createElement("div");

　　　　testDiv.appendChild(docFragment);

　　　　var selectHtml = testDiv.innerHTML;

selectedHtml即为用户选中区域的html代码　

　当然一如既往的，上述的吧啦吧啦对IE是不起作用的。IE自己玩自己的。。。

　　IE中，通过document.selection创建Selection对象，通过createRange方法创建Range对象，如下：

　　　　var selectionObj = document.selection;

　　　　var rangeObj = selectionObj.createRange();

　range对象的text属性即为用户选中区域的文本，htmlText属性即为用户选中区域的html代码。

　　　　var selectedText = rangeObj.text;

　　　　var selectedHtml = rangeObj.htmlText;

OK,上面说了这么一大推，来个具体的例子吧。

　　html代码如下：

![](http://images.cnitblog.com/blog/538577/201309/12175321-1bd0706f55d14ffbbfe885e9ad45d3ce.png)

 　javascript代码为:

　　　var testDiv = document.getElementById("testDiv");

　　　testDiv.onmouseup = function(){

　　　　　var selectionObj = null, rangeObj = null, selectedText = "", selectedHtml = "";

　　　　　if(window.getSelection){

　　　　　　　selectionObj = window.getSelection();

　　　　　　　selectedText = selectionObj.toString();

　　　　　　　rangeObj = selectionObj.getRangeAt(0);

　　　　　　　var docFragment = rangeObj.cloneContents();

　　　　　　   var tempDiv = document.createElement("div");

　　　　　　　tempDiv.appendChild(docFragment);

　　　　　　　selectedHtml = tempDiv.innerHTML;

　　　　　}else if(document.selection){

　　　　　　　selectionObj = document.selection;

　　　　　　　rangeObj = selectionObj.createRange();

　　　　　　　selectedText = rangeObj.text;

　　　　　　　selectedHtml = rangeObj.htmlText;

　　　　　}

　　　　　alert(selectedText);

　　　　　alert(selectedHtml);

　　　};

webkit浏览器的运行结果如下：

![](http://images.cnitblog.com/blog/538577/201309/12181917-1cec038618de4b94949c735396ffdb08.png)

IE浏览器的运行结果如下：

![](http://images.cnitblog.com/blog/538577/201309/12181951-ba92fc881de14576bd9767da540245cc.png)
