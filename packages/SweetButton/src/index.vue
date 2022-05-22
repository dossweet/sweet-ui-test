<template>
  <button :type="type" :class="`sweet-button-${type}`">
    <!--使用默认插槽来填充文本-->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "sweetButton",
  props:{
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped lang="less">
.sweet-button-default{
  border: 1px solid #dcdfe6;
}

.sweet-button-primary{
  padding: 6px 10px;
  border: none;
  color: white;
  background-color: #20a0ff;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.sweet-button-primary:hover{
  background-color: rgba(32, 160, 255, 0.7);
}
</style>
