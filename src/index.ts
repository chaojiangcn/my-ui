import Button from './components/Button/Button.vue'

/**
 * 组件库入口文件
 * @description 导出所有组件
 */

// 组件列表
const components = {
  Button
}

/**
 * 安装函数
 * @param Vue Vue 实例
 */
const install = (Vue: any): void => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key as keyof typeof components])
  })
}

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}

// 单独导出组件
export { Button } 