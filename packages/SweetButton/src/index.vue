<template>
  <!--  :disabled是用来接收父级的值的，用来做点击事件处理的。起css样式的是class里的disabled,-->
  <button :type="type" :class="`sweet-button--${type}`" :disabled="disabled">
    <!--使用默认插槽来填充文本-->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "sweetButton",
  inject:{

  },
  props:{
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
  }
}
</script>

<style scoped lang="less">
.sweet-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.sweet-button-default{
  border: 1px solid #dcdfe6;
}

.sweet-button--primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.sweet-button--primary:hover{
  background-color: rgba(32, 160, 255, 0.7);
}

.sweet-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.sweet-button--success:hover{
  background-color: rgba(103, 194, 54, 0.7);
}

.sweet-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.sweet-button--info:hover{
  background-color: rgba(144, 147, 153, 0.7);
}

.sweet-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.sweet-button--warning:hover{
  background-color: rgba(230, 162, 60, 0.7);
}

.sweet-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.sweet-button--danger:hover{
  background-color: rgba(245, 108, 108, 0.7);
}
</style>
