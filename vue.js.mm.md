# vue.js学习
## 笔记声明
- 该笔记为《Vue.js3+TypeScript完全学习指南》的个人学习笔记
- 该笔记为个人笔记各位可以用作学习详细资料免费学习但是该笔记只记录了对于我个人觉得有用的
- 如果要详细内容各位可以去看《Vue.js3+TypeScript完全学习指南》原书

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
#### 计算属性
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
#### 监听器 watch
- 在data属性中可以定义响应式数据，并在模板中使用。当响应式数据发生变化时，模板中对应的内容也会自动更新。但在某些情况下，需要监听某个响应式数据的变化，这时就需要使用监听器（watch）来实现
##### watch的基本使用
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

##### watch
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