# Vue.js

## What is Vue.js
- focused on the view layer only
- easy to pick up and integrate with other libraries or existing projects
- capable of powering sophisticated Single-Page Applications

### Vue.js vs React vs Angular

#### vs React
- similarities
   - virtual DOM
   - provide reactive and composable view components
   - maintain focus in the core library

- react win
   - richness of their ecosystem
   - abundance of their custom renderers

- vue.js win
   - Render Performance
   - Update Performance(except optimized React)
   - React is Difficult(JSX)
   - Scaling Up & Down

#### vs angular2

- TypeScript
- Size and Performance
- Flexibility
- Learning Curve


```
"Even without TypeScript, Angular's Quickstart guide starts out with an app that uses ES2015 JavaScript, NPM with 18 dependencies, 4 files, and over 3,000 words to explain it all - just to say Hello World."
```

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
```

### Hello World
(01.helloworld.html)
```html
<html>
<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="app">
        {{ message }}
    </div>
</body>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            message: 'hi Vue!'
        }
    })
</script>
<html>
```

## The Vue Instance

### Properties
(02.properties.html)
```html
<html>

<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="app">
        {{ a }}
    </div>
</body>
<script>
    var data = { a: 1 }
    var vm = new Vue({
        el: '#app',
        data: data
    })
    console.log(vm.a === data.a) // -> true
    vm.a = 2
    console.log(data.a) // -> 2
    data.a = 3
    console.log(vm.a) // -> 3
</script>
<html>
```
>if you attach a new property to the instance after it has been created, it will not trigger any view updates

## Template Syntax

### Interpolations
(03.Syntax.html)
```html
<html>

<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="app">
        <span>Message: {{ msg }}</span>
        <div v-html="rawHtml"></div>
        <div v-bind:id="dynamicId">my id is test</div>
        <div :id="dynamicId2">my id is test2</div>
        <button v-bind:disabled="active">Button</button>

    </div>
</body>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            msg: "test" , 
            rawHtml : "<input type='text' value='abc'></input>" , 
            dynamicId : "test" , 
            dynamicId2 : "test2",
            active : true
        }
    })

</script>
<html>
```

### Directives
(04.Syntax2.html)
```html
<html>

<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="app">
        <p v-if="seen">Now you see me</p>
        <a v-on:click="doSomething">hi</a></br>
        <a @click="doSomething">hi2</a>
    </div>
</body>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            seen: false
        } , 
        methods : {
            doSomething : function(){
                alert('hi');
            }
        }

    })

</script>
<html>
```


## Class and Style Bindings
(04.class.html)
```html
<html>

<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<style>
.error { color : red}
.blue {color : blue}
.bg {background:  red}

</style>

<body>
    <div id="app">
        <div v-bind:class="{ error: error }">test</div>
        <div v-bind:class="{blue , bg }">test</div>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize 
        + 'px' }">test</div>
        <div v-bind:style="styleObject">object</div>
    </div>
</body>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            error: false , 
            blue : "blue",
            bg : "bg",
            activeColor :  "green",
            fontSize  : "30" , 
            styleObject : {
                color : "red",
                fontSize : "100px"
            }
        }
    })

</script>
<html>
```


## Conditional Rendering
(05.Condition.html)
```html
<html>

<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="app">
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>

        <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>

        <h1 v-show="show">Hello!</h1>
    </div>
</body>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            type: "A",
            ok: true , 
            "show" : true
        }
    })

</script>
<html>
```

> v-show just add 'display : none' style

> v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.

## List Rendering
(05.List.html)
```html
<html>

<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="app">
        <li v-for="item in items">
            {{ item.message }}
        </li>
        with index 
        <li v-for="(item, index) in items">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
        with template
        <template v-for="item in items">
            <li>{{ item.message }}</li>
        </template>
    </div>
</body>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            parentMessage: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    })

</script>
<html>
```

### Array Change Detection
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

### Can't not detect case

- vm.items[indexOfItem] = newValue

```javascript
// Vue.set
Vue.set(example1.items, indexOfItem, newValue)
// Array.prototype.splice
example1.items.splice(indexOfItem, 1, newValue)
```

## Event Handling
(06.Event.html)
```html
<html>

<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="app">
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <button v-on:click="greet">Greet</button>
    </div>
</body>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            counter: 0 , 
            name : "Vue"
        },
        methods: {
            greet: function (event) {
                // `this` inside methods points to the Vue instance
                alert('Hello ' + this.name + '!')
                // `event` is the native DOM event
                if (event) {
                    alert(event.target.tagName)
                }
            }
        }
    })

</script>
<html>
```

## Form Input Bindings
(07.Form.html)
```html
<html>

<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="app">
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>

        <span>Multiline message is:</span>
        <p style="white-space: pre">{{ message2 }}</p>
        <br>
        <textarea v-model="message2" placeholder="add multiple lines"></textarea>
        </br>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        </br>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>

    </div>
</body>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            message: "hi",
            message2: "hi2",
            checked: false , 
            picked : ''

        }
    })

</script>
<html>
```