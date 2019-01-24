# 完成后的简单例子

基于类的写法加上静态类型检查，简直不能再嗨

```javascript
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";

@Component
export default class Shops extends Vue {
  @State shops: StoreState.shop[];
  @State searchVal: string;

  get shopList(): StoreState.shop[] {
    const shops = this.shops;
    const searchVal = this.searchVal;
    return shops.filter(
      (el: StoreState.shop) => el.shopName.indexOf(searchVal) > -1
    );
  }
}
</script>
```

## 注意

引入 Vue 文件的时候需要加上`.vue`后缀,否则编辑器识别不到

TypeScript 并不支持 Vue 文件，所以需要告诉 TypeScript`*.vue`文件交给 vue 编辑器来处理。解决方案就是在创建一个 vue-shims.d.ts 文件，建议放在 src 目录下再创建一个`typings`文件夹，把这个声明文件放进去，如：`src/typings/vue-shims.d.ts`，文件内容：

> `*.d.ts`类型文件不需要手动引入，TypeScript 会自动加载

```javascript
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

到这里 TypeScript 在 Vue 中配置就完成了，可以愉快的撸代码了~

### Vue-Class-Component

[vue-class-component](https://github.com/vuejs/vue-class-component)是官方维护的 TypeScript 装饰器，写法比较扁平化。Vue 对其做到完美兼容，如果你在声明组件时更喜欢基于类的 API，这个库一定不要错过

ps：用了这个装饰器之后写方法不需要额外加逗号，贼嗨~~~

```javascript
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  name: string = 'Simon Zhang';

  // computed
  get MyName(): string {
    return `My name is ${this.name}`;
  }

  // methods
  sayHello(): void {
    alert(`Hello ${this.name}`);
  }

  mounted() {
    this.sayHello();
  }
}
```

这个代码如果用原生 Vue 语法来写的话就是这样：

```javascript
export default {
  data() {
    return {
      name: 'Simon Zhang',
    };
  },

  mounted() {
    this.sayHello();
  },

  computed: {
    MyName() {
      return `My name is ${this.name}`;
    },
  },

  methods: {
    sayHello() {
      alert(`Hello ${this.name}`);
    },
  },
};
```

### Vuex-Class

[vuex-class](https://github.com/ktsn/vuex-class)是基于基于`vue-class-component`对 Vuex 提供的装饰器。它的作者同时也是`vue-class-component`的主要贡献者，质量还是有保证的。

```javascript
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';

@Component
export default class App extends Vue {
  name: string = 'Simon Zhang';
  @State login: boolean;
  @Action initAjax: () => void;
  @Getter load: boolean;

  get isLogin(): boolean {
    return this.login;
  }

  mounted() {
    this.initAjax();
  }
}
```

上面的代码就相当于：

```javascript
export default {
  data() {
    return {
      name: 'Simon Zhang',
    };
  },

  mounted() {
    this.initAjax();
  },

  computed: {
    login() {
      return this.$store.state.login;
    },
    load() {
      return this.$store.getters.load;
    },
  },

  methods: {
    initAjax() {
      this.$store.dispatch('initAjax');
    },
  },
};
```

### Vue-Property-Decorator

[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) 是在 vue-class-component 上增强了更多的结合 Vue 特性的装饰器，新增了这 7 个装饰器

- `@Emit`
- `@Inject`
- `@Model`
- `@Prop`
- `@Provide`
- `@Watch`
- `@Component` (从 vue-class-component 继承)

### 坑.引入部分第三方库的时候需要额外声明文件

比如说我想引入`vue-lazyload`,虽然已经在本地安装，但是 typescript 还是提示找不到模块。原因是 typescript 是从`node_modules/@types`目录下去找模块声明，有些库并没有提供 typescript 的声明文件，所以就需要自己去添加

解决办法：在`src/typings`目前下建一个`tools.d.ts`文件，声明这个模块即可

```javascript
declare module 'vue-awesome-swiper' {
  export const swiper: any
  export const swiperSlide: any
}

declare module 'vue-lazyload'
```

### 对 vuex 的支持不是很好

在 TypeScript 里面使用不了 mapState、mapGetters 等方法，只能一个变量一个变量的去引用，这个要麻烦不少。不过使用`vuex-class`库之后，写法上也还算简洁美观

```javascript
export default class modules extends Vue {
  @State login: boolean; // 对应this.$store.state.login
  @State headline: StoreState.headline[]; // 对应this.$store.state.headline

  private swiperOption: Object = {
    autoplay: true,
    loop: true,
    direction: "vertical"
  };

  logoClick(): void {
    alert("点我干嘛");
  }
}
```
