# vue.js学习
## 笔记声明
- 该笔记为《Vue.js3+TypeScript完全学习指南》的个人学习笔记
- 该笔记为个人笔记各位可以用作学习详细资料免费学习但是该笔记只记录了对于我个人觉得有用的
- 如果要详细内容各位可以去看《Vue.js3+TypeScript完全学习指南》原书
- 该笔记的代码大多都是《Vue.js3+TypeScript完全学习指南》一书上的
- 该笔记仅用于学习和交流目的，而不是用于商业用途。
- 原书购买[链接](https://item.jd.com/13861763.html)https://item.jd.com/13861763.html

- 什么是vue: vue是一套用于构建是用户界面的渐进式框架
- vue的特点:
  1. 轻量级框架：相比于 `React` `Angular` 框架 `vue.js` 更简单更容易上手
  2. 数据双向绑定：采用声明式编程，可以通过更改数据自动触发视图更新 ，与 `React` 类似
  3. 指令： `vue.js` 提供了许多的内置指令，方便快速操作页面
  4. 组件化：支持组件化开发和分封装可复用的代码，与 `React` `Angular` 类似
  5. 前端路由：支持前端路由、构建单页面应用、服务器端渲染应用，与 `React` `Angular` 类似
  6. 单向数据流：组件状态管理采用单项数据流，和 `React` 类似

## 使用vue

- 创建vue实例
  - ```shell
    npm create vue@latest
    ```
- 通过 CDN 使用 Vue
  - ```html
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    ```
- createApp的对象参数
  - vue实例通过 `createApp` 函数创建，该函式需要接受一个对象作为参数，该对象可以添加 `template` 、`data` 、`methods` 等属性
  - template 属性
    - Vue.js3中的 `template` 属性用于定义需要渲染的模板内容，其中包括 HTML标签或组件。并最终将其挂载到 `<div id = app></div>` 元素上，相当于为 `innerHTML` 赋值
    - 在 `template` 属性中，使用字符串来编写html页面VScode没有提供智能提示 vue为了解决这一点提高了两种优化方式
      1. 使用 `<script>` 标签，将其类型标记为 `x-template`  ，并为其添加id属性
      2. 使用任意标签（通常使用 `<script>` 标签,因为他不会被浏览器渲染），并为其添加id属性
    - 方式一:
      - 实例1：
        - ```html
            <body>
                <div id='app'></div>
                <script type="text/x-template" id='content'>
                    <div>
                        <h1>{{msg}}</h1>
                        <h2>{{con}}</h2>
                    </div>
                </script>
                <!--引入vue.js-->
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const { createApp } = Vue;
                    createApp({
                        template: '#content',
                        data() {
                            return {
                                msg: 'hello world',
                                con: 'vue.js'
                            };
                        }
                    }).mount('#app');
                </script>
            </body>
            ```
    - 方式2:
      - 实例2：
        - ```html
            <body>
                <div id='app'></div>
                <template id='content'>
                    <div>
                        <h1>{{msg}}</h1>
                        <h2>{{con}}</h2>
                    </div>
                </template>
                <!--引入vue.js-->
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const { createApp } = Vue;
                    createApp({
                        template: '#content',
                        data() {
                            return {
                                msg: 'hello world',
                                con: 'vue.js'
                            };
                        }
                    }).mount('#app');
                </script>
            </body>
            ```
## 模板语法和内置命令

### 插值语法

- 模板语法的核心是插值语法和指令
- 语法
  - ```html
    <div>{{msg}}</div>
    ```
- 实例3：
  - ```html
      <body>
          <p>{{msg}}</p>
          <p>{{num - num1}}</p>
          <p>{{(nam - num1) >3 ? 'yes' : 'no'}}</p>
          <p>{{nam * nam1}}</p>
          <p>{{msg.split(' ').join("-")}}</p>
          <p>{{getmsg()}}</p>
           <!--引入vue.js-->
              <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
          <script>
            //创建vue实例
              const app = Vue.createApp({
                  data() {
                      return {
                        //模板绑定属性
                          msg: 'Hello Vue!',
                          num : 5,
                          num1: 1
                      }
                  },
                  methods:{
                    //创建调用方法
                      getmsg(){
                          return this.msg.split(' ').reverse().join(" ")
                      }
                  }
              })
              app.mount('body')
          </script>
      </body>
      ```
    - 插值语法不仅支持绑定data中的属性，还支持JavaScript表达式、调用方法以及三元运算符，但是不支持赋值和流程语句
### 基本指令
  - 在tepplate 上除了插值语法外还会经常看到以“v-”开头的属性,他们被称为指令
#### v-once指令
- `v-once` 指令用于指定元素或组件之渲染一次。当数据发生变化时，元素或组件及其所有的子组件将被是为静态内容，跳过更新
- 实例4：
  - ```html
      <body>
          <div id="app"></div>
              <template id="my-app">
                  <h2>{{counter}}</h2>
                  <h3>{{(counter >120) ? 'hello vue.js!' : '你好牛马'}}</h3>
                  <div v-once>
                      <p>{{vul}}</p>
                      <h2>{{counter}}</h2>
                      <h3>{{msg}}</h3>
                  </div>
                  <button @click="commit">+1</button>
          
              </template>

          <!-- 引入vue.js -->
          <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
          <script>
              // 创建vue实例
              const app = Vue.createApp({
                  template: '#my-app',
                  data() {
                      return {
                          // 模板绑定属性
                          counter: 100,
                          vul:'添加了v-once指令',
                          msg: 'Hello Vue!'
                      };
                  },
                  methods: {
                      commit() {
                          this.counter++;
                      }
                  }
              });
              app.mount('#app');
          </script>
      </body>
      ```
    - 添加了 `v-once` 指令的标签在页面刚开始是时候渲染了之后就不会再次进行渲染了
---
#### v-text指令
- `v-text` 指令用于更新元素的 `textContent`
- 实例5：
  - ```html
      <body>
        <div id = 'app'></div>
        <template id = 'my-app'>
          <h2 v-text = "msg"></h2>
          <h3>{{msg}}</h3>
        </template>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script>
          const APP = Vue.createApp({
            template:'#my-app',
            data(){
                return{
              msg:'hello vue.js'
            }}}
          ).mount('#app');
        </script>
      </body>
      ```
    - 这个代码运行后可以看到 `<h2>` 标签的内容被渲染为了hello vue.js，`v-text` 指令的效果适合模板语法{{msg}}一样的
---
#### v-html指令
- 当展示html字符串是vue不会进行特殊解析，如果需要html字符串被解析出来可以使用 `v-html` 指令，作用html字符串就会被vue解析出来
- 实例6：
  - ```html
      <body>
          <div id="app"></div>
              <template id="my-app">
                  <h2>{{msg}}</h2>
                  <h3 v-html="msg"></h3>
              </template>
          <!-- 引入 Vue 库 -->
          <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
          <script>
              const App = Vue.createApp({
                  template: '#my-app',
                  data() {
                      return {
                          // 修正 HTML 标签语法错误
                          msg: '<span style="color: red; background: blue;">hello vue3.js</span>'
                      };
                  }
              }).mount('#app');
          </script>
      </body>
      ```
    - `<h2>` 标签被渲染出来的内容为 `<span style="color: red; background: blue;">hello vue3.js</span>` ,而 `<h3>` 渲染的效果是蓝底红字的 hello vue3.js
---
#### v-pre指令
- v-pre指令用于跳过元素及其子元素的编译过程，从而加快编译速度
- 实例7:
  - ```html
      <body>
          <div id = 'app'></div>
          <template id = 'my-app'>
            <h2>{{msg}}</h2>
            <h3 v-pre>{{msg}}</h3>
          </template>
          <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
          <script>
            const App = Vue.createApp({
              template:'#my-app',
              data(){return{
              msg:'hello vue'
            }}}).mount('#app')
          </script>
        </body>
      ```
    - 这里 `<h2>` 标签被渲染为hello vue 而 `<h3>` 标签内容并未被渲染
---
#### v-clock指令
- `v-clock` 指令可以隐藏未编译的模板语法，直至组件实例完成编译(注意：该命令需要和css规则一起使用如 `display:none` )
- 实例8：
  - ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              [v-cloak] {
                  display: none;
              }
          </style>
          <title>Document</title>
      </head>
      <body>
          <div id="app"></div>
              <template id="my-app">
                  <h2 v-cloak>{{msg}}</h2>
              </template>
          <!-- 引入 Vue 库 -->
          <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
          <script>
              const App = Vue.createApp({
                  template: '#my-app',
                  data() {
                      return {
                          msg: 'hello vue'
                      };
                  }
              }).mount('#app');
          </script>
      </body>
      </html>
      ```
    - 这里 `<h2>` 标签是等到前端编译完成在被渲染出来
---
#### v-bind指令
- `v-bind` 指令用于绑定各种各样的属性
- 绑定基础属性
  - 实例9：
    - ```html
        <body>
            <div id="app"></div>
            <template id="my-app">
                <!-- 使用 v-bind 绑定 src 属性 -->
                <img v-bind:src="imgUrl" :style = 'val'>
                <a v-bind:href="link">百度链接</a>
                <!-- 使用 v-bind 绑定 src 属性 -->
                <img v-bind:src="imgUrl" :style="val">
            </template>
            <!-- 引入 Vue 库 -->
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp({
                    template: '#my-app',
                    data() {
                        return {
                            imgUrl: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc_mobile/preview_jpg/82e40c5fb47fa98aacb47c305e4ee27c.jpg',
                            link: 'https://www.baidu.com',
                            val:{ width: '100px', height: '200px' }
                        };
                    }
                }).mount('#app');
            </script>
        </body>
        ```
    - 这里的图片和超链接链接都会被vue渲染出来
- 绑定class属性
  - 实例10：
    - ```html
        <body>
            <div id="app"></div>
            <template id="my-app">
                <div :class="abc">class绑定字符串1</div>
                <div :class="className">class绑定字符串2</div>
                <div :class="{'active': isActive}">class绑定字符串3</div>
                <div :class="{active: isActive, title: true}">class绑定对象</div>
                <div :class="{active: isActive, title: true}">class绑定对象2</div>
                <div class="abc cba" :class="{active: isActive, title: true}">默认class和动态class结合</div>
                <div class="abc cba" :class="classObj">绑定属性中的对象</div>
                <div class="abc cba" :class="getObj()">绑定methods/computed返回的对象</div>
                <button @click="toggle">切换isActive</button>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const app = Vue.createApp({
                    template: '#my-app',
                    data() {
                        return {
                            className: 'coderwhy',
                            isActive: true,
                            classObj: {
                                active: true,
                                title: true
                            },
                        };
                    },
                    methods: {
                        toggle() {
                            this.isActive = !this.isActive
                        },
                        getObj() {
                            return {
                                active: false,
                                title: true
                            }
                        }
                    }
                }).mount('#app')
            </script>
        </body>
      ```
    - 运行后点击按钮标签的class属性会发生变动
    - 绑定数组类型
      - 实例11：
        - ```html
             <body>
                <div id = 'app'><div>
                <template id = 'my-app'>
                    <div :class = ['abc',title]> vbind绑定 class-数组语法</div>                
                    <div :class = ['abc',title,isActive ? 'active':'']> vbind绑定 class-数组语法</div>                
                    <div :class = ['abc',title,{active:isActive}]> vbind绑定 class-数组语法</div>                
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const App = Vue.createApp(
                        {
                            template: '#my-app',
                            data(){
                                title:'cba',
                                isActive:true
                            }
                        }
                    ).mount('#app')
                </script>
             </body>
            ```
          - 运行后数组中的属性被成功绑定上了对应的标签
- 绑定style属性
  - 实例12：
    - ```html
        <body>
            <div id="app"></div>
            <template id="my-app">
                <div :style="{ color: finalCocle, 'font-size': '16px' }">v-bind绑定style-对象语法</div>
                <div :style="{ color: finalCocle, 'font-size': '16px' }">v-bind绑定style-对象语法</div>
                <div :style="{ color: finalCocle, fontSize: '16px' }">v-bind绑定style-对象语法</div>
                <div :style="{ color: finalCocle, fontSize: final + 'px' }">v-bind绑定style-对象语法</div>
                <div :style="finalObj">绑定一个data中的属性</div>
                <div :style="getFinalObj()">methods方法返回的对象</div>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp({
                    template: '#my-app',
                    data() {
                        return {
                            message: 'hello world',
                            finalCocle: 'red',
                            final: 16,
                            finalObj: {
                                'font-size': '16px',
                                fontWeight: 700,
                                backgroundColor: '#ddd'
                            }
                        };
                    },
                    methods: {
                        getFinalObj() {
                            return {
                                'font-size': '16px',
                                fontWeight: 700,
                                backgroundColor: '#ddd'
                            };
                        }
                    }
                }
                ).mount('#app');
            </script>
        </body>
        ```
        - 运行后可以看到对应的样式被渲染出来了
        - 绑定数组
          - 实例13：
            - ```html
                <body>
                    <div id ='app'></div>
                    <template id = 'my-app'>
                        <div :style = "[{color:'red',fontSize:'15px'}]">v-bind指令style绑定数组语法</div>
                        <div :style = '[styleObj,style2Obj]'>style绑定数组语法</div>
                    </template>
                    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                    <script>
                        const App = Vue.createApp(
                            {
                                template:'#my-app',
                                data(){
                                    return{
                                        message:'hello vue',
                                        styleObj:{
                                            color:'red',
                                            fontSize:'16px'
                                        },
                                        style2Obj:{
                                            textDecoration:'underline'
                                        }
                                    }
                                }
                            }
                        ).mount('#app')
                    </script>
                </body>
                ```
            - 运行后可以看到数组内的样式被渲染到了模板上
        - 绑定动态属性
          - 实例14:
            - ```html
                <body>
                    <div id= 'app'></div>
                    <template id ='my-app'>
                        <div :[name]="value">v-bind动态绑定一个对象</div>
                        <div v-bind:[name] = 'value'>v-bind动态绑定一个对象</div>
                    </template>
                    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                    <script>
                        const App = Vue.createApp(
                            {
                                template:'#my-app',
                                data(){
                                    return{
                                        name:'username',
                                        value:'kobe'
                                    }
                                }
                            }
                        ).mount('#app')
                    </script>
                </body
                ```
            - 运行后可以看到标签内有一个名为 `username` 的属性其值为 `kobe`
- 绑定一个对象
    - 实例15：
        - ```html
                <body>
                    <div id='app'></div>
                    <template id = 'my-app'>
                        <div v-bind='info'>动态绑定一个对象</div>
                        <div :='info'>动态绑定一个对象</div>
                    </template>
                    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                    <script>
                        const App = Vue.createApp(
                            {
                                template:'#my-app',
                                data(){
                                    return{
                                        info:{
                                            name:'why',
                                            age:18,
                                            heighe:1.88
                                        }
                                    }
                                }
                            }
                        ).mount('#app')
                    </script>
                </body>
            ```
          - 运行后可以看到return返回的对象内容被渲染为标签的属性了
#### v-on指令
- v-on指令用于实现对事件的监听
- 绑定事件
  - 实例16：
    - ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                .area{
                    width: 100px;
                    height: 100px;
                    background-color: red;
                }
            </style>
            <title>Document</title>
        </head>
        <body>
            <div id='app'></div>
            <template id='my-app'>
                <button v-on:click='change'>监听按钮单击</button>
                <div class="area" v-on:mousemove="mousemove">监听鼠标移动事件</div>
                <button @click="btnCilck">监听按钮单击</button>
                <button @click = 'counter++'>单击+1 {{counter}}</button>
                <div class = "area" v-on="{click:btnCilck, mousemove:mousemove}">监听鼠标移动事件</div>
                <div class="area" @="{click:btnCilck, mousemove:mousemove}">监听鼠标移动事件</div>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp({
                    template:'#my-app',
                    data(){
                        return{
                            message:'vue',
                            counter:100
                        }
                    },
                    methods:{
                        change(){
                            this.message = 'hello vue3'
                            console.log(this.message)
                        },
                        mousemove(event){
                            console.log(event)
                        },
                        btnCilck(){
                            console.log('按钮单击')
                        }
                    }
                }).mount('#app')
            </script>
        </body>
        </html>
        ```
      - 运行后在控制台中可以看到对应的事件响应
- 事件对象和参数传递
  - 事件发生时会产生事件对象，可以才事件回调函数中获取事件对象
  - 实例17:
    - ```html
        <body>
            <div id ='app'></div>
            <template id = 'my-app'>
                <button @click='execute'>自动传入event对象</button>
                <button @click = "execute2($event,'codewhy',18)">手动传入event对象</button>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp(
                    {
                    template:'#my-app' ,
                    data(){
                        return{
                            message:'hello world'
                        }
                    },
                    methods:{
                        execute(event){
                            console.log(event);
                        },
                        execute2(name,age,event){
                            console.log(name,age,event);
                        }
                    }

                    }
                ).mount('#app')
            </script>
        </body>
        ```
    - 运行后单击按钮在控制台中可以看到函数运行输出的结果
- 修饰符
  - 在JavaScript中可以通过 `event.stopPropagation` 阻止冒泡事件，在可以使用 `v-on` 指令的 `.stop` 修饰符阻止冒泡事件
  - 实例18：
    - ```html
        <body>
            <div id = 'app'></div>
            <template id = 'my-app'>
                <div @click='divClick' :style='{width:"100px","height":"65px", backgroundColor:"#ddd"}'>
                    div
                    <button @click.stop='btnClick'>button按钮</button>
                </div>
                <input type = 'text' @keyup='enterKeyup'>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp(
                    {
                        template:'#my-app',
                        data(){
                            return{
                                message:'hello vue'
                            }
                        },
                        methods:{
                            divClick(){
                                console.log('divClick')
                            },
                            btnClick(){
                                console.log('btnClick') 
                            },
                            enterKeyup(event){
                                console.log('keyup',event.target.value)
                            }
                        }
                    }
                ).mount('#app')
            </script>
        </body>
        ```
        - 代码运行后在文本框中输入数据可以在控制台中看到实时反馈，单击盒子在控制台中可以看到divClick单击盒子在的按钮在控制台中可以看到btnClick不好同时出现btnClick和divClick
#### 条件渲染
- 在前端开发中，有时需要根据当前条件绝对是否渲染特定的元素或组件，vue3提供了 `v-if` `v-else` `v-else-if` `v-show` 指令用于实现条件渲染
##### v-if指令
- `v-if` 指令用于根据条件渲染某一块内容。该指令是惰性的当条件为false时，判断内容不会被完全渲染或销毁，当条件为true时，才会真正渲染条件块中的内容
- 实例19：
    - ```html
        <body>
            <div id ='app'></div>
            <template id = 'my-app'>
                <h2 v-if='isShow'>v-if条件渲染的基本使用</h2>
                <button @click='execute'>单击切换显示与隐藏</button>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App =  Vue.createApp({
                    template:"#my-app",
                    data(){
                        return{
                        mssage:'hello vue',
                        isShow:true
                        }
                    },
                    methods:{
                        execute(){
                            this.isShow = !this.isShow; 
                        }
                    }
                }).mount('#app')
            </script>
        </body>
        ```
        - 代码运行后单击按钮会将 `<h2>` 标签隐藏再次单击会显示
##### v-else指令
- 该指令和 `v-if` 作用一样但是是当条件不满足是渲染需要配合 `v-if` 指令使用
- 实例20：
    - ```html
        <body>
            <div id = 'app'></div>
            <template id = 'my-app'>
                <h2 v-if = 'val'>你好顶级牛马</h2>
                <h2 v-else> 你好世界</h2>
                <button @click = 'add'>点我{{mas}}</button>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp(
                    {
                        template:'#my-app',
                        data(){
                            return{
                                val:false,
                                mas:0
                            }
                        },
                        methods:{
                            add(){
                                if (this.mas >= 50){
                                    this.mas = 0;
                                    this.val = !this.val
                                }else{
                                    this.mas +=1;
                                }
                            }
                        }
                    }
                ).mount('#app')
            </script>
        </body>
        ```
        - 代码运行后 显示你好世界，当按钮点击了50次后显示你好牛马，再次点击50次后显示你好世界
##### v-else-if指令
- `v-else-if` 指令用于上一个标签不符合条件对应当前标签的判断， `v-if` `v-else-if` `v-else` 三个指令组合类似于python里面的 `if ··· elif ··· else ···`，需要配合 `v-if` 指令使用 `v-else-if` 
- 实例21：
    - ```html
            <body>
                <div id= 'app'></div>
                <template id = 'my-app'>
                    <input type = 'text' v-model="score" placeholder = '请输入分数'>
                    <h2 v-if = 'score >100 || score <0'>分数不合法</h2>
                    <h2 v-else-if = 'score >=90'>优秀</h2>
                    <h2 v-else-if = 'score>=60'>良好</h2>
                    <h2 v-else>不及格</h2>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const App = Vue.createApp(
                        {
                            template:'#my-app',
                            data(){
                                return{
                                    score: 90
                                }
                            }
                        }
                    ).mount('#app')
                </script>
            </body>
        ``` 
        - 运行后程序可以根据文本框中的分数来进行评判 这里 `v-model` 这里的作用是双向绑定，即文本框的数据会被绑定到 score变量中同时score变量的值也会影响文本框的数据
    ##### v-show指令
    - `v-show` 指令的用法和作用和 `v-if` 指令一致
    - 实例22：
        - ```html
                <body>
                    <div id = 'app'></div>
                    <template id = 'my-app'>
                        <h2 v-show ='isShow'>你好世界</h2>
                        <button @click = 'execute'>按下{{mag}}</button>
                    </template>
                    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                    <script>
                        const App = Vue.createApp(
                            {
                                template:'#my-app',
                                data(){
                                    return{
                                        isShow : true,
                                        mag:'隐藏'
                                    }
                                },
                                methods:{
                                    execute(){
                                        if (this.isShow){
                                            this.mag = '显示'
                                        }else{
                                            this.mag = '隐藏'
                                        }
                                        this.isShow = !this.isShow
                                    }
                                }
                            }
                        ).mount('#app')
                    </script>
                </body>
            ```
            - 运行后按下按钮隐藏 `<h2>` 标签，再次按下按钮显示 `<h2>` 标签
#### 列表渲染
##### v-for指令
- 在真实开发过程中，通常需要从服务器获取一组数据并渲染的页面上，这时就可以用Vue3中 `v-for` 指令来实现， `v-for` 指令类似与JavaScript中的for循环，可用于遍历一组数据并渲染到页面上
- `v-for` 指令的基本使用
  - 在Vue3中使用 `v-for` 指令语法的基本方式为 `v-for="item in 可迭代对象"` 或 `v-for="(item,insex) in 可迭代对象"`
  - 实例23：
    - ```html
        <body>
            <div id='app'> </div>
            <template id = 'my-app'>
                <h4>书籍列表</h4>
                <ul>
                    <li v-for="name in book">{{name}}</li>
                </ul>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp(
                    {
                        template:'#my-app',
                        data(){
                            return{
                                book:['算法导论',"算法图解","流畅的python","JavaScript权威指南"]
                            }
                        }
                    }
                    ).mount('#app')
            </script>
        </body> 
        ```
        - 代码运后可以看到bookl列表的书籍被渲染为了html里面无序列表
--- 
- `v-for` 指令支持的类型
  - 对象类型遍历
    - 遍历值：`v-for = 'value in object'`
    - 遍历键值对：`v-for = '(value,key) in object'`
    - 遍历键值对以及索引：`v-for = '(value,key,index) in object'`
  - 数字类型遍历
    - 遍历值：`v-for = 'value in number'`
    - 遍历值及索引：`v-for = '(value,index) in number'`
--- 
- 数组的更新检测
  - 在data中的变量属于响应式变量，修改这些变量时会自动触发视图更新。对与定义为数组类型的响应式变量，在调用 `filter()` `pop()` `unshift()` `splice()` `sort()` 和 `reverse()` 等方法会触发
    - 实例24：
        - ```html
            <body>
                <div id = 'app'></div>
                <template id = 'my-app'>
                    <ul>
                        <li v-for = '(move,index) in moves'>{{index+1}}.{{move}}</li>
                    </ul>
                    <input type = 'text' v-model = 'name'>
                    <button @click = 'add'>添加</button>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const App = Vue.createApp(
                        {
                            template:'#my-app',
                            data(){
                                return{
                                    name : '',
                                    moves : ['生化危机','盗梦空间']
                                }
                            },
                            methods:{
                                add(){
                                    if (! this.moves.includes(this.name)){
                                        this.moves.push(this.name);
                                        this.name = '';
                                    }else{
                                        this.name = '';
                                        alert('已存在');
                                    }
                                }
                            }
                        }
                        ).mount('#app')
                </script>
            </body>
        - 运行后在文本框中输入信息点击添加按钮后如果上方列表没有文本框中的内容则会在上方列表中添加如果有了会跳出提示已存在 
  - 用新数组替换旧数组
    - 实例25:
      - ```html
            <body>
                <div id = 'app'></div>
                <template id = 'my-app'>
                    <ul>
                        <li v-for = '(move,index) in moves'> {{index+1}}.{{move}}</li>
                    </ul>
                    <button @click = 'execute'>显示前三名</button>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const App = Vue.createApp(
                        {
                            template:'#my-app',
                            data(){
                                return{
                                    moves:['python3爬虫开发实战指南','JavaScript权威指南','流畅的python','C语言程序设计','python从入门到实战']
                                }
                                
                            },
                            methods:{
                                execute(){
                                    this.moves= this.moves.filter((move,index)=>index<3)
                                }
                            }
                        }
                    ).mount('#app')
                </script>
            </body>
        ```
        - 运行后可以看到move变量的内容被渲染为了列表，单击按钮将就只显示前3个
#### key和diff算法
##### VNode和VDOM
- 在Vue3中，在使用 `v-for` 进行列表渲染时，官方建议为元素或组件绑定一个key属性。这样做主要是为了更好的执行diff算法 
- vue.js 3官网对key属性作用的解释
  - key属性主要用于在vue3.js 3 虚拟DOM算法中。在新旧节点(Node)中对比时，用于辨识VNode
  - 如果不用key属性，Vue.js 3 会尝试使用一种算法，最大限度的减少动态元素，并尽可能就修改或复用相同类型的元素
  - 如果用key元素，vue.js 3 将根据key属性的值重新排列元素的顺序，并移除或销毁那些不存在key属性的元素
- `VNode` 的概念
  - `VNode` 的全称是 `Virtual Node` 也就是虚拟节点
  - 无论是组件还是元素，它们最终在 vue.js3 中表示出来的都是一个个 `VNode`
  - `VNode` 本质上是一个 JavaScript 的对象代码所示如下：
    - `<div class='title' style='font-size:30px; color:red'> Hello Vue3</div>`
    - 上面的`<div>` 元素在Vue.js3 中会被转化，并创建出一个 `VNode` 对象：
    - ```js
        const vnode = {
            type:'div',
            props:{
                'class': 'title',
                'style':{
                    'font-size':'30px',
                    'color':'red'
                }
            },
            children:'Hell Vue'
        }
        ```
    - 在Vue.js3内部获取 `VNode` 对象后，会对对象进行处理，并将其渲染成真实的DOM，具体过程如下
      - ```mermaid
            graph LR
            A[template] -->B[VNode]
                B --> C[真实的DOM]
        ```
    - 如果网页不仅只有一个简单的 `<div>` 还包含有大量元素如：
      - ```html
            <div>
                <p>
                    <i>emmm</i>
                    <i>6666</i>
                </p>
                <span>哈哈哈</span>
                <strong>233</strong>
            </div>
            ```
      - 那么上面的代码会形成一个 `VNode Tree` 如下所示
        - ```mermaid
             flowchart TD
             A((duv)) -->B((p))
             A -->C((span))
             A -->D((strong))
             B-->E((i))
             B-->F((i))
            ```
##### key的作用和diff算法
- 实例26：
  - ```html
        <body>
            <div id ='app'></div>
            <template id = 'my-app'>
                <ul>
                    <li v-for='item in lettres' :key='item'>{{item}}</li>
                </ul>
                <button @click='execute'>插入元素</button>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp(
                    {
                        template:'#my-app',
                        data(){
                            return{
                                lettres:['a','b','c','d']
                            }
                        },
                        methods:{
                            execute(){
                                this.lettres.splice(2, 0, 'f')
                            }
                        }
                    }
                ).mount('#app')
            </script>
        </body>
    ```
    - 代码运行后可以看到 数组lettres被成功转化为了 `<li>` 列表同时也都绑定上了key，按下按钮后会在列表索引为2的地方插入'f'并且会高效的渲染出来

## vue.js3 的Options API
- `Options API` 是一种通过对象定义属性、方法等框架API的方式
### 计算属性
- 在模板中可以通过插值语法显示一些data数据，但在模型情况下，可能需要对数据进行一些转换后在显示，或者需要将多个节点结合起来进行显示，例如需要对多个data数据进行运算或由三元运算符来决定结果，或对数据进行某种转换后显示结果。在模板中直接使用表达式，可以非常方便的实现这些功能，但是在模板中放入大量逻辑会让模板太重难以维护，如果多个地方有相同逻辑，会有大量重复代码，不利于代码复用，因此，应该尽可能将模板逻辑抽离出去
- 可以尝试一些逻辑抽离逻辑
  1. 将逻辑抽取到一个方法中，即放到 `methods` 的选项中。但这样做会有一个明显的弊端————所有的data数据的使用过程都变成了一个方法的调用
  2. 使用计算属性
     - 对于计算属性，vue.js官方并没有给出直接的概念解释，而是收“对于如何包含响应式的数据的复杂逻辑，都应该使用计算属性”，在vue3中，计算属性被混如主键实例中，同时grtter和setter的this上下文将自动绑定为组件实例。这种设计可以更方便的操作组件内的响应式数据，并提高代码1可读性和可维护性
     - 计算属性的基本使用
     - 计算数学的基本语法如下
       - 选项：computed
       - 类型：{[key:sying]:Function|{get:Function,set:Function}}
  - 思路一：模板语法实现
    - 实例27：
      - ```html
          <body>
              <div id = 'app'></div>
              <template id = 'my-app'>
                  <h4>{{firstName+' '+lastName}}</h4>
                  <h4>{{score >=60 ? '及格' : '不及格'}}</h4>
                  <h4>{{message.split(' ').reverse.join(' ')}}</h4>
              </template>
              <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
              <script>
                  const App = vue.createApp(
                      {
                          template:'#my-app',
                          data(){
                              return {
                                  firstName:'Kobe',
                                  lastName:'Bryant',
                                  score:80,
                                  message:'hello world'
                              }
                          }
                      }
                  ).moun('#app')
              </script>
          </body>  
          ```
  - 思路二：methods的实现
    - 实例28：
      - ```html
          <body>
              <div id = 'app'></div>
              <template id = 'my-app'>
                  <h4>{{getFullName()}}</h4>
                  <h4>{{getResult()}}</h4>
                  <h4>{{getMessage()}}</h4>
              </template>
              <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
              <script>
                  const app = Vue.createApp(
                      {
                          template:'#my-app',
                          data(){
                              return{
                                  firstName:'Kobe',
                                  lastName:'Bryant',
                                  score:80,
                                  message:'hello world'
                              }
                          },
                          methods:{
                              getFullName(){
                                  return this.firstName + ' ' + this.lastName;
                              },
                              getResult(){
                                  return this.score >= 60 ? '及格' : '不及格';
                              },
                              getMessage(){
                                  return this.message.split(' ').reverse().join(' ');
                              }
                          }
                      }
                  ).mount('#app');
              </script>
          </body>
          ```
  - 思路三：计算属性的实现
    - 实例29：
      - ```html
            <body>
                <div id='app'></div>
                <template id='my-app'>
                    <h4>{{fullName}}</h4>
                    <h4>{{result}}</h4>
                    <h4>{{reversMessage}}</h4>
                </template>

                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const App = Vue.createApp({
                        template: '#my-app',
                        data() {
                            return {
                                firstName: 'Kobe',
                                lastName: 'Bryant',
                                score: 80,
                                message: 'hello world'
                            };
                        },
                        computed: {
                            fullName() {
                                return this.firstName + ' ' + this.lastName;
                            },
                            result() {
                                return this.score >= 60 ? '及格' : '不及格';
                            },
                            reversMessage() {
                                return this.message.split(' ').reverse().join(' ');
                            }
                        }
                    }).mount('#app');
                </script>
            </body>
        ```
---
- 计算属性和methods的区别
  - 计算属性和methods的区别不大只是$\color{red}{计算属性会有缓存}，$具体的区别可以看下面的实例
  - 实例30：
    - ```html
        <body>
            <div id='app'></div>
            <template id="my-app">
                <h4>{{getFullName()}}</h4>
                <h4>{{getFullName()}}</h4>
                <h4>{{getFullName()}}</h4>
                <h4>{{getFullName()}}</h4>
                <h4>{{fullName}}</h4>
                <h4>{{fullName}}</h4>
                <h4>{{fullName}}</h4>
                <h4>{{fullName}}</h4>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp({
                    template: '#my-app',
                    data() {
                        return {
                            firstName: 'Kobe',
                            lastName: 'Bryant'
                        };
                    },
                    computed: {
                        fullName() {
                            console.log('computed的 fullName中计算');
                            return this.firstName + ' ' + this.lastName;
                        }
                    },
                    methods: {
                        getFullName() {
                            console.log('methods的 getFullName中计算');
                            return this.firstName + ' ' + this.lastName;
                        }
                    }
                }).mount('#app');
            </script>
        </body>
        ```
        - 代码运行后在控制台中后打印1个‘computed的 fullName中计算’和4个‘methods的 getFullName中计算’从这个实例中可以看出计算属性具有缓存特性，函数只会在依赖的数据发生变化时重新执行；而 methods 中的方法每次调用都会重新执行，无论依赖的数据是否变化。
  - 计算属性和methods最大的差异是计算属性会基于它的依赖结果进行缓存而methods不会
---
- 计算属性的settr和getter
  - 在大多数情况下计算属性只需要一个getter方法，也就是将计算属性直接写成为一个函数，但如果想要为$\color{yellow}{计算属性设置值}$也可以为它设置一个setter
  - 实例31：
    - ```html
        <body>
            <div id='app'></div>
            <template id='my-app'>
                <h4>{{fullName}}</h4>
                <button @click="changeFullName">Change Full Name</button>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = Vue.createApp({
                    template: '#my-app',
                    data() {
                        return {
                            firstName: 'Kobe',
                            lastName: 'Bryant'
                        };
                    },
                    computed: {
                        fullName: {
                            get: function () {
                                return this.firstName + ' ' + this.lastName;
                            },
                            set: function (newValue) {
                                console.log(newValue);
                                const names = newValue.split(' ');
                                
                                this.firstName = names[0];
                                this.lastName = names[1];
                            }
                        }
                    },
                    methods: {
                        changeFullName() {
                            this.fullName = 'Coder Why';
                        }
                    }
                }).mount('#app');
            </script>
        </body>
        ```
        - 代码运行后可以看到 `Kobe Bryant` 单击按钮后显示 `Coder Why`
        - 说明：
           1. 功能描述：
              - 该实例展示了计算属性的 `getter` 和 `setter` 的用法
              -  `fullName` 是一个计算属性，包含 `get` 和 `set` 方法：
                 -  `get` 方法：用于返回 `firstName` 和 `lastName` 的拼接结果。
                 -  `set` 方法：用于解析传入的新值，并将其拆分为 `firstName` 和 `lastName` 。
           2. 代码逻辑
              - 初始数据：
                - `firstName` 为 `'Kobe'` ，`lastName` 为 `'Bryant'`
                - `fullName` 的初始值为 `'Kobe Bryant'`
              - 点击按钮时，调用 `changeFullName` 方法，将 `fullName` 设置为 `'Coder Why'`。
              - `set` 方法会将 `'Coder Why'` 拆分为 `firstName: 'Coder'` 和 `lastName: 'Why'` ，并更新数据。
### 监听器 watch
- 在data属性中可以定义响应式数据，并在模板中使用。当响应式数据发生变化时，模板中对应的内容也会自动更新。但在某些情况下，需要监听某个响应式数据的变化，这时就需要使用监听器（watch）来实现
#### watch的基本使用
  - watch的使用
    - watchd的使用语法：
      - 选项：watch
      - 类型：{[key:string]:sting|Function|Object|Array}
      - 详解：watch属性是一个对象，该对象的键是一个需要观察的表达式，值可以是回调函数、方法名等。Vue3中实例会在实例化调用$watch来遍历watch对象的每个属性
  - 实例32：
    - ```html
        <body>
            <div id='app'></div>
            <template id='my-app'>
                <!-- 输入框，使用 v-model 绑定 question 数据 -->
                <input type='text' v-model='question'>
                <!-- 显示答案，去掉多余的右尖括号 -->
                <div>{{answer}}</div>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const app = Vue.createApp({

                    template: '#my-app',
                    data() {
                        return {
                            question: '',
                            answer: ''
                        };
                    },
                    watch: {
                        question: function (newValue, oldValue) {
                            console.log('新 question 值：', newValue, '旧的 question 值', oldValue);
                            this.queryAnswer();
                        }
                    },
                    methods: {
                        queryAnswer() {
                            this.answer = `你的问题是：${this.question}? 答案：纯牛马`;
                        }
                    }
                }).mount('#app');
            </script>
        </body>
        ```
        - 代码运行后会有一个输入框用户在输入框中输入内容后会在下方显示 `你的问题是：输入的内容 是什么? 答案：纯牛马`
        - 说明：
          1. 功能描述：
             -  该实例展示了 Vue 的 `watch` 监听器的基本用法。
             -  当用户在输入框中输入内容时，`watch` 监听器会实时监听 `question` 数据的变化，并调用 `queryAnswer` 方法更新 `answer` 。
          2. 代码逻辑
             - 数据绑定：
               - `v-model` 指令将输入框的值与 `question` 数据进行双向绑定。
            - 监听器：
              - `watch` 监听器会监听 `question` 的变化。
              - 每当 `question` 的值发生变化时，`watch` 会触发回调函数，打印新旧值，并调用 `queryAnswer` 方法
            - 方法：
                - `queryAnswer` 方法根据 `question` 的值生成一个答案，并更新到 `answer` 。
          3. 关键点:
            - `v-model` ：实现了输入框与 `question` 数据的双向绑定。
            - `watch` ：监听 `question` 数据的变化，并执行回调函数。
            - 响应式更新：当 `question` 数据变化时，`answer` 会自动更新到页面。

  1. function语法
      - ```js
        watch:{
            // 1.完整写法
            // question:function (newValue,obsValue){
            //     console.log('新 question 值：', newValue, '旧的 question 值', oldValue)
            //     this.queryAnswer()
            //2.简写
            question(newValue,obsValue){
                console.log('新 question 值：', newValue, '旧的 question 值', oldValue);
                this.queryAnswer();
            }
        }
        ```
  2. 对象语法
   - ```js
        watch:{
            question:{
                handler(newValue,obsValue){
                    console.log('新 question 值：', newValue, '旧的 question 值', oldValue);
                    this.queryAnswer();
                }
            }
        }
        ```

#### watch
- watch对象语法常见的配置有以下几种
  - handler: 要监听的回调函数，当监听属性发生变化时会调用该函数
  - deep: 是否深度监听对象或数组中的每个属性变化，默认值为 `false`
  - immediate: 是否立即实行回调函数，默认值为`false`
1. `handler`选项
   -  `handler` 选项时Vue3中监听属性变化时的回调函数。当属性发送变化时，该函数会被调用
   -  实例33：
        -  ```html
            <body>
                <div id = 'app'></div>
                <template id = 'my-app'>
                    <h2>{{info.name}}</h2>
                    <h2>{{info.book.name}}</h2>
                    <button @cliak = 'changeInfo'>改变</button>
                    <button @click = 'changeIndfoName'>改变info.name</button>
                    <button @click = 'changeInfoBookName'>改变infon.book.name</button>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const app = Vue.createApp(
                        {
                            template:'#my-app',
                            data(){
                                return{
                                    info:{name:'coderwhy',age:18,book:{name:'Vue.js3'}}
                                }
                            },
                            watch:{
                                info:{
                                    handler: function(newInfo,oldInfo){
                                        console.log('newValue:',newInfo,'oldValue:',oldInfo)
                                    }
                                }
                            },
                            methods:{
                                changeInfo(){
                                    this.info = {name:'kobe',age:18,book:{name:'Vue.js3'}};
                                },
                                changeIndfoName(){
                                    this.info.name = 'rose';
                                },
                                changeInfoBookName(){
                                    this.info.book.name = 'React'
                                }
                            }
                        }
                    ).mount('#app')
                </script>
            </body>
            ```
         - 代码运行后页面初始显示coderwhy和Vue.js3，点击 "改变 info" 按钮后替换整个 info 对象，页面更新为kobe和Vue.js3，点击点击 "改变 info.name" 按钮后修改 info.name，页面更新为rose和Vue.js3，并且控制台输出`newValue: {name: 'coderwhy', age: 18, book: {name: 'React'}}` 和 `oldValue: {name: 'coderwhy', age: 18, book: {name: 'Vue.js3'}}` 在点击 "改变 info.book.name" 按钮修改嵌套属性 info.book.name，页面更新为coderwhy和React
         - 说明：
           1. 功能描述:
              -  该实例展示了 Vue 中 `watch` 的对象语法及其配置选项的使用，特别是 `handler` 的作用
              -  通过监听 `info` 对象的变化，可以捕获对象属性的更新，并在控制台中打印新旧值。
           2. 代码逻辑:
              -  数据绑定:
                 -  `info` 是一个包含嵌套对象的响应式数据。
                 -  页面通过插值语法显示 `info.name` 和 `info.book.name` 。
              - 监听器:
                - `watch` 对象监听 `info` 数据。
                - 配置了 `handler` 回调函数，用于捕获 `info` 的新旧值。
              - 方法:
                - `changeInfo` ：替换整个 `info` 对象
                - `changeInfoName` ：修改 `info.name` 属性
                - `changeInfoBookName` ：修改嵌套对象 `info.book.name` 属性
           3. 关键点:
              - `handler` ：定义监听属性变化时的回调函数。
              - 响应式更新：当 `info` 或其嵌套属性发生变化时，页面会自动更新。
2. deep选项
   - deep选项用于配置是否深度监听属性中的变化
   - 实例34：
     - ```html
            <body>
            <div id = 'app'></div>
            <template id = 'my-app'>
                <h2>{{info.name}}</h2>
                <h2>{{info.book.name}}</h2>
                <button @click = 'changeInfo'>改变</button>
                <button @click = 'changeIndfoName'>改变info.name</button>
                <button @click = 'changeInfoBookName'>改变infon.book.name</button>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const app = Vue.createApp(
                    {
                        template:'#my-app',
                        data(){
                            return{
                                info:{name:'coderwhy',age:18,book:{name:'Vue.js3'}}
                            }
                        },
                        watch:{
                            info:{
                                handler: function(newInfo,oldInfo){
                                    console.log('newValue:',newInfo,'oldValue:',oldInfo)
                                },
                                deep:true
                            }
                        },
                        methods:{
                            changeInfo(){
                                this.info = {name:'kobe',age:18,book:{name:'Vue.js3'}};
                            },
                            changeIndfoName(){
                                this.info.name = 'rose';
                            },
                            changeInfoBookName(){
                                this.info.book.name = 'React'
                            }
                        }
                    }
                ).mount('#app')
            </script>
        </body>
        ```
        - 具体的页面效果和实例33一样但是每次单击按钮在控制台中都会有信息输出
        - 说明
          1. 功能描述:
               - 该实例展示了 Vue 中 `watch` 的对象语法及其配置选项的使用，特别是 `handler` 的作用
               - 通过监听 `info` 对象的变化，可以捕获对象属性的更新，并在控制台中打印新旧值。
          2. 代码逻辑:
               -  数据绑定:
                  - `info` 是一个包含嵌套对象的响应式数据。
                  -  页面通过插值语法显示 `info.name` 和 `info.book.name` 。
               - 监听器:
                 - `watch` 对象监听 `info` 数据。
                 - 配置了 `deep: true`，实现对 `info` 对象的深度监听，包括嵌套属性的变化
                 - 配置了 `handler` 回调函数，用于捕获 `info` 的新旧值。
               - 方法:
                 - `changeInfo` ：替换整个 `info` 对象
                 - `changeInfoName` ：修改 `info.name` 属性
                 - `changeInfoBookName` ：修改嵌套对象 `info.book.name` 属性
           3. 关键点:
               - `handler` ：定义监听属性变化时的回调函数。
               - `deep: true` ：实现对对象或数组的深度监听，捕获嵌套属性的变化。
               - 响应式更新：当 `info` 或其嵌套属性发生变化时，页面会自动更新。 
3. immediate选项
    - `immediate` 选项可以让 `handler` 中定义的函数立即执行一次，在默认情况下该函数只在数据发生变化时才会回调
    - 实例35：
        - ```html
            <body>
            <div id='app'></div>
                <template id='my-app'>
                    <h2>{{info.name}}</h2>
                    <h2>{{info.book.name}}</h2>
                    <button @click='changeInfo'>改变</button>
                    <button @click='changeInfoName'>改变info.name</button>
                    <button @click='changeInfoBookName'>改变info.book.name</button>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const app = Vue.createApp({
                        template: '#my-app',
                        data() {
                            return {
                                info: { name: 'coderwhy', age: 18, book: { name: 'Vue.js3' } }
                            };
                        },
                        watch: {
                            info: {
                                handler: function (newInfo, oldInfo) {
                                    console.log('newValue:', newInfo, 'oldValue:', oldInfo);
                                },
                                deep:true,
                                immediate:true
                            }
                        },
                        methods: {
                            changeInfo() {
                                this.info = { name: 'kobe', age: 18, book: { name: 'Vue.js3' } };
                            },
                            changeInfoName() {
                                this.info.name = 'rose';
                            },
                            changeInfoBookName() {
                                this.info.book.name = 'React';
                            }
                        }
                    }).mount('#app');
                </script>
            </body>
            ```
          - 页面初始显示 `coderwhy` 和 `Vue.js3` 控制台输出 `newValue: {name: 'coderwhy', age: 18, book: {name: 'Vue.js3'}} oldValue: undefined` 点击按键后的效果同实例34
          - 说明：
              1. 功能描述：
                   - 该实例展示了 Vue 中 `watch` 的对象语法及其配置选项 `immediate` 的使用。
                   - `immediate: true` 选项会让监听器的回调函数在监听器初始化时立即执行一次，而不仅仅是在数据变化时触发。
              2. 代码逻辑：
                  - 数据绑定
                     - `info` 是一个包含嵌套对象的响应式数据。 
                     - `immediate: true` 选项会让监听器的回调函数在监听器初始化时立即执行一次，而不仅仅是在数据变化时触发。
                  - 监听器：
                      - `watch` 对象监听 `info` 数据。
                      - 配置了 `handler` 回调函数，用于捕获 `info` 的新旧值。
                      - 配置了 `immediate: true` ，使回调函数在监听器初始化时立即执行一次。
                  - 方法：
                      - `changeInfo` ：替换整个 `info` 对象。
                      - `changeInfoName` ：修改 `info.name` 属性。
                      -  `changeInfoBookName` ：修改嵌套对象 `info.book.name` 属性。
- `watch` 字符串数组和API语法
    1. 字符串和数组语法：
       - 示例：
         - ```js
            const app = createApp({
            data() {
                return {
                    b: 2,
                    f: 5
                };
            },
            watch: {
                // 1. 字符串方法名，当 b 发生改变时会触发 someMethod 函数回调
                b: 'someMethod',
                // 2. 可传入回调数组它会逐一调用数组内的函数
                f: [
                    'handle1',
                    function handle2(val, oldVal) {
                        console.log('handle2 triggered');
                    },
                    {
                        handler: function handle3(val, oldVal) {
                            console.log('handle3 triggered');
                        }
                    }
                ]
            },
            methods: {
                someMethod() {
                    console.log('b changed');
                },
                handle1() {
                    console.log('handle1 triggered');
                }
            }
            });
            ```
- `$watch` 的 API语法
  - 除了字符串和数组语法，Vue.js3还提供了 `watchAPI` 进行监听
  - `$watch`的语法为 `whis.$watch(source,callback,options)`
    - `soucer` ：要监听的源
    - `callback` ：监听的回调函数
    - `options` ：额外选项，如 `beep` `immediate`
    - 示例：
      - ```js
            created(){
                this.$watch('info',(newValue,oldValue)=>{
                    console.log(newValue,oldValue);
                },{deep:true,immediate:true})
            }
        ```
- watch深度监听
1. 仅监听对象中的某个属性
   - 在Vue3中，当需要监听一个对象时可以使用 `watch` 选项。如果想要监听对象的引用的变化或者监听属性内部的变化，那么只需要配置 `deep` 选项即可,除此之外还可以直接监听对象中某个属性的变化，而不是监听整个对象
   - 示例：
     - ```js
        watch:{
            "info.name":function(newValue,oldValue){
                console.log(newValue,oldValue);
            }
        }
        ```
2. 监听函数的新值和旧值
   - 使用深度监听时，监听函数的新值和旧值都指向同一个引用
   - 示例：
     - ```js
        watch{
            info:{
                handler:function(newInfo,lodInfo){
                    console.log(newInfo == lodInfo);
                }
            },
            deep:true
        }
        ```
3. 监听数组内部属性变化
    - 深度监听除了可以监听对象还可以监听数组内部属性变化
    - 示例：
      - ```js
            data(){
                return{
                    friends:[{name:'why'},{name:'kobe'}];
                }
            },
            watch:{
                handler(newFriends,lodFriend){
                    console.log(newFriends,lodFriend);
                },
                deep:true
            }
            ```
### 实例36购物车
- 目录树:
  - ```txt
     实例36/
     │
     ├─index.html
     │
     ├─index.js
     │
     └── style.css
     ```
- index.html
- ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
        <div id = 'app'></div>
        <template id = 'my-app'>
            <template v-if = 'books.length > 0'>
                <table>
                    <thead>
                        <th>序号</th>
                        <th>书名</th>
                        <th>出版日期</th>
                        <th>价格</th>
                        <th>购买数量</th>
                        <th>操作</th>
                    </thead>
                    <tbody>
                        <tr v-for="(book,index) in books">
                            <td>{{index+1}}</td>
                            <td>{{book.name}}</td>
                            <td>{{book.date}}</td>
                            <td>{{book.price}}</td>
                            <td>
                                <button :disabled="book.count <=1" @click="decrement(index)">-</button>
                                <span class = 'counter'>{{book.count}}</span>
                                <button @click="increment(index)">+</button>
                            </td>
                            <td><button @click = 'removeBook(index)'>删除</button></td>
                        </tr>
                    </tbody>
                </table>
                <h2>总价格：{{formatPrice(totalPrice)}}</h2>
            </template>
            <template v-else>
                <h2>购物车为空</h2>
            </template>
        </template>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script src="./index.js"></script>
    </body>
    </html>   
    ```
- index.js
  - ```js
        const app = Vue.createApp({
            template: '#my-app',
            data() {
                return {
                    books: [
                        {
                            id: 1,
                            name: '算法导论',
                            date: '2006-09',
                            price: 85.00,
                            count: 1
                        },
                        {
                            id: 2,
                            name: 'javascript权威指南',
                            date: '2013-09',
                            price: 139.00,
                            count: 1
                        },
                        {
                            id: 3,
                            name: '流畅的python',
                            date: '2023-04',
                            price: 199.80,
                            count: 1
                        },
                        {
                            id: 4,
                            name: '代码大全',
                            date: '2006-03',
                            price: 128.00,
                            count: 1
                        },
                    ]
                };
            },
            computed: {
                totalPrice() {
                    let finalPrice = 0;
                    for (let book of this.books) {
                        finalPrice += book.price * book.count;
                    }
                    return finalPrice;
                },
                formatPrice() {
                    return (price) => {
                        return "￥" + price;
                    };
                }
            },
            methods: {
                increment(index) {
                    this.books[index].count++;
                },
                decrement(index) {
                    if (this.books[index].count > 1) {
                        this.books[index].count--;
                    }
                },
                removeBook(index) {
                    this.books.splice(index, 1);
                }
            }
        });

        app.mount('#app');
    ```
- style.css
  - ```css
        table {
            border: 1px solid #e9e9e9;
            border-collapse: collapse;
            border-spacing: 0;
        }
        th, td{
            padding: 16px;
            border: 1px solid;
            text-align: left;
        }
        th{
            background-color: #f7f7f7;
            color:#5c6b77;
            font-weight: 600;
        }
        .counter{
            margin:0 5px
        }
     ```
## v-model和表单输入
### v-model的基本使用
- 在开发过程中表单提交是十分常见的功能,而获取用户提交的信息通常要用到双向绑定，而 `v-model` 指令就是Vue3用于实现双向绑定的重要指令，该指令的作用如下
  1. 在表单 `<input>` `<textarea>` `<select>` 元素上创建双向绑定 
  2. 根据控件的类型自动选取正确的方法来更新元素
  3. `v-model` 指令$\color{yellow}{是一种语法糖}$它的底层实现原理如下
     - 使用 `v-bind` 为value属性绑定变量
     - 使用 `v-on` 绑定 input事件，并在事件回调中重新为value属性绑定的变量赋值
- 实例37：
    - ```html
            <body>
                <div id ='app'></div>
                <template id = 'my-app'>
                    <input type = 'text' v-model = 'msg'>
                    <h2>{{msg}}</h2>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const app = Vue.createApp({
                        template:'#my-app',
                        data(){
                            return{
                                msg:'hello world'
                            }
                        }
                    }
                    ).mount('#app')
                </script>
            </body>
        ```
      - 代码运行后文本输入框内容为hello world，下方的标题也为hello world，更改文本输入框的内容下方标签内容也会跟着改变
### v-model的实现原理
- `v-model` 指令$\color{yellow}{是一种语法糖}$原理参考 `v-model的基本使用`
- 实例38：
  - ```html
        <body>
            <div id ='app'></div>
            <template id = 'my-app'>
                <input type = 'text' :value = 'msg' @input = 'inputChange'>
                <h2>{{msg}}</h2>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const app = Vue.createApp({
                    template:'#my-app',
                    data(){
                        return{
                            msg:'hello world'
                        }
                    },
                    methods:{
                        inputChange(event){
                            this.msg = event.target.value;
                        }
                    }
                }).mount('#app')
            </script>
        </body>
        ```
      - 效果同实例37
### v-model绑定其他表单
- `v-model` 指令不仅适用于input表单元素的双向绑定还可以用于其他的$\color{yellow}{表单元素}$ 如 `textarea` `checkbox` `radio` 和 `select` 元素等
- 实例39
  - ```html
      <body>
          <!-- 应用挂载点 -->
          <div id="app"></div>
          <!-- 定义模板 -->
          <template id="my-app">
              <div>
                  <!-- 文本输入框 -->
                    <textarea cols="30" rows="3" v-model="intro"></textarea>
                  <p>文本框的值: {{intro}}</p>
                  <!-- 复选框 -->
                  <span>2.</span>
                  <label for="agree">
                      <input id="agree" type="checkbox" v-model="isAgree">同意协议
                  </label>
                  <p>复选框的值: {{isAgree}}</p>
                  <!-- 多选框 -->
                  <span>3. 爱好：</span>
                  <label for="basketball">
                      <input id="basketball" type="checkbox" v-model="hobbies" value="basketball">篮球
                  </label>
                  <label for="football">
                      <input id="football" type="checkbox" v-model="hobbies" value="football">足球
                  </label>
                  <label for="tennis">
                      <input id="tennis" type="checkbox" v-model="hobbies" value="tennis">网球
                  </label>
                  <p>多选框的值: {{hobbies}}</p>
                  <!-- 单选框 -->
                  <span>4. 性别</span>
                  <label for="male">
                      <input id="male" type="radio" v-model="gender" value="male">男
                  </label>
                  <label for="female">
                      <input id="female" type="radio" v-model="gender" value="female">女
                  </label>
                  <p>单选按钮的值: {{gender}}</p>
                  <!-- 下拉选择框 -->
                  <span>5. 喜欢的水果</span>
                  <select v-model="fruit" multiple size="2">
                      <option value="apple">苹果</option>
                      <option value="orange">橘子</option>
                      <option value="banana">香蕉</option>
                  </select>
                  <p>选择的水果: {{fruit}}</p>
              </div>
          </template>
          <!-- 引入 Vue 库 -->
          <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
          <script>
              const { createApp } = Vue;
              // 创建 Vue 应用实例
              const app = createApp({
                  template: '#my-app',
                  data() {
                      return {
                          intro: 'hello world',
                          isAgree: false,
                          hobbies: ["basketball"],
                          gender: '',
                          fruit: ['orange']
                      };
                  }
              });
              // 挂载应用
              app.mount('#app');
          </script>
      </body>     
      ```

    - 运行效果：
        1. 文本输入框：

           - 初始值为 hello world。
           - 修改文本框内容时，页面上的绑定值会实时更新。
        2. 复选框：

            - 初始状态为未选中（false）。
            - 勾选复选框后，isAgree 的值变为 true，页面显示更新。
        3. 多选框：

            - 初始值为 ["basketball"]。
            - 勾选其他选项（如足球、网球）后，hobbies 数组会动态更新。
        4. 单选框：

            - 初始值为空字符串。
            - 选择“男”或“女”后，gender 的值会更新为对应的选项。
        5. 下拉选择框：

            - 初始值为 ["orange"]。
            - 选择其他水果（如苹果、香蕉）后，fruit 数组会动态更新。
    - 功能描述：
       - 文本输入框（textarea）
       - 复选框（checkbox）
       - 多选框（checkbox，绑定数组）
       - 单选框（radio）
       - 下拉选择框（select，支持多选） 
   - 代码逻辑：
      1. textarea 文本输入框：

         - 使用 v-model="intro" 实现双向绑定。
         - 文本框的值会实时更新到 intro，并在页面上显示。
      2. 复选框（checkbox）：

         - 使用 v-model="isAgree" 实现单个复选框的双向绑定。
         - 当复选框被选中时，isAgree 的值为 true，否则为 false。
      3. 多选框（checkbox，绑定数组）：

         - 使用 v-model="hobbies" 实现多选框的双向绑定。
         - hobbies 是一个数组，选中的值会自动添加到数组中，取消选中时会从数组中移除。
      4. 单选框（radio）：

         - 使用 v-model="gender" 实现单选框的双向绑定。
         - gender 的值会根据选中的单选框更新为对应的 value 值（如 male 或 female）。
      5. 下拉选择框（select）：

         - 使用 v-model="fruit" 实现下拉选择框的双向绑定。
         - multiple 属性允许多选，size="2" 设置显示的选项数量。
         - fruit 是一个数组，选中的选项会自动添加到数组中。 
### v-model值的绑定
- 在使用 `v-on` 指令时，可以通过修饰符完成一些特殊的操作，如 `.stop` 修饰符阻止冒泡事件。而 `v-model` 指令也支持使用修饰符完成一些特殊的操作
- 在Vue3中 `v-model` 指令常见的修饰符如下
  - `.lazy` ：将输入内容的更新延迟到change事件触发时在进行，而不是每次输入内容都要更新
  - `.number` ：将输入内容自动转为数字类型
  - `.trim` ：去除输入内容的首尾空格
### .lazy修饰符
- 在默认情况下 `v-model` 指令绑定的时 input事件。也是说，$\color{yellow}{在每次输入后，就会将最新的值和绑定属性进行同步更新}$
- 实例40：
    - ```html
            <body>
                <div id = 'app'></div>
                <template id = 'my-app'>
                    <input type='text' v-model.lazy = 'content'>
                    <h2> {{content}}</h2>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const app = Vue.createApp({
                        template:'#my-app',
                        data(){
                            return{
                                content:'hello world'
                            }
                        }
                    })
                </script>
            </body>
        ```
      - 代码运行后文本框和标题的内容为hello world 修改文本框的内容标题内容不发生改变，按下回车后标题内容会同步为文本框的内容
      - 说明：
        1. 功能描述：
            - 该实例展示了 Vue 中 `v-model` 指令的 `.lazy` 修饰符的使用。
            - 当用户在输入框中输入内容时，`.lazy` 修饰符会延迟更新绑定的数据，直到用户按下回车键。
        2. 代码逻辑：
            - 数据绑定：
            - `v-model.lazy` 将输入框的值与 `content` 数据进行双向绑定，并延迟更新。
            - 方法：
            - 当用户输入内容并按下回车键时，`content` 的值会自动更新到页面。
        3. 关键点:
            - `.lazy` 修饰符：实现了延迟更新的功能。
            - 响应式更新：当输入框内容变化时，`content` 会在按下回车后自动更新到页面。
### .number修饰符
- 对于 `.namber` 修饰符的作用由下面的实例来体现
- 实例41:
    - ```html
            <body>
                <div id="app"></div>
                <template id="my-app">
                    <input type="text" v-model.lazy="msg">
                    <h2>{{msg}}->{{typeof msg}}类型</h2>
                    <input type="text" v-model.lazy.number="msg1">
                    <h2>{{msg1}}->{{typeof msg1}}类型</h2>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const app = Vue.createApp({
                        template: '#my-app',
                        data() {
                            return {
                                msg: null,
                                msg1: null
                            };
                        }
                    });
                    app.mount('#app');
                </script>
            </body>
        ```
    - 运行后输入对上下文本框分别数字回车后可以看到使用了 `.number` 修饰符的绑定的属性内容为number类型而没有使用的为string类型
    - 说明：
          1. 功能描述：
            - 该实例展示了 Vue 中 `v-model` 指令的 `.number` 修饰符的使用。
            - 当用户在输入框中输入数字时，`.number` 修饰符会自动将输入的字符串转换为数字类型。
          2. 代码逻辑：
            - 数据绑定：
            - `v-model.lazy` 将输入框的值与 `msg` 和 `msg1` 数据进行双向绑定。
            - `v-model.lazy.number` 将输入框的值与 `msg1` 数据进行双向绑定，并将其转换为数字类型。
            - 方法：
            - 当用户输入内容并按下回车键时，`msg` 和 `msg1` 的值会自动更新到页面。
          3. 关键点:
            - `.lazy` 修饰符：实现了延迟更新的功能。
            - `.number` 修饰符：实现了将输入内容转换为数字类型的功能。
            - 响应式更新：当输入框内容变化时，`msg` 和 `msg1` 会自动更新到页面。
- 从实例41中就可以看出 `.number` 修饰符的内容为将 `v-model` 指令绑定的内容属性改为数值型
### .trim修饰符
- 如果要自动过滤用户输入内容首尾的空白字符，那么可以使用 `v-model` 指令的 `.trim` 修饰符
- 实例42:
    - ```html
            <body>
                <div id = 'app'></div>
                <template id = 'my-app'>
                    <input type = 'text' v-model.trim = 'msg'>
                    <h2>{{msg}}
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const app = Vue.createApp({
                        template: '#my-app',
                        data() {
                            return {
                                msg: null,
                            }
                        }
                    }).mount('#app');
                </script>
            </body>
        ```
      - 代码运行后输入文本框内容前后加上空格，回车后可以看到标题的内容没有空格
      - 说明：
          1. 功能描述：
              - 该实例展示了 Vue 中 `v-model` 指令的 `.trim` 修饰符的使用。
              - 当用户在输入框中输入内容时，`.trim` 修饰符会自动去除首尾的空格。
          2. 代码逻辑：
              - 数据绑定：
                - `v-model.trim` 将输入框的值与 `msg` 数据进行双向绑定，并去除首尾空格。
              - 方法：
                - 当用户输入内容并按下回车键时，`msg` 的值会自动更新到页面，并去除首尾空格。
          3. 关键点:
              - `.trim` 修饰符：实现了去除输入内容首尾空格的功能。
              - 响应式更新：当输入框内容变化时，`msg` 会自动更新到页面，并去除首尾空格。
## Vue3.js组件化开发
### 认识组件化
- 组件化是指将一个复杂的应用拆分成多个小的、独立的、可复用的组件，每个组件负责处理特定的功能或视图。组件化开发可以提高代码的可维护性、可读性和复用性。
- Vue3.js是一个基于组件化开发的前端框架，它允许开发者将应用拆分成多个组件，每个组件可以独立开发、测试和维护。Vue3.js的组件化开发有以下几个特点
  1. 组件是Vue3.js的核心概念，所有的Vue3.js应用都是由组件组成的。
  2. 组件可以嵌套，父组件可以包含子组件，子组件也可以包含其他子组件，从而形成一个树形结构。
  3. 组件可以复用，可以在不同的地方使用同一个组件，从而提高代码的复用性。
  4. 组件可以接收参数（props），父组件可以向子组件传递数据，子组件也可以向父组件发送事件，从而实现数据的双向绑定。
  5. 组件可以有自己的状态（data），每个组件都有自己的数据和方法，从而实现组件的独立性。
### Vue3的组件化
- Vue3.js的组件化开发是基于Vue3.js的核心概念和特性实现的，Vue3.js的组件化开发有以下几个特点
  1. Vue3.js的组件是一个包含模板、脚本和样式的独立单元，可以在不同的地方使用同一个组件，从而提高代码的复用性。
  2. Vue3.js的组件可以嵌套，父组件可以包含子组件，子组件也可以包含其他子组件，从而形成一个树形结构。
  3. Vue3.js的组件可以接收参数（props），父组件可以向子组件传递数据，子组件也可以向父组件发送事件，从而实现数据的双向绑定。
  4. Vue3.js的组件可以有自己的状态（data），每个组件都有自己的数据和方法，从而实现组件的独立性。
  5. Vue3.js的组件可以使用生命周期钩子函数，在组件的不同阶段执行特定的操作，如创建、更新和销毁等。
### Vue3注册组件
#### 根组件
- Vue3.js的根组件是Vue3.js应用的入口组件，所有的Vue3.js应用都必须有一个根组件。根组件可以包含其他子组件，从而形成一个树形结构。根组件的注册方法如下
  1. 使用 `createApp` 方法创建Vue3.js应用实例
  2. 在Vue3.js应用实例中使用 `app.mount` 方法挂载应用实例
- 实例43:
    - ```html
        <body>
            <style>
                .comps-a,.comps-b{
                    border: 1px solid #999;
                    margin: 3px;
                }
            </style>
            <div id = 'app'></div>
            <template id = 'my-app'>
                <div class="comps-b">
                    <input type="text" v-model = 'msg'>
                    <h4>{{msg}}</h4>
                </div>
                <div class="comps-a">
                    <h4>{{title}}</h4>
                    <p>{{desc}}</p>
                    <button @click = 'btnClick'>按钮</button>
                </div>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const app = Vue.createApp({
                    template:'#my-app',
                    data(){
                        return{
                            msg : 'hello world',
                            title:'标题',
                            desc:'显示区域'
                        }
                    },
                    methods:{
                        btnClick(){
                            console.log('按钮被点击了');
                            
                        }
                    }
                }).mount('#app')
            </script>
            
        </body>
        ```
      - 代码运行后可以看到文本框和标题的内容为hello world 点击按钮后控制台输出按钮被点击了
      - 说明：
        1. 功能描述：
            - 该实例展示了 Vue3 中全局注册组件的基本用法。
            - 全局注册的组件可以在任何地方使用，并且可以通过 `app.mount` 方法挂载应用实例。
        2. 代码逻辑：
            - 数据绑定：
            - `msg` 是一个响应式数据，绑定到文本框和标题上。
            - `title` 和 `desc` 是静态数据，显示在页面上。
            - 方法：
            - `btnClick` 方法用于处理按钮点击事件，并在控制台输出信息。
        3. 关键点:
            - 响应式数据：使用 Vue3 的响应式数据绑定功能。
            - 事件处理：使用 Vue3 的事件处理功能。
            - 挂载应用实例：使用 `app.mount` 方法挂载应用实例。
#### 全局注册组件
- Vue3.js允许全局注册组件，全局注册的组件可以在任何地方使用。全局注册组件的方法如下
  1.  使用 `createApp` 方法创建Vue3.js应用实例
  2. 使用 `app.component` 方法注册组件
  3. 在Vue3.js应用实例中使用 `app.mount` 方法挂载应用实例
- 实例44:
    - ```html
        <body>
            <div id = 'app'></div>
            <template id = 'my-app'>
                <div class = 'comps-b'>
                    <input type = 'text' v-model='msg'>
                    <h4>{{msg}}</h4>
                </div>
                <compontent-a></compontent-a>
                <div class = 'comp-a'></div>
            </template>
            <template id = 'compontent-a'>
                <div class = 'comps-a'>
                    <h4>{{title}}</h4>
                    <p>{{desc}}</p>
                    <button @click = 'btnClick'>按钮</button>
                </div>
            </template>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <script>
                const App = {
                    template:'#my-app',
                    data(){
                        return{
                            msg:'hello world'
                        }
                    }
                };
                const app = Vue.createApp(App);
                app.component('compontent-a',{
                    template:'#compontent-a',
                    data(){
                        return{
                            title:'标题',
                            desc:'显示区域'
                            }
                    },
                    methods:{
                        btnClick(){
                            console.log('按钮被点击了')
                        }
                    }
                
                });
                app.mount('#app')
            </script>
        </body>
        ```
      - 代码运行后可以看到文本框和标题的内容为hello world 点击按钮后控制台输出按钮被点击了
      - 说明：
          1. 功能描述：
              - 该实例展示了 Vue3 中全局注册组件的基本用法。
              - 全局注册的组件可以在任何地方使用，并且可以通过 `app.mount` 方法挂载应用实例。
          2. 代码逻辑：
              - 数据绑定：
                  - `msg` 是一个响应式数据，绑定到文本框和标题上。
                  - `title` 和 `desc` 是静态数据，显示在页面上。
              - 方法：
                  - `btnClick` 方法用于处理按钮点击事件，并在控制台输出信息。
          3. 关键点:
              - 响应式数据：使用 Vue3 的响应式数据绑定功能。
              - 事件处理：使用 Vue3 的事件处理功能。
              - 挂载应用实例：使用 `app.mount` 方法挂载应用实例。
              - 全局注册组件：使用 `app.component` 方法全局注册组件。
        
- 组件命名规范
  1. 短横线隔开命名法
    - 组件名称使用短横线隔开，如 `my-component`。
  2. 大驼峰命名法
    - 组件名称使用大驼峰命名法，如 `MyComponent`。
            

#### 局部组件
- 局部组件是指在某个组件内部注册的组件，局部组件只能在该组件内部使用。局部组件的注册方法如下
  1. 在组件的 `components` 选项中注册局部组件
  2. 在模板中使用局部组件
- 实例45:
    - ```html
            <body>
                <div id = 'app'></div>
                <template id = 'my-app'>
                    <h2>局部组件</h2>
                    <comps-a></comps-a>
                    <comps-b></comps-b>
                </template>
                <template id = 'comps-a'>
                    <div class="comps-a">
                        <h4>{{title}}</h4>
                        <p>{{desc}}</p>
                        <button @click = 'btnClick'>按钮</button>
                    </div>
                </template>
                <template id = 'comps-b'>
                    <div class="comps-b">
                        <input type="text" v-model = 'msg'>
                        <h4>{{msg}}</h4>
                    </div>
                </template>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script>
                    const App = {
                        template:'#my-app',
                        data(){
                            return{
                                msg:'hello world'
                            }
                        },
                        components:{
                            'comps-a':{
                                template:'#comps-a',
                                data(){
                                    return{
                                        title:'标题',
                                        desc:'显示区域'
                                    }
                                },
                                methods:{
                                    btnClick(){
                                        console.log('按钮被点击了')
                                    }
                                }
                            },
                            'comps-b':{
                                template:'#comps-b',
                                data(){
                                    return{
                                        msg:'hello world'
                                    }
                                }
                            }
                        }
                    };
                    const app = Vue.createApp(App).mount('#app');
                </script>
            </body> 
        ```
      - 代码运行后可以看到文本框和标题的内容为hello world 点击按钮后控制台输出按钮被点击了
      - 说明：
          1. 功能描述：
              - 该实例展示了 Vue3 中局部组件的基本用法。
              - 局部组件只能在该组件内部使用，并且可以通过 `components` 选项注册局部组件。
          2. 代码逻辑：
              - 数据绑定：
                  - `msg` 是一个响应式数据，绑定到文本框和标题上。
                  - `title` 和 `desc` 是静态数据，显示在页面上。
              - 方法：
                  - `btnClick` 方法用于处理按钮点击事件，并在控制台输出信息。
          3. 关键点:
              - 响应式数据：使用 Vue3 的响应式数据绑定功能。
              - 事件处理：使用 Vue3 的事件处理功能。
              - 挂载应用实例：使用 `app.mount` 方法挂载应用实例。
              - 局部注册组件：在 `components` 选项中注册局部组件。
#### Vue 开发模式
- 随着项目越来越复杂，我们需要采用组件化的方式进行开发，这意味着每个组件都会有自己的模板、样式和逻辑代码。为了更好地组织这些代码，Vue 提供了单文件组件（Single File Component）格式的支持。
- Vue3提供了两种开发模式
  1. **单文件组件**：将模板、脚本和样式放在一个文件中，通常以 `.vue` 为后缀名。单文件组件的结构如下
     ```vue
     <template>
         <!-- 模板部分 -->
     </template>
     <script>
         // 脚本部分
     </script>
     <style scoped>
         /* 样式部分 */
     </style>
     ```
  2. **分离式组件**：将模板、脚本和样式分开存放，通常使用 `.html`、`.js` 和 `.css` 文件。分离式组件的结构如下
     ```
     ├─index.html
     │
     ├─index.js
     │
     └── style.css
     ```
#### Vue3支持的SFC
- 使用 `.vue` 文件编写Vue.js组件的常见方式有一下两种
  1. 使用 `Vue CLI` 或 `create-vue` 创建的Vue项目 
  2. 使用 `webpack` `Rolluo` 或 `vite` 等构建工具进行打包和编译
## 前端工程化
### 前端工程化概述
- 前端工程化是指将前端开发过程中的各个环节进行规范化、标准化和自动化的过程。前端工程化的目的是提高前端开发的效率、质量和可维护性。前端工程化的主要内容包括
  1. 代码规范：制定统一的代码规范和风格，确保代码的一致性和可读性。
  2. 模块化：将代码拆分成多个模块，每个模块负责特定的功能，提高代码的复用性和可维护性。
  3. 自动化构建：使用构建工具（如 `webpack`、`gulp`、`grunt` 等）自动化处理代码的编译、打包、压缩等操作，提高开发效率。
  4. 测试：编写单元测试、集成测试和端到端测试，确保代码的正确性和稳定性。
  5. 部署：使用自动化部署工具，将代码部署到生产环境，提高部署效率和可靠性。
  6. 版本控制：使用版本控制工具（如 `git`）管理代码的版本，确保代码的可追溯性和协作性。
### 前端工程化的工具
- 前端工程化的工具主要包括以下几类
  1. **构建工具**：用于自动化处理代码的编译、打包、压缩等操作，如 `webpack`、`gulp`、`grunt` 等。
  2. **测试工具**：用于编写单元测试、集成测试和端到端测试，如 `jest`、`mocha`、`cypress` 等。
  3. **版本控制工具**：用于管理代码的版本，如 `git`、`svn` 等。
  4. **自动化部署工具**：用于将代码自动部署到生产环境，如 `jenkins`、`travis-ci` 等。
  5. **代码规范工具**：用于检查代码的规范性和风格，如 `eslint`、`prettier` 等。
### 认识 webpack
- `webpack` 是一个现代 JavaScript 应用程序的静态模块打包器。它会将应用程序中的所有模块（JavaScript、CSS、图片等）打包成一个或多个 bundle 文件，以便在浏览器中使用。`webpack` 的主要特点包括
  1. **模块化**：支持 CommonJS、AMD、ES6 等模块化规范，可以将代码拆分成多个模块进行管理。
  2. **插件机制**：提供丰富的插件机制，可以通过插件扩展 `webpack` 的功能，如代码压缩、文件复制等。
  3. **热更新**：支持热更新（Hot Module Replacement），可以在不刷新页面的情况下更新代码，提高开发效率。
  4. **代码分割**：支持代码分割（Code Splitting），可以将代码拆分成多个 bundle 文件，按需加载，提高性能。
  5. **Tree Shaking**：支持 Tree Shaking，可以去除未使用的代码，减小 bundle 文件的体积。
  6. **支持多种资源**：支持处理 JavaScript、CSS、图片、字体等多种资源，可以将它们打包成一个或多个 bundle 文件。
### Vue CLI脚手架
- `Vue CLI` 是一个基于 `webpack` 的脚手架工具，可以快速搭建 Vue.js 项目。它提供了一系列的命令行工具和配置选项，可以帮助开发者快速创建、构建和部署 Vue.js 应用程序。`Vue CLI` 的主要特点包括
  1. **快速创建项目**：使用 `vue create` 命令可以快速创建一个新的 Vue.js 项目，自动配置 `webpack`、`babel`、`eslint` 等工具。
  2. **插件系统**：支持插件系统，可以通过插件扩展项目的功能，如添加路由、状态管理、测试等。
  3. **热更新**：支持热更新（Hot Module Replacement），可以在不刷新页面的情况下更新代码，提高开发效率。
  4. **构建优化**：提供了一系列的构建优化选项，如代码分割、Tree Shaking、压缩等，提高应用程序的性能。
  5. **多种预设**：提供了多种预设选项，可以根据项目需求选择不同的预设，如 `webpack`、`vuex`、`vue-router` 等。
  6. **支持多种语言**：支持多种语言，如 JavaScript、TypeScript、Sass、Less 等，可以根据项目需求选择不同的语言。
#### 安装node.js
- `node.js` 是一个基于 Chrome V8 引擎的 JavaScript 运行时，可以在服务器端运行 JavaScript 代码。`node.js` 提供了丰富的 API 和模块，可以用于构建高性能的网络应用程序。安装 `node.js` 的步骤如下
  1. 下载 `node.js` 安装包：访问 [node.js 官网](https://nodejs.org/) 下载适合你操作系统的安装包。
  2. 安装 `node.js`：双击下载的安装包，按照提示完成安装。
  3. 验证安装：打开命令行终端，输入以下命令验证是否安装成功
     ```bash
     node -v
     npm -v
     ```
  - 如果输出版本号，则表示安装成功。
#### 安装Vue CLI
- `Vue CLI` 是一个基于 `webpack` 的脚手架工具，可以快速搭建 Vue.js 项目。安装 `Vue CLI` 的步骤如下
  1. 打开命令行终端，输入以下命令安装 `Vue CLI`
     ```bash
     npm install -g @vue/cli
     ```
  2. 验证安装：输入以下命令验证是否安装成功
     ```bash
     vue --version
     ```
  - 如果输出版本号，则表示安装成功。
#### 创建Vue项目
- 使用 `Vue CLI` 创建 Vue.js 项目的步骤如下
  1. 打开命令行终端，输入以下命令创建新的 Vue.js 项目
     ```bash
     vue create my-project
     ```
  2. 在创建过程中，选择默认配置或手动配置，根据项目需求选择不同的选项。
     - 默认配置包括 Babel、ESLint 等。
     - 手动所需功能。
       - 以下是可供选中的功能
         - `Babel`：用于将 ES6+ 代码转换为向后兼容的 JavaScript 代码。
         - `TypeScript`：是否使用TypeScript。
         - `Progressive Web App (PWA)`：是否使用 PWA,PWA 是一种可以离线访问的 Web 应用程序。
         - `Router`：是否使用 Vue Router，Vue Router 是 Vue.js 的路由管理器。
         - `Vuex`：是否使用 Vuex，Vuex 是 Vue.js 的状态管理模式。
         - `CSS Pre-processors`：是否使用 CSS 预处理器，如 Sass、Less 等。
         - `Linter / Formatter`：是否使用代码检查和格式化工具，如 ESLint、Prettier 等。
         - `Unit Testing`：是否使用单元测试工具，如 Jest、Mocha 等。
         - `E2E Testing`：是否使用端到端测试工具，如 Cypress、Nightwatch 等。
  3. 进入项目目录，输入以下命令启动开发服务器
     ```bash
     cd my-project
     npm run serve
     ```
  - 如果浏览器自动打开了 `http://localhost:8080`，则表示项目创建成功。
- 使用 `npm` 创建项目的命令如下
  ```bash
  npm init vue@latest my-project
  ```
  - 该命令会创建一个新的 Vue.js 项目，并自动安装所需的依赖项。
  - 在创建过程中，选择默认配置或手动配置，根据项目需求选择不同的选项。
    - 创建完成后，进入项目目录，输入以下命令启动开发服务器
        ```bash
        cd my-project
        npm install
        npm run dev
        ```
    - 如果浏览器自动打开了 `http://localhost:5173`，则表示项目创建成功。
#### Vue3项目目录结构
- 使用 `Vue CLI` 创建的 Vue.js 项目目录结构如下
  ```
  my-project
    ├─node_modules
    │
    ├─public
    │   ├─favicon.ico
    │   ├─index.html
    │   └─manifest.json
    │
    ├─src
    │   ├─assets
    │   │   └─logo.png
    │   ├─components
    │   │   └─HelloWorld.vue
    │   ├─App.vue
    │   ├─main.js
    │   └─router
    │       └─index.js
    │
    ├─.browserlistrc
    ├─.gitignore
    ├─.jsconfig.json
    ├─package-lock.json
    ├─package.json
    ├─README.md
    └─vite.config.js
  ```
- 目录结构说明
  - `node_modules`：存放项目依赖的第三方模块。
  - `public`：存放静态资源，如 `index.html`、`favicon.ico` 等。
  - `src`：存放项目的源代码，包括组件、样式、路由等。
    - `assets`：存放静态资源，如图片、字体等。
    - `components`：存放 Vue 组件。
    - `App.vue`：根组件，整个应用的入口组件。
    - `main.js`：应用的入口文件，用于创建 Vue 实例和挂载根组件。
    - `router`：存放路由配置文件。
  - `.browserlistrc`：配置浏览器支持列表的文件。
  - `.gitignore`：Git 忽略文件列表。
  - `.jsconfig.json`：JavaScript 配置文件。
  - `package-lock.json`：锁定依赖版本的文件。
  - `package.json`：项目的配置文件，包含项目的基本信息和依赖列表。
  - `README.md`：项目的说明文件。
  - `vite.config.js`：Vite 的配置文件。
#### 项目运行和打包
- 对于运行和打包， `Vue CLI` 脚手架已经在 package.json 文件中提供了相应的命令，代码如下
    - ```json
            {
            "scripts": {
                "serve": "vue-cli-service serve",  # 1.开发环境，启动项目脚本
                "build": "vue-cli-service build",  # 2.生产环境，打包项目脚本
                "lint": "vue-cli-service lint"     # 3.代码检查脚本
                }
            }
        ```
      - 说明：
          1. `serve` :运行项目的脚本。当终端执行 `npm run serve` 时，便会执行 `vue-cli-service serve` 启动一个本地服务在浏览器中运行代码
          2. `build` :打包项目的脚本。当终端执行 `npm run build` 时，便会执行 `vue-cli-service build` 将项目打包成生产环境的代码
- 运行Vue3项目
  - 在项目目录下打开终端，输入以下命令启动开发服务器
    ```bash
    npm run serve
    ```
  - 如果浏览器自动打开了 `http://localhost:8080`，则表示项目运行成功。
  - 如果没有自动打开，可以手动在浏览器中输入 `http://localhost:8080` 访问项目。
- 打包Vue3项目
  - 在项目目录下打开终端，输入以下命令打包项目
    ```bash
    npm run build
    ```
  - 打包完成后，会在项目目录下生成一个 `dist` 文件夹，里面包含了打包后的文件，可以将其部署到生产环境中。
  - `dist` 文件夹的结构如下
    ```
    dist
      ├─css
      │   └─app.12345678.css
      ├─js
      │   ├─app.12345678.js
      │   └─chunk-vendors.12345678.js
      ├─index.html
      └─favicon.ico
    ```
- 目录结构说明
  - `css`：存放打包后的 CSS 文件。
  - `js`：存放打包后的 JavaScript 文件。
  - `index.html`：打包后的 HTML 文件，是应用的入口文件。
  - `favicon.ico`：网站图标文件。
- 说明：
  - `dist` 文件夹是打包后的文件，可以将其部署到生产环境中。
  - 打包后的文件可以直接在浏览器中打开，也可以部署到服务器上进行访问。

#### vue.config.js配置文件
- `vue.config.js` 是 Vue CLI 项目的配置文件，可以用于配置项目的各种选项，如开发服务器、打包选项、插件等。`vue.config.js` 的基本结构如下
  ```javascript
  module.exports = {
      // 配置选项
  }
  ```
- `vue.config.js` 的常用配置
  1. `outputDir` :  `outputDir` 用于指定打包后的文件输出目录，默认值为 `dist`。可以根据项目需求修改输出目录，如下所示
        ```javascript
        module.exports = {
            outputDir: 'dist' // 指定打包后的文件输出目录
        }
        ```
    - 注意 对于使用 `Vue CLI 5.x` 创建项目，vue.config.js 同样支持使用 `defineConfig` 函数来定义配置选项，如下所示
      ```javascript
            const { defineConfig } = require('@vue/cli-service')
            module.exports = defineConfig({
                // transpileDependencies: true,  //如果选中ture,那么项目引用node_modules中的包也会用babel编译
                outputDir: 'dist' // 指定打包后的文件输出目录
            })
        ```
  2. `publicPath` : `publicPath` 用于指定应用的公共路径，默认值为 `/`。可以根据项目需求修改公共路径，如下所示
        ```javascript
            module.exports = {
                publicPath: '/' // 指定应用的公共路径
            }
        ```
        - 默认情况下，`publicPath` 为 `/`，表示应用的根路径。
        - 如果应用部署在子路径下，可以修改 `publicPath` 为子路径，如 `/my-app/`。
  3. `devServer` : `devServer` 用于配置开发服务器的选项，如端口号、代理等，如下所示
     ```javascript
     module.exports = {
         devServer: {
             port: 8080, // 指定开发服务器的端口号
             proxy: { // 配置代理
                 '/api': {
                     target: 'http://localhost:3000', // 代理目标地址
                     changeOrigin: true, // 是否改变请求源
                     pathRewrite: { // 重写路径
                         '^/api': ''
                     }
                 }
             }
         }
     }
     ```
  4. `lintOnSave` : `lintOnSave` 用于配置是否在保存时进行代码检查，默认值为 `true`。可以根据项目需求修改，如下所示
        ```javascript
            module.exports = {
                lintOnSave: false // 是否在保存时进行代码检查
            }
            ```
  5. `configureWebpack` : `configureWebpack` 用于配置 webpack 的选项，如下所示
     ```javascript
     module.exports = {
         configureWebpack: {
             // webpack 配置选项
         }
     }
     ```
  6. `assetDir` : `assetDir` 用于指定静态资源的目录，默认值为 `assets`。可以根据项目需求修改，如下所示
     ```javascript
     module.exports = {
         assetsDir: 'static' // 指定静态资源的目录
     }
     ```
     - `assesDir: static` 表示将静态资源放在 `static` 目录下。
     - `assetsDir` 主要用于组织静态资源文件，如图片、字体等，可以根据项目需求修改。
  7. `alias` : `alias` 用于配置路径别名，可以简化模块导入的路径，如下所示
     ```javascript
     module.exports = {
         configureWebpack: {
             resolve: {
                 alias: {
                     '@': path.resolve(__dirname, 'src'), // 将 @ 映射到 src 目录
                     'assets': path.resolve(__dirname, 'src/assets') // 将 assets 映射到 src/assets 目录
                 }
             }
         }
     }
     ```
     - `alias` 主要用于简化模块导入的路径，如 `@/components/MyComponent.vue` 可以简化为 `@/MyComponent.vue`。
     - `alias` 还可以用于解决路径冲突的问题，如多个模块使用相同的名称，可以通过别名来区分它们。
     - 注意 `alias` 时 `webpack` 的配置项，使用时需要引入 `path` 模块，如下所示
       ```javascript
       const path = require('path')
       ```
       - `path` 模块是 Node.js 内置模块，用于处理文件和目录的路径。
         - `path.resolve(__dirname, 'src')` 表示将当前目录（`__dirname`）和 `src` 目录拼接成一个绝对路径。
### 认识Vite
- `Vite` 是一个新一代的前端构建工具，具有快速、轻量、灵活等特点。它使用原生 ES 模块（ESM）来实现快速的热更新和构建速度。`Vite` 的主要特点包括
  1. **快速启动**：使用原生 ES 模块（ESM）来实现快速的热更新和构建速度。
  2. **按需加载**：支持按需加载（Code Splitting），可以将代码拆分成多个 bundle 文件，按需加载，提高性能。
  3. **插件机制**：提供丰富的插件机制，可以通过插件扩展 `Vite` 的功能，如代码压缩、文件复制等。
  4. **支持多种资源**：支持处理 JavaScript、CSS、图片、字体等多种资源，可以将它们打包成一个或多个 bundle 文件。
  5. **支持多种语言**：支持多种语言，如 JavaScript、TypeScript、Sass、Less 等，可以根据项目需求选择不同的语言。
- 在Vue3中，`Vite` 是官方推荐的构建工具，使用 `Vite` 创建 Vue.js 项目的步骤如下
  1. 打开命令行终端，输入以下命令安装 `Vite`
     ```bash
     npm install -g create-vite
     ```
  2. 创建新的 Vue.js 项目
     ```bash
     create-vite my-project --template vue
     ```
  3. 进入项目目录，输入以下命令安装依赖项
     ```bash
     cd my-project
     npm install
     ```
  4. 启动开发服务器
     ```bash
     npm run dev
     ```
  - 如果浏览器自动打开了 `http://localhost:5173`，则表示项目创建成功。 
### webpack和Vite的区别
- `webpack` 和 `Vite` 是两种不同的前端构建工具，它们在设计理念、构建方式和使用体验上有一些区别。以下是它们的主要区别
  1. **设计理念**：
     - `webpack` 是一个模块打包器，主要用于将应用程序中的所有模块打包成一个或多个 bundle 文件。
     - `Vite` 是一个新一代的前端构建工具，主要用于快速启动和热更新。
  2. **构建方式**：
     - `webpack` 在开发模式下会将所有模块打包成一个 bundle 文件，然后在浏览器中加载。
     - `Vite` 在开发模式下使用原生 ES 模块（ESM）来实现快速的热更新和构建速度。
  3. **热更新**：
     - `webpack` 的热更新需要重新打包整个应用程序，速度较慢。
     - `Vite` 的热更新使用原生 ES 模块（ESM），可以实现快速的热更新，速度较快。
  4. **配置复杂度**：
     - `webpack` 的配置相对较复杂，需要编写大量的配置文件。
     - `Vite` 的配置相对简单，默认配置已经足够满足大部分需求。
  5. **生态系统**：
     - `webpack` 有着丰富的插件生态系统，可以通过插件扩展功能。
     - `Vite` 的插件生态系统相对较新，但也在快速发展中。
  6. **支持的语言**：
     - `webpack` 支持多种语言，如 JavaScript、TypeScript、Sass、Less 等。
     - `Vite` 也支持多种语言，但主要针对现代 JavaScript 和 TypeScript。
## Vue3组件化基础
1. 新建项目
    - 使用 `Vue CLI` 创建 Vue.js 项目，命令如下
      ```bash
      vue create my-project
      ```
    - 选择默认配置或手动配置，根据项目需求选择不同的选项。
2. 进入项目目录
    - 使用 `cd` 命令进入项目目录，命令如下
      ```bash
      cd my-project
      ```
3. 删除项目中暂时没有用的文件
    - 删除 `src` 目录下的 `assets` 和 `components` 目录，然后修改 `App.vue` 文件，代码如下
      - ```html
        <template>
            <div id="app">
                hello world
            </div>
        </template>
        <script>
            export default {
                name: 'App',
                components:{}
            }
        </script>
        <style
        #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            margin-top: 60px;
            }
        </style>
      ```
4. 运行项目
    - 使用 `npm run serve` 命令启动开发服务器，命令如下
      ```bash
      npm run serve
      ```
    - 如果浏览器自动打开了 `http://localhost:8080`，则表示项目运行成功。
    - 如果没有自动打开，可以手动在浏览器中输入 `http://localhost:8080` 访问项目。
### 组件的嵌套
- 组件的嵌套是指在一个组件中使用另一个组件。组件的嵌套可以实现更复杂的 UI 结构和功能。组件的嵌套可以分为以下两种方式
  1. **全局注册组件**：在 `main.js` 文件中全局注册组件，可以在任何地方使用。
  2. **局部注册组件**：在某个组件内部注册组件，只能在该组件内部使用。
- 实例46(App.vue)：
    - ```html
           <template>
                <div class='header'>
                    <h4>头部</h4>
                    <h4>标题</h4>
                </div>
                <div class='main'>
                    <h4>轮播图内容</h4>
                    <ul>
                        <li>商品信息1</li>
                        <li>商品信息2</li>
                        <li>商品信息3</li>
                        <li>商品信息4</li>
                        <li>商品信息5</li>
                    </ul>
                </div>
                <div class='footer'>
                    <h4>底部</h4>
                </div>
            </template>
            <script>
                export default {
                    name: 'App' // 组件名称
                }

            </script>
            <style>
                .header, .main, .footer{
                    border: 1px solid #999;
                    margin-bottom: 4px
                }
            </style>
        ```
      - 说明：
          1. 功能描述：
              - 该实例展示了 Vue3 中组件的嵌套用法。
              - 在 `App.vue` 文件中定义了一个根组件，包含头部、主体和底部三个部分。
          2. 代码逻辑：
              - 使用 `<template>` 标签定义组件的模板结构。
              - 使用 `<script>` 标签定义组件的逻辑代码。
              - 使用 `<style>` 标签定义组件的样式。
          3. 关键点:
              - 组件名称：使用 `name` 属性定义组件的名称。
              - 样式：使用 CSS 定义组件的样式。
      - 效果：
        - ![实例46效果图](./图片/屏幕截图%202025-04-28%20193518.png)
    - 在 `main.js` 中导入根组件,然后调用 `createApp` 方法创建 Vue 实例，最后调用 `mount` 方法挂载根组件到 DOM 上，代码如下
        ```javascript
            import { createApp } from 'vue'
            import App from './App.vue'
            import './index.css'  // 引入全局样式文件
            createApp(App).mount('#app')
        ```
    - 实例26的代码将所有的逻辑都放到了根组件中，虽然可以实现功能，但是并不是最优的写法，具体原因如下：
      1. 将一个应用的所有逻辑都放在一个组件中，会让这个组件变得非常臃肿和复杂，变得难以维护
      2. 组件化开发的思想是将一个应用拆分成多个小的组件，每个组件负责一个特定的功能，这样可以提高代码的复用性和可维护性 
#### 组件的拆分和嵌套
- 为了让应用开发的更加方便，代码复用率更高，并利于后期维护，我们需要将一个组件拆分成多个小的组件，每个组件负责一个特定的功能。组件的拆分和嵌套可以实现更复杂的 UI 结构和功能。组件的拆分和嵌套可以分为以下两种方式
  1. **全局注册组件**：在 `main.js` 文件中全局注册组件，可以在任何地方使用。
  2. **局部注册组件**：在某个组件内部注册组件，只能在该组件内部使用。
- 组件拆分图
  - ```mermaid
     flowchart TD
        A[App] -->B[Header]
        A -->C[Main]
        A -->D[Footer]
        C -->E[MainBanner]
        C -->F[MMainPorductList]
<<<<<<< HEAD
=======
        ```
>>>>>>> 3a07cd40b9fc984d827dacc90b15a0a8e9e4a80c
- 实例47：
  - 目录树
    - ```
        └─src
        │   ├─ 实例47组件
        │   │   ├─App.vue
        │   │   │
        │   │   ├─Footer.vue
        │   │   │
        │   │   ├─Header.vue
        │   │   │
        │   │   ├─Main.vue
        │   │   │
        │   │   ├─MainBanner.vue
        │   │   │
        │   │   └─MainPorductList.vue
        │   ├─App.vue
        │   │  
        │   └─main.js
        ```
    - Header.vue代码
        - ```html
            <template>
                <div class='header'>
                    <h4>头部</h4>
                    <h4>标题</h4>
                </div>
            </template>
            <script>
                export default {}
            </script>
            ```
    - Main.vue代码
      - ```html
            <template>
                <div class = 'main'>
                    <main-banner></main-banner>
                    <main-product></main-product>
                </div>
            </template>
            <script>
                // 1. 引入子组件
                import MainBanner from './MainBanner.vue'
                import MainProduct from './MainPorductList.vue'
                // 2. 注册子组件
                export default {
                    components: {
                        MainBanner,
                        MainProduct
                    }
                }
            </script>
        ``` 
    - MainBanner.vue代码
      - ```html
            <template>
                <div class='main-banner'>
                    <h4>轮播图内容</h4>
                </div>
            </template>
            <script>
                export default {}
            </script>
        ```
    - MainPorductList.vue代码
      - ```html
            <template>
                <div class='main-product'>
                    <ul>
                        <li>商品信息1</li>
                        <li>商品信息2</li>
                        <li>商品信息3</li>
                        <li>商品信息4</li>
                        <li>商品信息5</li>
                    </ul>
                </div>
            </template>
            <script>
                export default {}
            </script>
        ```
    - Footer.vue代码
      - ```html
            <template>
                <div class='footer'>
                    <h4>底部</h4>
                </div>
            </template>
            <script>
                export default {}
            </script>
        ```
    - App.vue代码
      - ```html
            <template>
                <div id = 'app'>
                    <Header></Header>
                    <Main></Main>
                    <Footer></Footer>
                </div>
            </template>
            <script>
                import Header from './Header.vue'
                import Footer from './Footer.vue'
                import Main from './Main.vue'
                export default {
                    components: {
                        Header,
                        Footer,
                        Main
                    }
                }
            </script>
            <style>
                .header, .main, .footer{
                    border: 1px solid #999;
                    margin-bottom: 4px
                }
            </style>
        ```
    - main.js代码
        - ```javascript
                import { createApp } from 'vue'
                import App from './实例47/App.vue'
                // 引入全局样式文件
                import './index.css'  
                createApp(App).mount('#app')
            ```
    - 运行后的效果同实例46
#### 组件css的作用域