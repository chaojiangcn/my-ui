import MyCard from './Card.vue';

/**
 * Card 组件的 Storybook 配置
 * @description 为 Card 组件创建各种使用场景的示例
 */
export default {
  title: 'Components/Card',
  component: MyCard,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyCard },
    template: '<my-card v-bind="$props" @click="handleClick" />',
  }),
  argTypes: {
    /**
     * 卡片标题
     */
    title: {
      control: 'text',
      description: '卡片标题'
    },
    /**
     * 卡片类型
     */
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: '卡片类型'
    },
    /**
     * 卡片尺寸
     */
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '卡片尺寸'
    },
    /**
     * 是否禁用
     */
    disabled: {
      control: 'boolean',
      description: '是否禁用卡片'
    },
    /**
     * 是否显示加载状态
     */
    loading: {
      control: 'boolean',
      description: '是否显示加载状态'
    },
    /**
     * 是否可点击
     */
    clickable: {
      control: 'boolean',
      description: '是否可点击'
    },
    /**
     * 是否显示阴影
     */
    shadow: {
      control: 'boolean',
      description: '是否显示阴影'
    }
  },
};

/**
 * 基础卡片
 */
export const Default = {
  args: {
    title: '基础卡片',
    size: 'medium',
    type: 'default'
  },
};

/**
 * 主要卡片
 */
export const Primary = {
  args: {
    title: '主要卡片',
    type: 'primary',
    size: 'medium'
  },
};

/**
 * 成功卡片
 */
export const Success = {
  args: {
    title: '成功卡片',
    type: 'success',
    size: 'medium'
  },
};

/**
 * 警告卡片
 */
export const Warning = {
  args: {
    title: '警告卡片',
    type: 'warning',
    size: 'medium'
  },
};

/**
 * 危险卡片
 */
export const Danger = {
  args: {
    title: '危险卡片',
    type: 'danger',
    size: 'medium'
  },
};

/**
 * 小尺寸卡片
 */
export const Small = {
  args: {
    title: '小尺寸卡片',
    size: 'small',
    type: 'default'
  },
};

/**
 * 大尺寸卡片
 */
export const Large = {
  args: {
    title: '大尺寸卡片',
    size: 'large',
    type: 'default'
  },
};

/**
 * 可点击卡片
 */
export const Clickable = {
  args: {
    title: '可点击卡片',
    clickable: true,
    shadow: true,
    size: 'medium'
  },
};

/**
 * 加载状态卡片
 */
export const Loading = {
  args: {
    title: '加载中...',
    loading: true,
    size: 'medium'
  },
};

/**
 * 禁用状态卡片
 */
export const Disabled = {
  args: {
    title: '禁用卡片',
    disabled: true,
    size: 'medium'
  },
};
