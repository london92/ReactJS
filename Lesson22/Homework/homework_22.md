#Homework 

###Задача 1 
Создайте класс Person со слеюующими свойствами:  
*  Конструктор принимает 4 аргумента: firstName(значение по умолчанию – “John”). lastName(значение по умолчанию – “Doe”),
age(по умолчанию, если свойство не указано, 0)  и gender(по умолчанию – “Male”).
Значения записываются в this.firstName, this.lastName, this.age и this.gender соответственно.
* Метод fullName, который не принимает аргументов и возвращает полное имя: e.g. “Jon Doe”. 
* Метод sayHi, который выводит на экран текст “Hello, my  name is “ + fullName.  

###Задача 2 
Создайте класс User, который наследует от класса Person (из предыдущей задачи),
со свойствами signUpDate(дата регистрации, по умолчанию 0) и id. Создайте несколько экземпляров класса и запишите их в массив users.

###Задача 3 
Создайте React компонент(используя ES6 синтаксис), который выведет на экран в виде таблицы массив users из предыдущей задачи.
При клике по каждой ячейке таблицы, содержащей имя плоьзователя, должен запускаться метод sayHi соотстветствующего элемента массива users.

 