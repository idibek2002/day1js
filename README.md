![The San Juan Mountains are beautiful!](/img/js.jpg "San Juan Mountains")


# Java Script


### History of JavaScript

JavaScript — один из самих популярный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Первая версия называлась Mocha, просуществовала всего 10 дней, затем ее переименовали в LiveScript, и, наконец, она получила имя JavaScript, которое до сих пор известно под этим именем. С помощью JavaScript мы также можем создавать мобильные и настольные приложения с помощью React Native. В основном используется для веб-приложений.



### В JavaScript есть переменные и константы

1. var- глобалный переменый
2. let- локалный переменый 
3. const- константный переменый
let, var, const определяет област переменый.


### Object and Primitives

Значение переменной разделить на две группи: **Primitive** and **Object**


#### Тип данных Primitives

👉 1. Number
👉 2. String
👉 3. Boolean
👉 4. Undefined
👉 5. Null
👉 6. Symbol
👉 7. BigInt


#### Тип данных Objects

👉 1. Object literal
👉 2. Arrays
👉 3. Function
👉  Many more...


#### Операторы в JavaScript

 1. Арифметические Operators- +, -, *, /
 2. Comparison Operators- =, ===, <=, >=, !=, !==
 3. Логические Operators- "||", "&&", "!"
      1. ||- возврашается true если один из значение является true
      2. &&- возврашается true если всех из значение является true
      3. !- возврашается противположение. Например !true возврашается false
 4. Type Conversions- Number("3.33")
 5. Assignment Operators  -=, +=, *= ...
 
 ### Основные операторы в JavaScript
 
 1. **Conditions**
 2. **Loops**
 3. **Functions**


#### 1. Condition **if/else**
 Condition if/else на JavaScript синтаксис и его использование похож на другой язык программирования.
 Инструкция if выполняет инструкцию, если указанное условие выполняется (истинно). Если условие не выполняется (ложно), то может быть выполнена другая инструкция. 
 **Например:**
 let firstName = "idibek";
  if(firstName === "idibek"){
     console.log("YES");
  } else{
     console.log("NO");
  }


####  Condition **Ternary**
Очень удобно и понятно для написания код
 **Например:** 
 let firstName = "idibek";
(firstName === "idibek")?console.log("YES"):console.log("NO");


#### 3. Condition **Switch**
Это Condition исползуется для не которих определенний условые.
**Например:**

switch (count) {
  case 1:
    result = 'one';
    break;
  case 2:
    result = 'two';
    break;
  default:
    result = null;
}


#### Loops For и While dowhile
Loops For и While на JavaScript синтаксис похож на язый C#
Оператор for while создаёт цикл, состоящий из трех необязательных выражений, заключенных в круглые скобки и разделенных точкой с запятой, за которыми следует инструкция (часто блок инструкций), которая должна выполняться в цикле.

**Например**
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);



#### 1. Function Declaration
Объявление функции определяет функцию с указанными параметрами.

**Например:**

function calcRectArea(width, height) {
  return width * height;
}
console.log(calcRectArea(5, 6));
  

#### 2. function Expression
Ключевое function слово может использоваться для определения функции внутри выражения.
Вы также можете определить функции, используя function объявление или синтаксис стрелки.

 **Например:**
const getRectArea = function(width, height) {
  return width * height;
};
console.log(getRectArea(3, 4));

Вы также можете определить функции, используя function объявление или синтаксис стрелки.

const getRectArea =(width, height) => {
  return width * height;
};
console.log(getRectArea(3, 4));



#### 3. Imemediately invoked function Expression
Немедленно вызываемые функциональные выражения JavaScript (IIFE) — это функции, которые выполняются при их инициализации. IIFE (произносится как «неверный») может быть инициализирован или определен для достижения определенной цели. В этом руководстве вы узнаете о вариантах использования IIFE и преимуществах их использования по сравнению с традиционными функциями. Вы также будете писать тесты для своих функций и интегрировать CI/CD для этих тестов.
 Это Function визивается сразу в консе Function
**Например:**

(function(number){
     console.log(number);
  })(10)