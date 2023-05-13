<h1> Scope in JS</h1>
В обшим JavaScript имеет четире типы <span style="color:red">SCOPE</span>
<ul>
<li>Global scope: Область по умолчанию для всего кода</li>
<li>Function scope: Это scope внутри fanction</li>
<li>Block scope: эта scope ограничивает переменную
внутри определенного блока, из доступа вне блока</li>
<li>Module scope : Область действия кода, работающего в модульном режиме.</li>
</ul>


#### Global scope:![The San Juan Mountains are beautiful!](/img/global.png "San Juan Mountains")<br>
#### Function scope:![The San Juan Mountains are beautiful!](/img/functionscope.png "San Juan Mountains")<br>
#### Block scope:![The San Juan Mountains are beautiful!](/img/block.png "San Juan Mountains")

**const** и **let** - block scope
**var** - fanction scope

# Hoisting in JS
Hoisting в JavaScript — это поведение, при котором функцию или переменную можно использовать до ее создания.
В JavaScript **function declaration** и **var** 
является Hoisting <br><br>
**Function Expression** и **let** и **const** использовать до ее создания технический работают а практически не работают. Это процес на JavaScript називается **Temporal Dead Zone**(мертвые зона).<br>

Например:<br>
### Hoisting
![The San Juan Mountains are beautiful!](/img/1.png "San Juan Mountains")


### Temporal Dead Zone in JS

![The San Juan Mountains are beautiful!](/img/hoisting.png "San Juan Mountains")

# Recursion in JS

Рекурсия — это исползовани function внутри function. Рекурсия — это когда функция вызывает сама себя до тех пор, пока кто-то ее не прервет.<br>

Например: <br>
![The San Juan Mountains are beautiful!](/img/recurs.png "San Juan Mountains")


# Closure in JS

Closure - внутри функции создат локалний функцию  и он доступен за радителский функцию. Чтобы вызвать внутренню функцию мы должны происвоить родители на переменный <br>

Например: 
![The San Juan Mountains are beautiful!](/img/closure.png "San Juan Mountains")
