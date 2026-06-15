console.log("Hello World")
document.title = "DOM Manipulation"
// document.body.style.backgroundColor = "gray";
// document.body.style.color = "white";
document.body.style.fontSize = "20px";

alert(document.documentElement.parentNode)
alert(document.documentElement.parentElement)



/*

xyz.firstElementChild
<div class=​"container">​…​</div>​

xyz.firstElementChild.childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

xyz.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]




*/