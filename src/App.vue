<template>
  <div id="app">
    <h1>Vue2 UI 组件库</h1>
    <div class="demo-container">
      <h2>组件演示</h2>
      <Button type="primary" @click="handleClick">主要按钮</Button>
      <Button type="success" @click="handleClick">成功按钮</Button>
      <Button type="warning" @click="handleClick">警告按钮</Button>
      <Button type="danger" @click="handleClick">危险按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Button } from './components'

/**
 * 根组件
 * @description 应用的主组件，用于演示组件库
 */
export default Vue.extend({
  name: 'App',
  components: {
    Button
  },
  methods: {
    /**
     * 处理按钮点击事件
     */
    handleClick(): void {
      console.log('按钮被点击了！')
    }
  }
})
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.demo-container {
  margin-top: 20px;
}

.demo-container .button {
  margin: 0 10px;
}
</style> 