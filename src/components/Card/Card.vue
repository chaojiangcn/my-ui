<template>
  <div 
    class="card" 
    :class="cardClasses"
    :style="cardStyles"
    @click="handleClick"
  >
    <!-- 卡片头部 -->
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        <h3 v-if="title" class="card-title">{{ title }}</h3>
      </slot>
    </div>

    <!-- 卡片内容 -->
    <div class="card-body">
      <slot></slot>
    </div>

    <!-- 卡片底部 -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading" class="card-loading">
      <div class="loading-spinner"></div>
    </div>

    <!-- 阴影遮罩 -->
    <div v-if="disabled" class="card-overlay"></div>
  </div>
</template>

<script>
/**
 * Card 组件
 * @description 一个高可用的卡片组件，支持多种样式和状态
 */
export default {
  name: 'MyCard',
  props: {
    /**
     * 卡片标题
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 卡片尺寸
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    /**
     * 是否为主要样式
     */
    primary: {
      type: Boolean,
      default: false
    },
    /**
     * 背景颜色
     */
    backgroundColor: {
      type: String,
      default: ''
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 是否可点击
     */
    clickable: {
      type: Boolean,
      default: false
    },
    /**
     * 是否显示边框
     */
    bordered: {
      type: Boolean,
      default: true
    },
    /**
     * 是否显示阴影
     */
    shadow: {
      type: Boolean,
      default: true
    },
    /**
     * 是否圆角
     */
    rounded: {
      type: Boolean,
      default: true
    },
    /**
     * 加载状态
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * 卡片类型
     */
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
    }
  },
  computed: {
    /**
     * 卡片样式类
     */
    cardClasses() {
      return {
        [`card--${this.size}`]: true,
        [`card--${this.type}`]: this.type !== 'default',
        'card--primary': this.primary,
        'card--clickable': this.clickable && !this.disabled,
        'card--bordered': this.bordered,
        'card--shadow': this.shadow,
        'card--rounded': this.rounded,
        'card--disabled': this.disabled,
        'card--loading': this.loading
      }
    },
    /**
     * 卡片内联样式
     */
    cardStyles() {
      const styles = {}
      if (this.backgroundColor) {
        styles.backgroundColor = this.backgroundColor
      }
      return styles
    }
  },
  methods: {
    /**
     * 处理点击事件
     */
    handleClick(event) {
      if (this.disabled || this.loading) {
        return
      }
      this.$emit('onClick', event)
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  background: #ffffff;
  transition: all 0.3s ease;
  overflow: hidden;
}

/* 尺寸样式 */
.card--small {
  padding: 12px;
  font-size: 14px;
}

.card--medium {
  padding: 16px;
  font-size: 16px;
}

.card--large {
  padding: 24px;
  font-size: 18px;
}

/* 边框样式 */
.card--bordered {
  border: 1px solid #e8e8e8;
}

/* 圆角样式 */
.card--rounded {
  border-radius: 8px;
}

/* 阴影样式 */
.card--shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card--shadow:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* 可点击样式 */
.card--clickable {
  cursor: pointer;
}

.card--clickable:hover {
  transform: translateY(-2px);
}

/* 禁用样式 */
.card--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 加载样式 */
.card--loading {
  pointer-events: none;
}

.card-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 遮罩层 */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 5;
}

/* 卡片头部 */
.card-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.card-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

/* 卡片内容 */
.card-body {
  line-height: 1.6;
}

/* 卡片底部 */
.card-footer {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
}

/* 类型样式 */
.card--primary {
  border-color: #1890ff;
  background: #f6f9ff;
}

.card--success {
  border-color: #52c41a;
  background: #f6ffed;
}

.card--warning {
  border-color: #faad14;
  background: #fffbe6;
}

.card--danger {
  border-color: #ff4d4f;
  background: #fff2f0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .card--small {
    padding: 8px;
    font-size: 12px;
  }
  
  .card--medium {
    padding: 12px;
    font-size: 14px;
  }
  
  .card--large {
    padding: 16px;
    font-size: 16px;
  }
}
</style>
