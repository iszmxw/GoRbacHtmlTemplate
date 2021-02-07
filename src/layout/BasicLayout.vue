<template>
  <div class="basic-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BasicLayout'
}
</script>

<style lang="scss" scoped>
  .basic-layout{
    padding: 32px;
    box-sizing: border-box;
  }
</style>
