<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * 按钮组件属性接口
 */
interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
}

/**
 * 按钮组件
 * @description 一个可配置的按钮组件
 */
export default Vue.extend({
  name: 'Button',
  props: {
    /**
     * 按钮类型
     */
    type: {
      type: String as () => ButtonProps['type'],
      default: 'default',
      validator: (value: string) => {
        return ['primary', 'success', 'warning', 'danger', 'default'].includes(value)
      }
    },
    /**
     * 按钮尺寸
     */
    size: {
      type: String as () => ButtonProps['size'],
      default: 'medium',
      validator: (value: string) => {
        return ['large', 'medium', 'small'].includes(value)
      }
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /**
     * 按钮样式类
     */
    buttonClasses(): string[] {
      return [
        'button',
        `button--${this.type}`,
        `button--${this.size}`
      ]
    }
  },
  methods: {
    /**
     * 处理点击事件
     */
    handleClick(event: MouseEvent): void {
      if (this.disabled) {
        event.preventDefault()
        return
      }
      this.$emit('click', event)
    }
  }
})
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #ffffff;
  color: #606266;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
}

.button:hover {
  border-color: #c0c4cc;
  color: #409eff;
}

.button:active {
  border-color: #409eff;
  color: #409eff;
}

/* 尺寸样式 */
.button--large {
  padding: 12px 20px;
  font-size: 16px;
}

.button--small {
  padding: 6px 12px;
  font-size: 12px;
}

/* 类型样式 */
.button--primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #ffffff;
}

.button--primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
  color: #ffffff;
}

.button--success {
  background-color: #67c23a;
  border-color: #67c23a;
  color: #ffffff;
}

.button--success:hover {
  background-color: #85ce61;
  border-color: #85ce61;
  color: #ffffff;
}

.button--warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #ffffff;
}

.button--warning:hover {
  background-color: #ebb563;
  border-color: #ebb563;
  color: #ffffff;
}

.button--danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #ffffff;
}

.button--danger:hover {
  background-color: #f78989;
  border-color: #f78989;
  color: #ffffff;
}

/* 禁用状态 */
.button:disabled,
.button[disabled] {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

.button:disabled:hover,
.button[disabled]:hover {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
}
</style> 