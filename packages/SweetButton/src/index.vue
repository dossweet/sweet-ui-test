<template>
  <!--:disabled是用来接收父级的值的，用来做点击事件处理的。起css样式的是class里的disabled-->
  <button :type="type"
          @click="handleClick"
          class="sweet-button"
          :class="[
            `sweet-button--${type}`,
            `sweet-button--${size}`,
            {
              'is-disabled': disabled,
              'is-round': round,
              'is-circle': circle
            }
          ]"
          :disabled="disabled">
    <!--使用默认插槽来填充文本-->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "sweetButton",
  inject: {},
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size:{
      size: String,
      default: 'default'
    },
    disabled: Boolean,
    round: Boolean,
    circle: Boolean
  },
  methods:{
    handleClick(evt){
      this.$emit('click', evt);
    }
  }
}
</script>

<style scoped lang="less">
.sweet-button {
  padding: 8px 15px;
  border: none;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  transition: .1s;
  margin-left: 10px;
  cursor: pointer;
}

.sweet-button--default {
  color: #606266;
  background-color: white;
  border: 1px solid #dcdfe6;
}

.sweet-button--default:hover, .sweet-button--default:focus{
  color: #669fff;
  background-color: #ecf5ff;
  border: 1px solid #c9e3ff;
}

.sweet-button--default.is-disabled {
  color: #c0c4cc;
  background-color: #fff;
  border-color: #ebeef5;
  cursor: not-allowed;
}

.sweet-button--medium{
  font-size: 14px;
  padding: 6px 15px;
}

.sweet-button--small{
  font-size: 12px;
  padding: 6px 15px;
}

.sweet-button--mini{
  font-size: 12px;
  padding: 4px 13px;
}

.sweet-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.sweet-button--primary:hover,.sweet-button--primary:focus {
  color: white;
  background-color: rgba(32, 160, 255, 0.7);
}

.sweet-button--primary.is-disabled {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
  cursor: not-allowed;
}

.sweet-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.sweet-button--success:hover,.sweet-button--success:focus {
  color: white;
  background-color: rgba(103, 194, 54, 0.7);
}

.sweet-button--success.is-disabled {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
  cursor: not-allowed;
}

.sweet-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.sweet-button--info:hover, .sweet-button--info:focus{
  color: white;
  background-color: rgba(144, 147, 153, 0.7);
}

.sweet-button--info.is-disabled {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
  cursor: not-allowed;
}

.sweet-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.sweet-button--warning:hover, .sweet-button--warning:focus{
  color: white;
  background-color: rgba(230, 162, 60, 0.7);
}

.sweet-button--warning.is-disabled {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
  cursor: not-allowed;
}

.sweet-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.sweet-button--danger:hover, .sweet-button--danger:focus {
  color: white;
  background-color: rgba(245, 108, 108, 0.7);
}

.sweet-button--danger.is-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
  cursor: not-allowed;
}

.is-round{
  border-radius: 20px;
}
</style>
