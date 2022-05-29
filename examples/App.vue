<template>
  <div id="app">
    <div class="first">
      <sweet-button>主要按钮</sweet-button>
      <sweet-button type="primary" @click="sayHai">主要按钮</sweet-button>
      <sweet-button type="success">成功按钮</sweet-button>
      <sweet-button type="info">信息按钮</sweet-button>
      <sweet-button type="warning">警告按钮</sweet-button>
      <sweet-button type="danger">危险按钮</sweet-button>
    </div>
    <div class="second">
      <sweet-button round>主要按钮</sweet-button>
      <sweet-button type="primary" round>主要按钮</sweet-button>
      <sweet-button type="primary" round>主要按钮</sweet-button>
      <sweet-button type="success" round>成功按钮</sweet-button>
      <sweet-button type="info" round>信息按钮</sweet-button>
      <sweet-button type="warning" round>警告按钮</sweet-button>
      <sweet-button type="danger" round>危险按钮</sweet-button>
    </div>
    <div class="third">
      <sweet-button disabled>主要按钮</sweet-button>
      <sweet-button type="primary" disabled>主要按钮</sweet-button>
      <sweet-button type="primary" disabled>主要按钮</sweet-button>
      <sweet-button type="success" disabled>成功按钮</sweet-button>
      <sweet-button type="info" disabled>信息按钮</sweet-button>
      <sweet-button type="warning" disabled>警告按钮</sweet-button>
      <sweet-button type="danger" disabled>危险按钮</sweet-button>
    </div>
    <div class="fourth">
      <sweet-button>主要按钮</sweet-button>
      <sweet-button type="primary" size="medium">主要按钮</sweet-button>
      <sweet-button type="primary" size="small">主要按钮</sweet-button>
      <sweet-button type="success" size="mini">成功按钮</sweet-button>
      <sweet-button type="info" size="mini">信息按钮</sweet-button>
      <sweet-button type="warning" size="small">警告按钮</sweet-button>
      <sweet-button type="danger" size="medium">危险按钮</sweet-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    sayHai(){
      alert('希望你天天开心~')
    }
  }
}
</script>
<style lang="less">
div{
  margin: 10px;
}
</style>
