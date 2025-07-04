# Vue2 UI 组件库

一个基于 Vue2 和 Vite 构建的现代化 UI 组件库。

## 特性

- 🚀 基于 Vue2.7 和 Vite 构建
- 💡 支持 TypeScript
- 🎨 现代化设计风格
- 📱 响应式设计
- 🔧 高度可配置

## 安装

```bash
npm install vue2-ui
```

## 使用

### 全局注册

```javascript
import Vue from 'vue'
import Vue2UI from 'vue2-ui'

Vue.use(Vue2UI)
```

### 按需引入

```javascript
import { Button } from 'vue2-ui'

export default {
  components: {
    Button
  }
}
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build:lib

# 类型检查
npm run type-check
```

## 组件

### Button 按钮

基础用法：

```vue
<template>
  <Button type="primary" @click="handleClick">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
</template>
```

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 按钮类型 | string | primary / success / warning / danger / default | default |
| size | 按钮尺寸 | string | large / medium / small | medium |
| disabled | 是否禁用 | boolean | — | false |

#### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件 | event |

## 许可证

MIT 