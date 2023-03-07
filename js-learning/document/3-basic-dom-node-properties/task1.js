/* У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
Демо в новом окне

Открыть песочницу для задачи.

решение
Что содержит свойство nodeType?
важность: 5
Что выведет этот код?

<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html>
решение
Тег в комментарии
важность: 3
Что выведет этот код?

<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>
решение
Где в DOM-иерархии "document"?
важность: 4
Объектом какого класса является document?

Какое место он занимает в DOM-иерархии?

Наследует ли он от Node или от Element, или может от HTMLElement? */