<template>
  <div class="icon-body">
    <el-input v-model="name" style="position: relative;" clearable placeholder="请输入图标名称" @clear="filterIcons" @input.native="filterIcons">
      <i slot="suffix" class="el-icon-search el-input__icon" />
    </el-input>
    <div class="icon-list">
      <div v-for="(item, index) in iconList" :key="index" @click="selectedIcon(item)">
        <svg-icon :icon-class="item" style="height: 30px;width: 16px;" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import icons from './requireIcons'
export default {
  name: 'IconSelect',
  data() {
    return {
      name: '',
      iconList: icons
    }
  },
  methods: {
    filterIcons() {
      if (this.name) {
        this.iconList = this.iconList.filter(item => item.includes(this.name))
      } else {
        this.iconList = icons
      }
    },
    selectedIcon(name) {
      this.$emit('selected', name)
      document.body.click()
    },
    reset() {
      this.name = ''
      this.iconList = icons
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .icon-body {
    width: 100%;
    padding: 10px;
    .icon-list {
      height: 200px;
      overflow-y: scroll;
      display: flex;
      flex-flow: row wrap;
      div {
        line-height: 30px;
        cursor: pointer;
        padding: 5px 2px;
        width: 33%;
      }
      span {
        display: inline-block;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }

  /*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width:16px;
    height:16px;
    background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:10px;
    background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
    background-color:#555;
}
</style>
